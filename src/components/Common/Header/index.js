//rfce
import React from 'react';
import "./style.css";
import TemporaryDrawer from './drawer';
import Button from "../Button";
import { Link } from 'react-router-dom';
import ThemeChanger from '../../ThemeChanger';


function Header() {
  

  return (
    <div className="navbar">
      <h1 className='logo'>
CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
      </h1>
      <div className='links'>
      <p>
        <ThemeChanger/>
      </p>
      
        <Link to='/'>
          <p className='link'>Home</p>
        </Link>
        <Link to='/compare'>
          <p className='link'>Compare</p>
        </Link>
        {/* <Link to='/watch'>
          <p className='link'>Watchlist</p>
        </Link> */}
        <Link to='/dashboard'>
          <Button text={"Dashboard"}
          
            onClick={()=>console.log("btn-click")}
          />
        </Link>
      </div>
      <div className='mobile-drawer'>
<TemporaryDrawer/>
      </div>

    </div>
  )
}

export default Header