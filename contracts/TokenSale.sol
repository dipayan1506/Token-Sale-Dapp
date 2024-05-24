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
