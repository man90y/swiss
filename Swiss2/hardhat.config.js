require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "821a770cd369bb5fe79dde80e00710184c2de51ae4226d30902f61cc40d665d4";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
