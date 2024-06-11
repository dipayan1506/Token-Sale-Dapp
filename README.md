

# Token Sale DApp

This is a decentralized application (DApp) for a token sale, built using Solidity, JavaScript, CSS, Ether.js, and Next.js. The DApp allows users to buy and sell tokens on the Ethereum blockchain.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract](#smart-contract)
- [Contributing](#contributing)


## Overview
This Token Sale DApp allows users to purchase tokens through a decentralized platform. It leverages smart contracts written in Solidity and interacts with the Ethereum blockchain via Ether.js. The frontend is designed using Next.js, HTML, CSS, and JavaScript.

## Features
- Buy and sell tokens
- View token balance
- Connect with MetaMask
- Real-time updates

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed
- npm or yarn package manager installed
- MetaMask extension installed on your browser
- An Ethereum account with testnet funds (e.g., Rinkeby or Ropsten)
- Hardhat installed globally (`npm install -g hardhat`)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/token-sale-dapp.git
    cd token-sale-dapp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Compile the smart contracts:
    ```sh
    npx hardhat compile
    ```

4. Start the local Hardhat node:
    ```sh
    npx hardhat node
    ```

5. Deploy the smart contracts to the local Hardhat node:
    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```

6. Start the Next.js development server:
    ```sh
    npm run dev
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Connect your MetaMask wallet and configure it to connect to the local Hardhat node:
    - Network Name: Localhost 8545
    - New RPC URL: http://127.0.0.1:8545
    - Chain ID: 31337 (Hardhat default)
3. Purchase tokens by entering the amount and clicking "Buy Tokens".
4. View your token balance on the interface.

## Smart Contract
The smart contract for the token sale is written in Solidity and can be found in the `contracts` directory. Here is a brief overview of the main contract:

```solidity
// SPDX-License-Identifier: MIT
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TokenSale {
    string public name = "Token Sale";
    string public symbol = "T";
    string public standard = "@TokenSale .v.0.1";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint256 public userId;

    address[] public holderToken;

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    struct TokenHolderInfo {
        uint256 tokenId;
        address from;
        address to;
        uint256 totalToken;
        bool tokenHolder;
    }

    mapping(address => TokenHolderInfo) public tokenHolderInfos;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 initialSupply) {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply;
    }

    function inc() internal {
        userId++;
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        inc();

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[to];
        tokenHolderInfo.tokenId = userId;
        tokenHolderInfo.from = msg.sender;
        tokenHolderInfo.to = to;
        tokenHolderInfo.totalToken = value;
        tokenHolderInfo.tokenHolder = true;

        holderToken.push(to);

        emit Transfer(msg.sender, to, value);

        return true;
    }

    function transferFrom(address from, address to, uint256 value) public returns (bool success) {
        require(value <= balanceOf[from], "Insufficient balance");
        require(value <= allowance[from][msg.sender], "Allowance exceeded");

        balanceOf[from] -= value;
        balanceOf[to] += value;

        allowance[from][msg.sender] -= value;

        emit Transfer(from, to, value);

        return true;
    }

    // GET TOKEN HOLDER DATA
    function getTokenHolderData(address _address) public view returns (
        uint256, address, address, uint256, bool
    ) {
        TokenHolderInfo storage info = tokenHolderInfos[_address];
        return (
            info.tokenId,
            info.to,
            info.from,
            info.totalToken,
            info.tokenHolder
        );
    }

    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.



