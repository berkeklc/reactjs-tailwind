import React, { Component } from "react";

class Text6 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CRUX"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CRUX')
        {
            this.setState({message : 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself', status: 'CRUX'})
        }
        else
        {
            this.setState({ message: '', status: 'CRUX' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute right-96 bottom-48">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white right-24 bottom-[140px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text6;
