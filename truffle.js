const Web3 = require("web3");
const web3 = new Web3();
const HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = process.env.ROPSTEN_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;
var fromAddress = process.env.FROM_ADDRESS

module.exports = {
  networks: {
    live: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://mainnet.infura.io/" + accessToken
        );
      },
      network_id: "1",
      from: fromAddress,
      gas: 3000000,
      gasPrice: web3.toWei("10", "gwei")
    }
  }
};

