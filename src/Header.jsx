
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart,AiFillCloseCircle,AiOutlineUnorderedList } from "react-icons/ai";
import './Style.css'
function Header(props) {
    
  return (
 
<>
 <div className="Mheader">

    <div className="header">
         <h1><span>A</span>ZHAR'<span>s</span></h1>
         <div className="nav">
         <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contacts">
                        Contacts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/CartList">
                        <AiOutlineShoppingCart/>
                        <span className="cart-icon">{props.count}</span>
                    </NavLink>
                </li>
                
             </ul>
             <AiOutlineUnorderedList className="open"/>
             <AiFillCloseCircle className="close"/>
             
         </div>

    </div>




</div>
 

</>
)
}

export default Header