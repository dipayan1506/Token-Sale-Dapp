// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TokenSale.sol";

contract TokenSaleContract{

    address admin;
    TokenSale public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer,uint256 _amount);

    constructor(TokenSale _tokenContract,uint256 _tokenPrice){
        admin =msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint256 x,uint256 y) internal pure returns (uint256 z){
        require(y==0 || (z=x*y)/y==x);

    }

     function buyToken(uint256 _numOfTokens) public payable {
        require(msg.value==multiply(_numOfTokens, tokenPrice));
        require(tokenContract.balanceOf(address(this))>=_numOfTokens);
        require(tokenContract.transfer(msg.sender,_numOfTokens*1000000000000000000));

        tokensSold+=_numOfTokens;
        emit  Sell(msg.sender,_numOfTokens);


     }
     

     //Function To END or Withdraw Token sale
     function endSale()  public {

        require(msg.sender==admin);
        require(tokenContract.transfer(admin,tokenContract.balanceOf(address(this))));

        payable(admin).transfer(address(this).balance);
     }

}