require("dotenv").load()

const HDWalletProvider = require('truffle-hdwallet-provider');

const ropstenNetwork = `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`
const seed_words = process.env.MNEMONIC

const ropstenProvider = new HDWalletProvider(seed_words, ropstenNetwork)

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 3,
    },
  }
};
