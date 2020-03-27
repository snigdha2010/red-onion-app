import React, { useState } from 'react';
import data from '../../Data';
import './Food.css';
import Menus from '../Menus/Menus';
import FoodBanner from '../FoodBanner/FoodBanner';

const Food = () => {
    const foodData = data;
    const [curItem, setCurItem] = useState('lunch');
    const [items,setItems]= useState(foodData.filter(item=>
        item.categories === curItem));

       
    const handlecurItem = (product) =>{
            console.log("product",product);
            const newItem = [product]
            setCurItem(newItem);
            //console.log("NewcurItem",curItem);
            setItems(foodData.filter(item=>item.categories == newItem ));
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
              <Menus menus = {item}
              key={item.key}
              ></Menus>)
            }
            <button className='main-btn btn-secondary btn-lg '>Checkout Your Food</button>
        </div>
        </div>
        
        
    );
};

export default Food;