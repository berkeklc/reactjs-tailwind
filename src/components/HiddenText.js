import React, { Component } from "react";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import Text5 from "./Text5";
import Text6 from "./Text6";
import Text7 from "./Text7";
import Text8 from "./Text8";

class HiddenText extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CULTURE"
        }
    }
   
    changeMessage()
    {
        if (this.state.status === 'CULTURE')
        {
            this.setState({message : 'People are lonely because they build walls instead of bridges', status: 'CULTURE'})
        }
        else
        {
            this.setState({ message: '', status: 'CULTURE' })
        }
    }
  
  render() {
    
    return (
        
      <div className="xs:hidden">   
      <div className="absolute left-24 bottom-36">
      <button className="relative glow font-custom1 opacity-0 p-2 text-2xl ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white left-24 bottom-[140px] font-custom2 w-40 opacity-100 p-2 text-sm		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>
      
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
