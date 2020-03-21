import React from 'react';
import './Banner.css';
import bannerbackground from '../../images/bannerbackground.png';


const Banner = () => {
    const style = {
         backgroundImage: `url(${bannerbackground})`,
         backgroundRepeat:'no-repeat',
         backgroundPosition:'center',
         backgroundSize:'cover',
         height:'500px'
    };

    return (
        <div className= 'banner text-center ' style={style}> 
            <h2 >Best food waiting for your belly</h2>
            <input type="search" name="" id="" placeholder='  Search food items'/>
            <button>Search</button>   
        </div>
    );
};

export default Banner;