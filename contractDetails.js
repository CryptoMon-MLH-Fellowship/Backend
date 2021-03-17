const ADDRESS = "0xf6fDeD4DF92F79c8Cf0357E913bC64CcF58aC99B";
const ABI = [
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_challenger",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_monId",
				type: "uint256",
			},
		],
		name: "accept",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bytes32",
				name: "_challengeHash",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_challengerMon",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_opponentMon",
				type: "uint256",
			},
		],
		name: "AcceptChallenge",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bytes32",
				name: "_challengeHash",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_winnerMon",
				type: "uint256",
			},
		],
		name: "AnnounceWinner",
		type: "event",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_opponent",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_monId",
				type: "uint256",
			},
		],
		name: "challenge",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "_player",
				type: "address",
			},
		],
		name: "ChallengeReady",
		type: "event",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string[]",
				name: "_names",
				type: "string[]",
			},
			{
				internalType: "string[]",
				name: "_genders",
				type: "string[]",
			},
			{
				internalType: "uint16[]",
				name: "_pokemonIds",
				type: "uint16[]",
			},
			{
				internalType: "uint8",
				name: "_randomNumber",
				type: "uint8",
			},
			{
				internalType: "address",
				name: "_player",
				type: "address",
			},
		],
		name: "createFirstCryptoMon",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_avatar",
				type: "string",
			},
		],
		name: "createUser",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_player",
				type: "address",
			},
		],
		name: "deletePlayerBackdoor",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "_challenger",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "_opponent",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_monId",
				type: "uint256",
			},
		],
		name: "NewChallenge",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "_player",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint16[]",
				name: "_pokemonIds",
				type: "uint16[]",
			},
			{
				indexed: false,
				internalType: "bool[]",
				name: "_shiny",
				type: "bool[]",
			},
		],
		name: "NewCryptoMon",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "_player",
				type: "address",
			},
		],
		name: "NewPlayer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		constant: false,
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "_cryptoMonId",
				type: "uint256",
			},
		],
		name: "setBattleReady",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "setChallengeReady",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_player",
				type: "address",
			},
			{
				internalType: "bool",
				name: "_value",
				type: "bool",
			},
		],
		name: "setChallengeReadyBackdoor",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "_ownerMon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_oppositeMon",
				type: "uint256",
			},
			{
				internalType: "uint16",
				name: "_randomNumber",
				type: "uint16",
			},
		],
		name: "settleBattle",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bytes32",
				name: "_hash",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_winnerMon",
				type: "uint256",
			},
		],
		name: "SettleBattle",
		type: "event",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "_challengeHash",
				type: "bytes32",
			},
			{
				internalType: "uint8",
				name: "_randomNumber",
				type: "uint8",
			},
		],
		name: "settleChallenge",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "_ownerMon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_oppositeMon",
				type: "uint256",
			},
		],
		name: "startBattle",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "_mon1",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_mon2",
				type: "uint256",
			},
		],
		name: "StartBattle",
		type: "event",
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "_diff",
				type: "uint256",
			},
		],
		name: "calculateXpChange",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "challenges",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "cryptoMons",
		outputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "string",
				name: "gender",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "xp",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "battleReadyTime",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "breedReadyTime",
				type: "uint256",
			},
			{
				internalType: "uint16",
				name: "pokemonId",
				type: "uint16",
			},
			{
				internalType: "uint16",
				name: "evolutionLevel",
				type: "uint16",
			},
			{
				internalType: "bool",
				name: "battleReady",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "shiny",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "getChallengeReadyPlayers",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address",
			},
		],
		name: "getCryptoMonsByOwner",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "id",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "string",
						name: "gender",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "xp",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "battleReadyTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "breedReadyTime",
						type: "uint256",
					},
					{
						internalType: "uint16",
						name: "pokemonId",
						type: "uint16",
					},
					{
						internalType: "uint16",
						name: "evolutionLevel",
						type: "uint16",
					},
					{
						internalType: "bool",
						name: "battleReady",
						type: "bool",
					},
					{
						internalType: "bool",
						name: "shiny",
						type: "bool",
					},
				],
				internalType: "struct MonFactory.CryptoMon[]",
				name: "",
				type: "tuple[]",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "isOwner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "monsInBattle",
		outputs: [
			{
				internalType: "uint256",
				name: "challengerMon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "opponentMon",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "monToOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "playerAddresses",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "players",
		outputs: [
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "string",
				name: "avatar",
				type: "string",
			},
			{
				internalType: "bool",
				name: "verified",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "receivedFirstCryptoMon",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "challengeReady",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "monCount",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "winCount",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "lossCount",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "points",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		name: "shinyCount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];

module.exports = {
	ADDRESS,
	ABI,
};
