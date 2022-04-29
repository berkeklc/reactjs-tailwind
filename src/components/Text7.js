import React, { Component } from "react";

class Text7 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CONTROL"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CONTROL')
        {
            this.setState({message : 'Without a plan, even the most brilliant can get lost', status: 'CONTROL'})
        }
        else
        {
            this.setState({ message: '', status: 'CONTROL' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute top-[180px] left-[500px] ">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white  font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text7;
