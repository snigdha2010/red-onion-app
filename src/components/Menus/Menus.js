import React from 'react';

const Menus = (props) => {
   
    const{categories,price,img,itemname}=props.menus 
   
    return (
        <div className='col-md-4'>
                <div className='card '>
                    <div class="card-body">
                        <h5 class="card-title">Card title{itemname}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>    
        </div>         
    );
};

export default Menus;