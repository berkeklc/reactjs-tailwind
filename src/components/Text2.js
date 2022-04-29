import React, { Component } from "react";

class Text2 extends Component {
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
            this.setState({message : 'Culture is the arts elevated to a set of beliefss      - MAHATMA GANDHI', status: 'CORE'})
        }
        else
        {
            this.setState({ message: '', status: 'CORE' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute right-24 bottom-48">
      <button className=" relative glow font-custom1 opacity-0 p-5 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white right-24 bottom-[140px] font-custom2 w-40 opacity-100 p-5 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text2;
