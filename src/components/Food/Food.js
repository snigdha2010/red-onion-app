import React, { useState, useEffect } from 'react';
import data from '../../Data';
import './Food.css';
import { Link } from 'react-router-dom';
import Menus from '../Menus/Menus';

const Food = () => {
    const foodData = data;
    const [items,setItems]= useState(foodData);
    const [curItem, setCurItem] = useState([]);

    // useEffect(()=>{

        //  const breakfasts = items.filter((a)=>a.categories==='breakfast');
        //  const lunches = items.filter((a)=>a.categories==='lunch');
        //  if(items.categories ==='breakfast'){
    //          setItems(breakfasts);
    //      }else if(items.categories ==='lunch'){
    //         setItems(lunches);
    //      }

    // },[items])

    const filterMenu = type => {
        // console.log('type',type);

        // const result = items.filter(word => word.categories==type);
        // console.log(result);
        // let datas = items.filter( (item) => {
        //     if(item.categories==type){
        //     console.log('item',item);
        //     }

        // });

        // console.log('datas',items[0].categories);
        // console.log(items.filter( a => a.categories == type ));
        setItems(items.filter( a => a.categories === type ));
        // console.log(items);
        
       
    }


    return (
        <div className='container'>
            <div className='time'>
                <a onClick={()=>filterMenu('breakfast')} href="/bbreakfast">Breakfast</a>
                <a onClick={()=>filterMenu('lunch')} href="/llunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>

        <div className='row '>
             {  
              items.map(item=>
              <Menus menus = {item}></Menus>)
            }
            <button className='main-btn btn-secondary btn-lg '>Checkout Your Food</button>
        </div>
        </div>
        
        
    );
};

export default Food;