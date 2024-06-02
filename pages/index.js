import React from "react";

import { useStateContext } from "../Context/index";
import {About,ArrowUp,Banner,Blog,Client,Contact,Distribution,Faq,Footer,Header,Loader,
  MobileApp,Service,Team,TimeLine,TokenSale} from "../Components/index";

const index = () => {
  const { 
    transferNativeToken, TOKEN_ICO,
    currentHolder,
    buyToken,
    connectWallet,
    setAddress,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
  } = useStateContext();

  return (
    <div className="v_dark">
      
     <Header address={address} setAddress={setAddress} connectWallet={connectWallet}></Header>
     <Banner transferNativeToken={transferNativeToken}/>
     <Service/>
     <About/>
     <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
     <Distribution />
     <MobileApp/>
     <Team/>
     <Faq/>
     <Contact/>
     <Footer/>
     
    </div>
  );
};

export default index;
