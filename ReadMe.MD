setup the local dev env:
download VS Code
install nodejs
install git

install VS Code extension: Solidity from Nomic Foundation
setup the auto formatter for solidity code: View -> Command Palette -> search Setting open User Setting JSON, sample setting:
{
"solidity.telemetry": true,
"[solidity]": {
"editor.defaultFormatter": "NomicFoundation.hardhat-solidity"
},
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.formatOnSave": true,
"[json]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}

install VS Code extension: Prettier - Code formatter

ethers-simple-storage

java script hello world sample:

node hello-javascript.js

to compile the solidity code by solc.js

npm install solc

to install yarn , run

corepack enable

after that you can check: yarn --version

to install solc, run

yarn add solc

do the compile directly:

yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol

you will get the abi and bin files

we can put the compile command in package.json, e.g.

"scripts": {
"compile": "solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol"
}

so we can run "yarn compile" to compile

use Ganache to start up a fake block chain in local

HTTP://127.0.0.1:7545

ethers.js or web3.js

to install ethers, run "yarn add ethers"

then use ethers.js to deploy the smart contract to block chain

node deploy.js

with changing the RPC_URL in .env, we can deploy the smart contract to some other test net
