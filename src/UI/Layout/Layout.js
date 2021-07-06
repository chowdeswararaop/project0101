import "./Layout.css";
import Header  from "../../components/header/header";
import Main from  '../../components/main/main'
import Dropdown from "../../components/header/dropdown";
import { render } from "@testing-library/react";
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
          <Main />
      </div>
    )
}
}

export default Layout