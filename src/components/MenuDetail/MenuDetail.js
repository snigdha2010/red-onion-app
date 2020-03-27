import React, { useState, createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../Data';
import './MenuDetail.css'

const CartContext = createContext();
export const CartContextProvider = (props) =>{
    const addCart = MenuDetail();
return <CartContext.Provider value={addCart}>{props.children}</CartContext.Provider>
}

export const useAddCart = ()=> useContext(CartContext);

const MenuDetail = () => {
    const [cart,setCart] = useState([]);
    const {productKey} = useParams();
    const item = foodData.find(item => item.key === productKey);
    console.log(item);
    
    const handleAddToCart= (item)=>{
        const newCart = [...cart,item]
        setCart(newCart);
        console.log(cart)
    }

    return (
        <div className='twinContainer'>
        <div className='item-container'>
            <h1>{item.itemname}</h1>
            <p>{item.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio exercitationem, doloremque repellendus eos aperiam dolor. Eligendi adipisci ipsum obcaecati vero fuga repudiandae possimus aliquid quae est. Adipisci facere tenetur consequatur! </p>
            <p>${item.price}</p>
            <br/>
            <button onClick= {()=>handleAddToCart(item)}>Add</button>
            
            
        </div>

        <div className='img-container'> 
            <img src={item.img} alt=""/>
        </div>
        </div>
    );
};

export default MenuDetail;