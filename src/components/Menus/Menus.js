import React from 'react';

const Menus = (props) => {
   
    const{price,img,itemname,description}=props.menus 
   
    return (
        <div className='col-md-4 mb-4'>
                <div className='card h-100'>
                    <img className='card-img-top'src={img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{itemname}</h5>
                        <p className="card-text">{description}</p>
                        <p><b>${price}</b></p>
                    </div>
                </div>    
        </div>         
    );
};

export default Menus;