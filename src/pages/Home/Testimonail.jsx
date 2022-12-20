import React from 'react'

function Testimonial({name, description}){
  return(

        <div className="rate flex-1">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <div className="card">
              <h3> {name} </h3>
              <p> {description} </p>
            </div>
          </div>
  )
}

export default Testimonial