import React, { Component } from "react";

class Text4 extends Component {
    constructor()
    {
        super();
        this.state = {
            message: '',
            status: "CREATE"
        }
    }
    changeMessage()
    {
        if (this.state.status === 'CREATE')
        {
            this.setState({message : 'Always deliver more than expected', status: 'CREATE'})
        }
        else
        {
            this.setState({ message: '', status: 'CREATE' })
        }
    }
  render() {
    
    return (
        
      <div>   
     
      
      <div className="absolute left-96 bottom-28">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white left-96 bottom-[100px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text4;
