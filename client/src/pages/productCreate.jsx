import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './../store/modules/product';
import { addProduct } from '../store/modules/productList';
import { Store } from "./../store";
import { createProduct } from "./../actions/product";


const ProductCreate = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    quantity: "   "
  });
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product?.productData);

<<<<<<< HEAD
  console.log("productData:", productData);

=======
  //console.log("productData:", productData);
  
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    Store.dispatch(setProductData({ ...data }));
  };

<<<<<<< HEAD
  const handelCreateBtn = async () => {
=======
  const handelCreateBtn = async() => {
   
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
    const response = await createProduct(data);
    if (response.status === "success") {
      Store.dispatch(addProduct(data))
    }
<<<<<<< HEAD
    else {
      console.error('Backend request failed:', response.data.message);
=======
    else{
      console.error('Backend request failed:', response?.data?.message);
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
    }
  }



  return (
<<<<<<< HEAD
    <div style={{ margin: "1rem", marginBlock: "1rem", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form className="row g-4 rounded " style={{ width: "50%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
=======
    <div style={{margin:"1rem", marginBlock:"1rem", padding:"1rem",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
      <div className="row g-4 rounded " style={{width:"50%"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
          <h3>Create Product</h3>
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputEmail4" name="name"
            value={data.name}
            onChange={handleInputChange} placeholder='i.e. Laptop, Smart Phone' />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCity" className="form-label">Price</label>
          <input type="number" name="price"
            value={data.price}
            onChange={handleInputChange} className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputZip" className="htmlForm-label">Unit Quantity</label>
          <input type="number" name="quantity"
<<<<<<< HEAD
            value={data.quantity}
            onChange={handleInputChange} className="form-control" id="inputZip" />
=======
          value={data.quantity}
          onChange={handleInputChange} className="htmlForm-control" id="inputZip" />
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="htmlForm-label">Description</label>
          <textarea type="text" name="description"
<<<<<<< HEAD
            value={data.description}
            onChange={handleInputChange} className="form-control" id="inputAddress" placeholder="This product contains..." />
=======
          value={data.description}
          onChange={handleInputChange} className="htmlForm-control" id="inputAddress" placeholder="This product contains..." />
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
        </div>
        <div className="col-12">
          <label htmlFor="image" className="form-label">Product Image</label>
          <input className="form-control form-control-sm" name="image"
            value={data.image}
            onChange={handleInputChange} id="formFileSm" type="file" />
        </div>
<<<<<<< HEAD
        <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" onClick={handelCreateBtn} className="btn btn-primary">Create</button>
=======
        <div className="col-12" style={{display:"flex", justifyContent:"center"}}>
          <button  onClick={handelCreateBtn} className="btn btn-primary">Create</button>
>>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4
        </div>
      </div>
    </div>
  )
}

export default ProductCreate