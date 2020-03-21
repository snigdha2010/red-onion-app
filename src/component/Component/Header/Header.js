import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div  className='d-flex fixed-top header '>
            <div>
              <img src={logo} alt=""/>  
            </div>
            <div className='ml-auto login'>
                <a href="">{cart}</a>
                <a href="">Login</a>
                <button>Sign up</button>
            </div>
            
        </div>
    );
};

export default Header;