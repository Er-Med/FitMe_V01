import React from 'react'


function Diets(){

  return(

    <section className="diets">
      <div className="container">
        <h2 className="main-h2">The most popular diets</h2>
        <div className="directions">
          <i className="fa-solid fa-arrow-left-long" id="prev-btn"></i>
          <i className="fa-solid fa-arrow-right-long" id="next-btn"></i>
        </div>
        <div className="slider-shadow">
          <div className="slider-container" id="slider-container" >
            <Diet
              imgSrc={'/src/images/diet1.jpg'}
              title={'Slim'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
            <Diet
              imgSrc={'/src/images/diet2.jpg'}
              title={'Fit'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
            <Diet
              imgSrc={'/src/images/diet3.jpg'}
              title={'Vegan'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
            <Diet
              imgSrc={'/src/images/diet1.jpg'}
              title={'Slim'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
            <Diet
              imgSrc={'/src/images/diet1.jpg'}
              title={'Slim'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
            <Diet
              imgSrc={'/src/images/diet1.jpg'}
              title={'Slim'}
              price1={1000}
              price2={1500}
              price3={1200}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo."
              }
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Diets