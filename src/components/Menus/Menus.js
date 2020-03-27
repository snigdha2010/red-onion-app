import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';



const Menus = (props) => {
   
    const{price,img,itemname,description,key}=props.menus 
   
    return (
        <div className='col-md-4 mb-4'>
                <div className='card name h-100'><Link to = {'/product/'+key}> 
                    <img className='card-img-top'src={img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{itemname}</h5>
                        <p className="card-text">{description}</p>
                        <p><b>${price}</b></p>
                        
                    </div>
               </Link></div>    
        </div>         
    );
};

export default Menus;