# CryptoMon - Backend

## Description
- This repository contains the backend component of CryptoMon - A Blockchain and NFT based Pokemon Battle Game.
- The backend listens to 2 events, New Player and New Battle.
- When a New Player event is emitted, it fetches 5 random starter Pokemon for the player and assigns it to them.
- When a New Battle event is emitted, it creates a random seed and settles the battle in order to announce the winner.

## Development Setup
- Clone the repository and run `npm install` to install the necessary dependencies.
- Run `npm start` to get the server up and running.
- Create a `.env` file and add your WEB3_PROVIDER and ACCOUNT_PRIVATE_KEY, as shown in `.env.example`.
- If you wish to change the contract address, you can do so in contractDetails.js
