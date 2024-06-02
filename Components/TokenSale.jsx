import React,{useState} from "react";
import { BsCurrencyBitcoin,BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple,SiLitecoin } from "react-icons/si";

const TokenSale = ({buyToken, tokenSale}) => {
  const [nToken,setNToken]= useState(1);
  const percentage =(tokenSale?.tokensold/tokenSale?.tokenSaleBalance)*100;
  const showPercentage= percentage.toString();

  return (
    <section className="section_token token_sale bg_light_dark"
    data-z-index="1"
     id="token"
     data-parallax="scroll"
     data-image-src="assets/images/token_bg.png">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 ">
           <div className="title_default_light title_border text-center">
            <h4 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
            Token Sale

            </h4>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              
            </p>
           </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              Starting Time:
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              June 01,2024 (Sat 10:00 AM)
            </p>
            </div>
            <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              Endin Time:
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              June 10,2024 (MON 10:00 AM)
            </p>
            </div>

            <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              Token Exchange Rate
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              1 ETH=1 TBC, 1 ECC =1 TBC
            </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30 animation"
              >
              <div className="animation tk_countdown text-center token_countdown_bg"
                data-animation="fadeInUp"
            data-animation-delay="0.1s">


              <div className="field_form ">
                <div className="row">
                <div className="form-group col-md-12 animation"
                data-animation="fadeInUp"
            data-animation-delay="1.4s"
                >
                  <input
                  type="number"
                  required
                  placeholder="1"
                  id="first-name"
                  min={1}
                  onChange={()=>setNToken(e.target.value)}
                   className="form-control"
                   name="token">

                   </input>
                   </div>
                </div>
              </div>

            <div className="tk_counter_inner">
              <div className="progress animation"
              data-animation="fadeInUp"
            data-animation-delay="0.2s">
            <div className="progress-bar proress-bar-striped gradient "
            role="progressbar"
            aria-valuenow={`${percentage}`}
            aria-valuemin={"0"}
            aria-valuemax={"100"}
            style={{
              width:`${percentage}`,
            }}>
              {showPercentage.slice(0,4)}%
            </div>
            <span className="progress_label bg-white inline_style_1">
              <strong > {tokenSale?.tokenSold}TBC</strong>
            </span>
            <span className="progress_label bg-white inline_style_2">
              <strong > {tokenSale?.tokenSold}TBC</strong>
            </span>
            <span className="progress_min_val">Sale Raised</span>
            <span className="progress_max_val">Soft Caps</span>


              </div>

              <a className="btn btn-default btn-radius animation"
               data-animation="fadeInUp"
            data-animation-delay="0.1s">
              Buy Token <BsArrowRight/>
            </a>

            <ul className="icon_list list_none d-flex justify-content-center"
            >
              <li 
              className="progress animation"
              data-animation="fadeInUp"
            data-animation-delay="0.5s"
              >
              <FaEthereum/>
              </li>
              <li 
              className="progress animation"
              data-animation="fadeInUp"
            data-animation-delay="0.5s"
              >
              <BsCurrencyBitcoin/>
              </li>
              <li 
              className="progress animation"
              data-animation="fadeInUp"
            data-animation-delay="0.5s"
              >
      <SiRipple/>
              </li>
              <li 
              className="progress animation"
              data-animation="fadeInUp"
            data-animation-delay="0.5s"
              >
      <SiLitecoin/>

              </li>
            </ul>
            </div>
            </div>

            </div>
          </div>

          <div className="col-lg-3">
          <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
             Low-High 24h:
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              $3,4556 - $2,6783
            </p>
            </div>

            <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              Total Token sale
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              {tokenSale?.tokenSold} TBC {showPercentage.slice(0,4)}%
            </p>
            </div>

            <div className="pr_box">
              <h6 className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
             Acceptable Currencies
            </h6>
            <p className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              ETH,BTC,LTC,XRP
            </p>
            </div>

          </div>
        </div>
      </div>
     </section>

  )
};

export default TokenSale;
