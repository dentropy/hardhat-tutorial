import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@solidstate/hardhat-accounts';

const config: HardhatUserConfig = {
  networks: {
    localdev: {
      url: "http://127.0.0.1:8545/",
      accounts: {
        mnemonic: "grab grass spell view place secret half health pair render assault truth",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    chia: {
      url: "https://gnosis-chiado-rpc.publicnode.com",
      accounts: {
        mnemonic: "grab grass spell view place secret half health pair render assault truth",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
  },
  solidity: "0.8.22",
};


export default config;
