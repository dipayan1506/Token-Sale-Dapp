import React from "react";

import { useStateContext } from "../Context/index";

const index = () => {
  const { TOKEN_ICO } = useStateContext();

  return (
    <div>
      <h1>
        
        {TOKEN_ICO}
      </h1>
    </div>
  );
};

export default index;
