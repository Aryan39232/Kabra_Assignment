import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './../store/modules/product';
import { addProduct } from '../store/modules/productList';
import { Store } from "./../store";
import { createProduct } from "./../actions/product";
const ProductCreate = () => {
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    image:"",
    quantity:"   "
  });
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product?.productData );

  //console.log("productData:", productData);
  
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    Store.dispatch(setProductData({...data}));
  };

  const handelCreateBtn = async() => {
   
    const response = await createProduct(data);
    if(response.status === "success") {
      Store.dispatch(addProduct(data))
    }
    else{
      console.error('Backend request failed:', response?.data?.message);
    }
  }

  

  return (
    <div style={{margin:"1rem", marginBlock:"1rem", padding:"1rem",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
      <div className="row g-4 rounded " style={{width:"50%"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
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
          value={data.quantity}
          onChange={handleInputChange} className="htmlForm-control" id="inputZip" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="htmlForm-label">Description</label>
          <textarea type="text" name="description"
          value={data.description}
          onChange={handleInputChange} className="htmlForm-control" id="inputAddress" placeholder="This product contains..." />
        </div>
        <div className="col-12">
          <label htmlFor="image" className="form-label">Product Image</label>
          <input className="form-control form-control-sm" name="image"
          value={data.image}
          onChange={handleInputChange} id="formFileSm" type="file"/>
        </div>
        <div className="col-12" style={{display:"flex", justifyContent:"center"}}>
          <button  onClick={handelCreateBtn} className="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCreate