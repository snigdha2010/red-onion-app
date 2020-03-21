import React from 'react';
import banner from '../../../images/bannerbackground.png';

const BannerField = () => {
    return (
        <div>
                <img className='container-fluid' src={banner} alt=""/>
        </div>
    );
};

export default BannerField;