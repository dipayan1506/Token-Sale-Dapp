// import { ethers as _ethers } from "hardhat";
const hre = require("hardhat");



const tokens=(nToken)=>{
    return ethers.utils.parseUnits(nToken.toString(),"ether");
};

async function main(){
    const _initialSupply = tokens(5000000);

    const TokenSale=await hre.ethers.
    getContractFactory("TokenSale");


    const tokensale =await TokenSale.deploy(_initialSupply);

    await tokensale.deployed();
    console.log(`TokenSale : ${tokensale.address}`);



    //TokenSaleContract deploy

    const _tokenPrice= tokens(1);
    const TokenSaleContract=await hre.ethers.
    getContractFactory("TokenSaleContract");
    const tokenSalecontract=await TokenSaleContract.deploy(
        tokensale.address,_tokenPrice
    );


    await tokenSalecontract.deployed();

    console.log(`TokenSalecontract: ${tokenSalecontract.address}`);

   



}

main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});