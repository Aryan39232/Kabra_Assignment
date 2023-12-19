import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/modules/cart';
import { useState } from 'react';
import axios from 'axios';

const Card = ({props,quantity}) => {

  const dispatch = useDispatch();
  const [qty, setqty] = useState(quantity?quantity:0);

  const handleAddToCart = async()=>{
    dispatch(addToCart({...props}));

    try {
      
      const res = await axios.post('http://localhost:5000/api/cart/add-to-cart',{productId:props._id, quantity:qty });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='col'>
      <div className="card h-100" style={{width:"20rem"}}>
        <img src={props.link} className="card-img-top" alt="..." style={{padding:".5rem",borderRadius:"5px",height:"10rem", objectFit:"contain"}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div style={{display:"flex", justifyContent:"space-between",  marginInline:"1rem"}}>
          <p className="list-group-item">price</p>
          <p className="list-group-item">{props.price}</p>
          </div>
        </div>
        <input type="number" onChange={(e)=>setqty(e.target.value)} value={qty} />
        <div className="card-body" style={{display:"flex", justifyContent:"space-between", marginInline:"1rem", alignItems:"flex-end"}}>
          <button  style={{height:"fit-content"}} className="btn btn-primary " onClick={handleAddToCart}>Add to Cart</button>
          <a href="#" style={{height:"fit-content"}} className="btn btn-danger">Remove</a>
        </div>
      </div>
    </div>
  )
}

export default Card