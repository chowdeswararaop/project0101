import './dropdown.css'
import {NavLink} from  'react-router-dom'

function Dropdown(props){

    const clickedHandler=()=>{
        console.log("clicked on drop down");
    }
    // console.log(props);
    let Dropdown=['dropdown']
    if(props.show)Dropdown=['dropdown','close']
// Dropdown.join(' ')}>
    return(
        <div className={Dropdown.join(' ')}>
            <div className="dropdown-content" onClick={clickedHandler}>
                
                <NavLink  to="/dashbord">Dashbord</NavLink>
           
                <NavLink  to="/details">Profile</NavLink>
            
                <NavLink to="/logout">Logout</NavLink>
            </div>
        </div>
        
    )
}

export default Dropdown