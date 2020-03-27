import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAddCart } from '../MenuDetail/MenuDetail';

const Header = () => {
    const cart = useAddCart();
    console.log(cart);

    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='container'>
            <div  className='d-flex header '>
                <div>
                   <img className='align-items-start' src={logo} alt=""/>
                </div>  
                 <div className='ml-auto login'> 
                    < span>{shoppingCart}</ span>
                    < span>Login</ span>
                    <button>Sign up</button>
                 </div> 
            </div>
        </div>
           
    
    );
};

export default Header;