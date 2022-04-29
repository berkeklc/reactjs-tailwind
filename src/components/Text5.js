import React, { Component } from "react";

class Text5 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CATALYST"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CATALYST')
        {
            this.setState({message : "Life doesn't stop for anybody" , status: 'CATALYST'})
        }
        else
        {
            this.setState({ message: '', status: 'CATALYST' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute right-24 top-72 ">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white right-24 bottom-[260px] h-16 font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text5;
