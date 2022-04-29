import React, { Component } from "react";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import Text5 from "./Text5";
import Text6 from "./Text6";
import Text7 from "./Text7";
import Text8 from "./Text8";

class HiddenText extends Component {
  
  render() {
    
    return (
        
      <div className="xs:hidden">   
     
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />


      </div>
    );
  }

}

export default HiddenText;
