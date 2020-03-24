import React from 'react';

const FoodBanner = (props) => {
    console.log(props); 
    return (
        <div>
            <a onClick= {()=>props.handlecurItem('breakfast')} href="breakfast">Breakfast</a>
            <a onClick= {()=>props.handlecurItem('lunch')} href="lunch">Lunch</a>
            <a href="">Dinner</a>
        </div>
    );
};

export default FoodBanner;