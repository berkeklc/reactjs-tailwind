import React, { Component } from "react";

class Text2 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CHARM"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CHARM')
        {
            this.setState({message : 'Genius is in the idea. Impact, however, comes from action', status: 'CHARM'})
        }
        else
        {
            this.setState({ message: '', status: 'CHARM' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute right-96 top-13">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white right-24 h-20 bottom-[140px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text2;
