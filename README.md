# Smart Contract fot Altblock Exchange
ERC20 Tokens Altblock Exchange

    Token Name: "Altblock Exchange Token"   
    Token Symbol: "AET"  
    Total Supply = 900 Millions

## Install

````bash

    # Install truffle
    npm install -g truffle

    # Install Ganache for testrpc
    npm install -g ganache-cli

    # Run testrpc
    ganache-cli -p 8545 -u 0

    # Install the dependencies
    npm install
````

## Contract

````bash
    # Compile the contract
    truffle compile

    # Migrate the contract
    truffle migrate

    # Test the contract
    truffle test

````

## Deploying to ropsten network

Make an .env file as below

 ````bash
 MNEMONIC="MNEMONIC CODE... CODE"
 INFURA_API_KEY="APIKEY"
 ````
Run the following command

````bash
truffle deploy --network ropsten
````


