import React ,{useState} from 'react'
import '/src/assets/css/calories_style.css';
import TanslateOpacity from '/src/utils/TranslateOpacity.js';



function Calories(){
  // active class
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = index => {
    setActiveIndex(index);
  };

  return(
    <section className={TanslateOpacity() ? 'calories show-item': 'calories hide-item'}>
      <div className="container">
        <div className="content y-center">
          <div className="calculator flex flex-column">
            
            <div className="type">
              <ul className='wrap'>
                  <li 
                    className={ (activeIndex === 0) ? 't-center grow active-l': 't-center grow' }
                    onClick={()=>{handleClick(0)} }
                  >
                    Calculator BMR
                  </li>
                  <li 
                    className={  (activeIndex === 1) ? 't-center grow active-l': 't-center grow' }
                    onClick={()=>{handleClick(1)} }
                    > 
                    Calculator BMI
                  </li>
                  <li 
                    className={  (activeIndex === 2) ? 't-center grow active-l': 't-center grow' }
                    onClick={()=>{handleClick(2)} }
                    > 
                    Calculator PPM
                  </li>
                  <li 
                    className={  (activeIndex === 3) ? 't-center grow active-l': 't-center grow' }
                    onClick={()=>{handleClick(3)} }
                    >
                    water Calculator
                  </li>
              </ul>
            </div>

            <div className="desc">
              <h2>Total motabolise (BMR) calcolator</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptas. Aliquid neque itaque fugit ducimus voluptatem sequi adipisci.
              </p>
            </div>

            <div className="gender">
              <span> <i className="fa-solid fa-person fa-2x man" ></i></span>
              <span> <i className="fa-solid fa-person-dress fa-2x women"></i></span>
            </div>

            <form action="">
              <div className='flex-1'>
                <label htmlFor="">Age</label>
                <input type="number" id="age"/>
              </div>
              <div className='flex-1'>
                <label htmlFor="">Weight(kg)</label>
                <input type="number" id="weight"/>
              </div>

              <div className='flex-1'>
                <label htmlFor="">Activity level</label>
                <select name="" id="">
                  <option value="" defaultValue >Choose</option>
                  <option value="" >level 1</option>
                  <option value="" >level 2</option>
                  <option value="" >level 3</option>
                </select>
              </div>
              <div className='flex-1'>
                <label htmlFor="">height(cm)</label>
                <input type="number"  id="height"/>
              </div>

            </form>
              <button className="main-btn calc">  Calculate</button>
          </div>
          <div className="order">
            <h2 className='main-h2'>Can't you Coohse your order?</h2>
            <p>
              loremy any diet to Choosediet to Choose the right one fodiet to Choose the right one for you r you the right one for you
            </p>
            <div className="contact wrap flex f-evenly gap-1">
              <span className="y-center grow"><small>Phone </small> <p>05 65  74 28 97</p></span>
              <span className="y-center grow"><small>Email </small> <p>diethealth4@gmail.com</p></span>
            </div>
          </div>
        </div>
      

        <div className="calculator-questions flex wrap ">
        
          <div className="question flex-1 mn-w-45 t-left">
            <h2 className="main-h2">TMR Calculator - What is it</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam provident molestias illum vel nisi! Quo quos numquam enim et saepe nihil? Esse natus accusamus tempora saepe quo eum quaerat ducimus?
            </p>
          </div>
          <div className="question flex-1 mn-w-45 t-left">
            <h2 className="main-h2">TMR Calculator - What is it</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam provident molestias illum vel nisi! Quo quos numquam enim et saepe nihil? Esse natus accusamus tempora saepe quo eum quaerat ducimus?
            </p>
          </div>    
      
        </div>
      </div>
    </section>

  )
}

export default Calories
