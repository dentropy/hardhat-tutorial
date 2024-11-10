# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

#### Important Links

* [Ethereum Testnet Faucets](https://www.alchemy.com/faucets)
* [OpenZeppllin Wizard](https://wizard.openzeppelin.com/)
* [ChainList](https://chainlist.org/)
* [Metamask](https://metamask.io)

#### CHAIDO Testnet Links

- [Gnosis Chiado Testnet RPC and Chain settings | ChainList](https://chainlist.org/chain/10200)
- [Chiado (Testnet) | Gnosis Chain](https://docs.gnosischain.com/about/networks/chiado)
- [Chiado Faucet](https://faucet.chiadochain.net/)
- [Gnosis Chiado Testnet Blockscout](https://gnosis-chiado.blockscout.com/)
#### Outline of Tutorial

* Generate Mnemonic
* Generate Accounts from Mnemonic
* Run Local Blockchain
* Add Accounts to Hardhat Config
* Deploy ERC20 token to local blockchain


#### Install Dependencies

``` bash

npm install --save-dev @nomicfoundation/hardhat-ethers ethers
npm install --save-dev @nomicfoundation/hardhat-ignition-ethers

```

#### Generate Mnemonic

``` bash

bun ./helperScripts/generateMnemonic.js

```

**Load Previously Generated Mnemonic**
``` bash

source ./helperScripts/.env

# if you have proper environment setup
source .env

```

#### Generate Accounts form Mnemonic

``` bash

bun ./helperScripts/loadMnemonicAccounts.js

```

#### Run Local Blockchain

**Install the following**
``` bash
# Rust
# https://www.rust-lang.org/tools/install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Foundry, it's faster than source
# https://book.getfoundry.sh/getting-started/installation
curl -L https://foundry.paradigm.xyz | bash

# Foundry for Anvil EVM (FROM SOURCE)
# https://github.com/foundry-rs/foundry/tree/master/crates/anvil
cargo install --git https://github.com/foundry-rs/foundry anvil --locked --force
```

**Run anvil raw**
``` bash
anvil
```

**Run anvil with Mnemonic accounts**
``` bash
# REMEMBER SOURCE THE ACCOUNTS
# You can set Mnemonic using MNEMONIC environment variable
source ./helperScripts/.env
source .env

# Bash
anvil -m $MNEMONIC -p 8545

```

#### Deplpy ENV 

``` bash

npx hardhat run ./scripts/deployPCoin.js --network localdev


npx hardhat ignition deploy ignition/modules/Token.ts --network localdev

npx hardhat ignition deploy ignition/modules/Token.ts --network chia

```

### Run Tests

``` bash

```


# Other

``` bash

npx hardhat ignition status chain-10200

```

# Other Cool Tools

* [solidstate-network/hardhat-accounts: 📒 Query Hardhat accounts and balances 💰](https://github.com/solidstate-network/hardhat-accounts)