import React from "react"
import '/src/assets/css/menu.css'

function Diet({image, title, price1,price2,price3, description}){
  return(

    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <ul>
          <li>{price1} kcal</li>
          <li>{price2} kcal</li>
          <li>{price3} kcal</li>
        </ul>
        <p> {description} </p>
      </div>
      <div className="price">
        <span className="y-center">
          from <span>62 <small>zl</small></span>/day
        </span>
        <a href="#" className="main-btn"> Choose</a>
      </div>
    </div>
  )
}

export default Diet