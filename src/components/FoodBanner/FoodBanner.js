import React from 'react';
import './FoodBanner.css';

const FoodBanner = (props) => {
    console.log(props); 
    return (
        <div>
          
            <span onClick= {()=>props.handlecurItem('breakfast')} href="breakfast">Breakfast</span>
            <span onClick= {()=>props.handlecurItem('lunch')} href="lunch">Lunch</span>
            <span onClick= {()=>props.handlecurItem('dinner')} href="lunch">Dinner</span>
           
        </div>
    );
};

export default FoodBanner;