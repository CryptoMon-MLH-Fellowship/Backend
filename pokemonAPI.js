const axios = require("axios");

const { generateRandomNumber } = require("./randomNumber");

const fetchPokemon = async (id) => {
	try {
		const { data } = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);

		return [data.chain.species.name, parseInt(data.chain.species.url.split("/").slice(-2)[0])];
	} catch (err) {
		throw err;
	}
};

const fetchStarterPokemons = async () => {
	try {
		const randomNumbers = [];

		for (let i = 0; i < 5; ++i) {
			randomNumbers[i] = generateRandomNumber(1, 150);
		}

		const promises = [];

		randomNumbers.forEach((num) => {
			promises.push(fetchPokemon(num));
		});

		const pokemon = await Promise.all(promises);

		const names = pokemon.map((mon) => mon[0]);
		const genders = pokemon.map(() => (generateRandomNumber(0, 1) === 0 ? "male" : "female"));
		const pokemonIds = pokemon.map((mon) => mon[1]);

		return { names, genders, pokemonIds };
	} catch (err) {
		throw err;
	}
};

module.exports = { fetchStarterPokemons };
