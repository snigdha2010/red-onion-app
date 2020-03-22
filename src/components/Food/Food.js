import React, { useState } from 'react';
import data from '../../Data';
import Menus from '../Menus/Menus';

const Food = () => {
    const foodData = data;
    const [items,setItems]= useState(foodData)
    console.log(items);
    //const item1 = items[4];

    return (
        <div className='container'>
            <div className='row'>
              {
              items.map(item=><Menus menus = {item}></Menus>)
            }
        </div>
        </div>
        
        
    );
};

export default Food;