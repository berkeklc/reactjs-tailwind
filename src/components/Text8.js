import React, { Component } from "react";

class Text8 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CAPTURE"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CAPTURE')
        {
            this.setState({message : 'Battles come with rewards, find the fish.', status: 'CAPTURE'})
        }
        else
        {
            this.setState({ message: '', status: 'CAPTURE' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute right-48 bottom-4  ">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white right-36 bottom-[140px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text8;
