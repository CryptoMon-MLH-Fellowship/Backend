require("dotenv").config();
const Web3 = require("web3");

const { ADDRESS, ABI } = require("./contractDetails");
const { fetchStarterPokemons } = require("./pokemonAPI");
const { generateRandomNumber } = require("./randomNumber");

const { WEB3_PROVIDER, ACCOUNT_PRIVATE_KEY } = process.env;

const web3 = new Web3(WEB3_PROVIDER);
const contract = new web3.eth.Contract(ABI, ADDRESS);

const newPlayerQueue = [];
const settleChallengeQueue = [];

const listenToEvents = () => {
	contract.events.NewPlayer(async (err, event) => {
		if (err) {
			console.error("An error has occurred!", err);
			return;
		}
		const playerAddress = event.returnValues._player;
		newPlayerQueue.push(playerAddress);
	});

	contract.events.AcceptChallenge(async (err, event) => {
		if (err) {
			console.error("An error has occurred!", err);
			return;
		}
		const challengeHash = event.returnValues._challengeHash;
		settleChallengeQueue.push(challengeHash);
	});
};

const processNewPlayerQueue = async () => {
	let processedRequests = 0;
	while (newPlayerQueue.length > 0 && processedRequests < 3) {
		const playerAddress = newPlayerQueue.shift();
		await processNewPlayerRequest(playerAddress);
		processedRequests++;
	}
};

const processSettleChallengeQueue = async () => {
	let processedRequests = 0;
	while (settleChallengeQueue.length > 0 && processedRequests < 3) {
		const challengeHash = settleChallengeQueue.shift();
		await processSettleChallengeRequest(challengeHash);
		processedRequests++;
	}
};

const processNewPlayerRequest = async (playerAddress) => {
	try {
		console.log("PROCESSING FOR PLAYER", playerAddress);
		const { names, genders, pokemonIds } = await fetchStarterPokemons();
		console.log("RECEIVED POKEMON : ", names, pokemonIds);

		const encodedData = contract.methods
			.createFirstCryptoMon(names, genders, pokemonIds, 5, playerAddress)
			.encodeABI();

		const signedTransaction = await signTransaction(encodedData);
		const status = await sendTransaction(signedTransaction);

		console.log("TRANSACTION STATUS : ", status);
	} catch (err) {
		console.log("MON ERROR : ", err);
	}
};

const processSettleChallengeRequest = async (challengeHash) => {
	try {
		setTimeout(async () => {
			console.log("PROCESSING CHALLENGE : ", challengeHash);
			const encodedData = contract.methods
				.settleChallenge(challengeHash, generateRandomNumber(1, 100))
				.encodeABI();

			const signedTransaction = await signTransaction(encodedData);
			const status = await sendTransaction(signedTransaction);

			console.log("TRANSACTION STATUS : ", status);
		}, 10000);
	} catch (err) {
		console.log("CHALLENEGE ERROR : ", err);
	}
};

const signTransaction = async (encodedData) => {
	//Sign transaction with private key
	const signedTransaction = await web3.eth.accounts.signTransaction(
		{
			to: ADDRESS,
			data: encodedData,
			gas: 1000000,
		},
		ACCOUNT_PRIVATE_KEY
	);
	console.log(signedTransaction);
	return signedTransaction;
};

const sendTransaction = async (signedTransaction) => {
	//Send the signed transaction
	const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
	return receipt.status;
};

const main = async () => {
	try {
		listenToEvents();
	} catch (err) {
		console.log("MAIN ERROR : ", err);
	}
};

(async () => {
	main();

	setInterval(async () => {
		await processNewPlayerQueue();
		await processSettleChallengeQueue();
	}, 4000);
})();
