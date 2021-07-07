import "./Layout.css";
import Header  from "../../components/header/header";


import { Component } from "react";
class Layout extends Component{

  state={dropdown:false}

 menuHandler=()=>{
     let show=this.state.dropdown
    this.setState({dropdown:!show})
    }

  render(){
    console.log(this.state.dropdown);
    return(
      <div className="layout">
          <Header show={this.state.dropdown} menuclick0={this.menuHandler}/>
          <main>
          {this.props.children}
          </main>
      </div>
    )
}
}

export default Layout