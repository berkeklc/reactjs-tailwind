import React, { Component } from "react";

class Text3 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CORE"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CORE')
        {
            this.setState({message : 'The secret of change is to focus all your energy not on fighting the old but on building the new', status: 'CORE'})
        }
        else
        {
            this.setState({ message: '', status: 'CORE' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute left-7 top-36">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" h-24 text-white right-64 bottom-[100px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text3;
