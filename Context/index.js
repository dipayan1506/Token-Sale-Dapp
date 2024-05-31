import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  Children,
} from "react";
import { ethers } from "ethers";

//Internal import
import {
  CheckIfWalletConnected,
  connectWallet,
  connectingTOKENCONTRACT,
  connectingTOKEN_SALE_CONTRACT,
  getBalance,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const TOKEN_ICO = "Token Sale Dapp";

  //STATE VARIABLES
   const [address, setAddress] = useState("");
   const [balance, setBalance] = useState("");
   const [nativeToken, setNativeToken] = useState("");
   const [tokenHolders, setTokenHolders] = useState([]);
   const [tokenSale, setTokenSale] = useState("");
   const [currentHolder, setCurrentHolder] = useState("");


   //FETCH CONTRACT DATA


   const fetchInitialData =async()=>{
      try{
         //GET USER ACCOUNT
         const account =await CheckIfWalletConnected();
         //GET USER BALANCE
         const balance=await getBalance();

         setBalance(ethers.utils.formatEther(balance.toString()));

         setAddress(account);

         //TOKEN CONTRACT

         const TOKEN_CONTRACT=await connectingTOKENCONTRACT();
         let tokenbalance;

         if(account){
            tokenbalance=await TOKEN_CONTRACT.balanceOf[account];

         }
         else{
            tokenbalance=0;
         }

         //GET ALL TOKEN DATA

         const tokenName=await TOKEN_CONTRACT.name();
         const tokenSymbol=await TOKEN_CONTRACT.symbol();
         const tokenTotalSupply=await TOKEN_CONTRACT.totalSupply();
         const tokenHolders=await TOKEN_CONTRACT._userId();
         const tokenStandard =await TOKEN_CONTRACT.standard();
         const tokenAddress=await TOKEN_CONTRACT.address;
         const tokenOwnerOfContract=await TOKEN_CONTRACT.ownerOfContract();

         const nativeToken={
            tokenAddress: tokenAddress,
            tokenName:tokenName,
            tokenSymbol:tokenSymbol,
            tokenOwnerOfContract:tokenOwnerOfContract,
            tokenStandard:tokenStandard,
            tokenTotalSupply:ethers.utils.formatEther(tokenTotalSupply.toString()),
            tokenbalance:ethers.utils.formatEther(tokenbalance.toString()),
            tokenHolders:tokenHolders.toNumber(),

         };
         setNativeToken(nativeToken);


         


      }catch(error){
         console.log(error);
      }
   };
   useEffect(()=>{
    fetchInitialData();
   },[])



  return (
    <StateContext.Provider value={{ TOKEN_ICO }}>
    
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
