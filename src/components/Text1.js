import React, { Component } from "react";

class Text1 extends Component {
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
        
      <div>   
    
      
      <div className="absolute  left-24 bottom-36">
      <button className=" relative glow font-custom1 opacity-0 p-2 text-2xl	 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]" onClick={()=> this.changeMessage() } >
        <h1 className=" text-white left-24 bottom-[140px] font-custom2 w-40 opacity-100 p-2 text-sm ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#fff]">{this.state.message}</h1> {this.state.status}
        </button>
      </div>

      </div>
    );
  }

}

export default Text1;
