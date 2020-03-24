import React, { useState, useEffect } from 'react';
import data from '../../Data';
import './Food.css';
import { Link } from 'react-router-dom';
import Menus from '../Menus/Menus';
import FoodBanner from '../FoodBanner/FoodBanner';

const Food = () => {
    const foodData = data;
    const [curItem, setCurItem] = useState(['lunch']);
    const [items,setItems]= useState(foodData.filter(item=>
        item.categories == curItem ));

    const handlecurItem = (product) =>{
        //console.log("product",items);
            setCurItem(product);
            setItems(foodData.filter(item=>item.categories == product ));
            //console.log("items",items);
    }

    return (
        <div className='container'>
            <div className='time'>
                <FoodBanner 
                handlecurItem = {handlecurItem}>
                </FoodBanner>
            </div>

        <div className='row '>
             {  
              items.map(item=>
              <Menus menus = {item}>
              </Menus>)
            }
            <button className='main-btn btn-secondary btn-lg '>Checkout Your Food</button>
        </div>
        </div>
        
        
    );
};

export default Food;