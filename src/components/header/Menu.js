
import Dropdown from './dropdown'
import './Menu.css'


function Menu(props){
    console.log(props);
    return(
        <div>
       <div className='menu '   onClick={props.menuclick1} >
           <div></div>
           <div></div>
           <div></div>
       </div>
       </div>
    

    )
}
export default Menu