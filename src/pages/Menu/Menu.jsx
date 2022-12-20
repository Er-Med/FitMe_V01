import React , {useState,} from 'react'
import TanslateOpacity from '/src/utils/TranslateOpacity.js';
import Diet from '/src/utils/Diet';
import DietList from '/src/data/DietList';
import '/src/assets/css/menu.css'


function Menu(){

  // active class
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = index => {
    setActiveIndex(index);
  };

  
  //filter diets by categories 
  const [dietCollection,setdietCollection] = useState(DietList);
  
  const onChangeHandler = (dietCategory)=>{
    const result = DietList.filter((diet)=>{
      return  diet.categories === dietCategory;
    })
    setdietCollection(result);
  }

  

  return(
    <>
    <section className={TanslateOpacity() ? 'menuu show-item': 'menuu hide-item'}>
      <div className="container">
        <h2 className="main-h2">Menu</h2>
        <div className="categories  y-center space-between wrap">
          <ul className="flex gap-1 flex-1 wrap">
            <li className={ (activeIndex === 0) ? 't-center grow active-l': 't-center grow' }  
                id='all'
                onClick={()=>{setdietCollection(DietList),handleClick(0)}}
                >
                all
            </li>
            <li 
                className={  (activeIndex === 1) ? 't-center grow active-l': 't-center grow' }
                onClick={()=>{onChangeHandler("breakfast"),handleClick(1)}}
                id='breakfast'
                
                >
                Breakfast
            </li>
            <li 
              className={  (activeIndex === 2) ? 't-center grow active-l': 't-center grow' }
              onClick={()=>{onChangeHandler("lunch"),handleClick(2)} }
              id='lunch'
              >
              Lunch
            </li>
            <li  
              className={  (activeIndex === 3) ? 't-center grow active-l': 't-center grow' }
              onClick={()=>{onChangeHandler("dinner"),handleClick(3)}}
              id="dinner"
              >
              Dinner
            </li>
            
          </ul>
          <div className="choose y-center ">
            
          </div>
        </div>
        <div className="slider-container">

        {
          dietCollection.map((item,index)=>(
          
            <Diet key={index}
            image={item.image}
            title={item.title}
            price1={item.prices[0]}
            price2={item.prices[1]}
            price3={item.prices[2]}
            description={item.description}
          />
              
              ))
        } 

      </div>
    </div>
  </section>

</>
  )
}

export default Menu