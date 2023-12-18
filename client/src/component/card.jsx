import React from 'react'

const Card = ({props}) => {
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
        <div className="card-body" style={{display:"flex", justifyContent:"space-between", marginInline:"1rem", alignItems:"flex-end"}}>
          <a href="#" style={{height:"fit-content"}} className="btn btn-primary ">Add to Cart</a>
          <a href="#" style={{height:"fit-content"}} className="btn btn-danger">Remove</a>
        </div>
      </div>
    </div>
  )
}

export default Card