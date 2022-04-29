import React, { Component } from "react";

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
            this.setState({message : 'Culture is the arts elevated to a set of beliefs      - MAHATMA GANDHI', status: 'CULTURE'})
        }
        else
        {
            this.setState({ message: '', status: 'CULTURE' })
        }
    }
  render() {
    
    return (
        
      <div>   
      
      <div className="absolute left-24 bottom-36">
      <button className=" relative glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white left-24 bottom-[140px] font-custom2 w-40 opacity-100 p-5 text-sm		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}</button>
      </div>
       
<p className="absolute right-24 bottom-48 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CORE</p>
<p className="absolute left-64 top-36 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CREATE</p>
<p className="absolute left-96 bottom-28 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CHARM</p>
<p className="absolute right-24 top-72 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CATALYST</p>
      </div>
      
    );
  }

}

export default HiddenText;
