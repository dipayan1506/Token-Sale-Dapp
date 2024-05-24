// import { ethers as _ethers } from "hardhat";
const { ethers: _ethers } = require("hardhat");



const tokens=(nToken)=>{
    return ethers.utils.parseUnits(nToken.toString(),"ether");
};

async function main(){
    const _initialSupply = tokens(50000);

    const TokenSale=await _ethers.
    getContractFactory("TokenSale");


    const theBlockchain =await TokenSale.deploy(_initialSupply);

    await theBlockchain.deployed();
    console.log(`TheBlockachain : ${theBlockchain.address}`);



    //TokenSaleContract deploy

    const _tokenPrice= tokens(1);
    const tokenSale=await TokenSaleContract.deploy(
        theBlockchain.address,_tokenPrice
    );


    await tokenSale.deployed();

    console.log(`TokenSale: ${tokenSale.address}`);

   



}

main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});