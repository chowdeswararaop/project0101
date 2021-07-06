
import './header.css'
import Menu from '../../components/header/Menu.js'
import Dropdown from '../../components/header/dropdown'
import { Component } from 'react';

function Header(props){

  
    return(
        <header className="header">
           <p>hello world</p>
           <Menu menuclick1={props.menuclick0} />
           <Dropdown show={props.show}/>
            
        </header>

        
    )

}

export default Header