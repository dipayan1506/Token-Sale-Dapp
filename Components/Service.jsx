import React from "react";


const Service = () => {
  const services=()=>[
    {
      title:"Secure Storage",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },
    {
      title:"Mobile App",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },{
      title:"Exchange Service",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },
    {
      title:"investment Project",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },
    {
      title:"Credit Card use",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },
    {
      title:"Planning",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet",

    },
    
  ];
  return (
    <section className="small-pb" id="service">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 ">
            <div className="title_default_light title_border text-center">
              <h4 className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Meet our solution for you
              </h4>
              <p className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, arcu placerat consequat dictum, diam nibh cursus libero, non dictum urna neque ac lectus. Aenean turpis velit, tempus eget orci sit amet, eleifend consequat nibh. In diam diam, varius ac ligula nec, pulvinar pharetra nibh.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services().map((service,i)=>(
            <div className="col-lg-4 col-md-6 col-sm-12" key={i+1}>
              <div className="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay={`0.${i+1}`}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
};



export default Service;
