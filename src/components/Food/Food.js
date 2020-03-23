import React, { useState } from 'react';
import data from '../../Data';
import './Food.css';
import { Link } from 'react-router-dom';
import Menus from '../Menus/Menus';

const Food = () => {
    const foodData = data;
    const [items,setItems]= useState(foodData)

    const breakfasts = items.filter((a)=>a.categories==='breakfast');
    const lunches = items.filter((a)=>a.categories==='lunch');
    console.log(lunches);
    //const item1 = items[4];
   

    return (
        <div className='container'>
            <div className='time'>
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>

        <div className='row '>
              
              {/* {  
              breakfasts.map(breakfast=>
              <Menus menus = {breakfast}></Menus>)
             } */}

             {  
              lunches.map(lunch=>
              <Menus menus = {lunch}></Menus>)
            }
            <button className='main-btn btn-secondary btn-lg '>Checkout Your Food</button>
        </div>
        </div>
        
        
    );
};

export default Food;