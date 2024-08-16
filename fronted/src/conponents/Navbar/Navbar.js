import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './style.css';
import Modal from '../../Model';
import Cart from '../../screens/Cart/Cart';
import { useCart } from '../ContextReducer/ContextReducer';


function Navbar() {

  const [cartView, setCartView] = useState(false);
  let data= useCart();

  const navigate= useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <nav className='navbar'>
      <ul className='sections'>
        <li className='section'><Link to="/">Home</Link></li>
        {(localStorage.getItem("authToken")) ?
          <li className='section'><Link to="/myOrder">My Orders</Link></li>
          : ""}
      </ul>
      <div className="right-box">
        {!(localStorage.getItem("authToken")) ?
          <div className='d-flex'>
            <div className='section'><Link to="/login">Login</Link></div>
            <div className='section'><Link to="/createuser">SignUp</Link></div>
          </div>
          :
          <div className="d-flex">
            <div className='section' onClick={()=>{setCartView(true)}}>My Cart<span className="badge">{data.length}</span></div>
            {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
            <div className='section' style={{color:'red'}} onClick={handleLogout}>LogOut</div>
          </div>
        }
      </div>
    </nav>
  );
}

export default Navbar;
