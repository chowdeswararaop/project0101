import './dropdown.css'

function Dropdown(props){

    const clickedHandler=()=>{
        console.log("clicked on drop down");
    }
    // console.log(props);
    let Dropdown=['dropdown','close']
    if(props.show)Dropdown=['dropdown']
// Dropdown.join(' ')}>
    return(
        <div className={Dropdown.join(' ')}>
            <div className="dropdown-content" onClick={clickedHandler}>
                <a href="#">Dashbord</a>
           
                <a href="#">Profile</a>
            
                <a href="#">Logout</a>
            </div>
        </div>
        
    )
}

export default Dropdown