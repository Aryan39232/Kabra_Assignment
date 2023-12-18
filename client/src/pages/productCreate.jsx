import React from 'react'

const ProductCreate = () => {
  return (
    <div style={{margin:"1rem", marginBlock:"1rem", padding:"1rem",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
      <form className="row g-4 rounded " style={{width:"50%"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h3>Create Product</h3>
        </div>
        <div className="col-12">
          <label for="inputEmail4" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder='i.e. Laptop, Smart Phone' />
        </div>
        <div className="col-md-2">
          <label for="inputCity" className="form-label">Price</label>
          <input type="number" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">Unit Quantity</label>
          <input type="number" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">Description</label>
          <textarea type="text" className="form-control" id="inputAddress" placeholder="This product contains..." />
        </div>
        <div className="col-12">
          <label for="formFileSm" className="form-label">Product Image</label>
          <input className="form-control form-control-sm" id="formFileSm" type="file"/>
        </div>
        <div className="col-12" style={{display:"flex", justifyContent:"center"}}>
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  )
}

export default ProductCreate