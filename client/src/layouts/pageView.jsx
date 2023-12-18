import React from 'react'

const PageView = ({Children}) => {
  return (
    <div style={{margin:"1rem", marginBlock:"1rem", padding:"1rem"}}>
      {Children}
    </div>
  )
}

export default PageView