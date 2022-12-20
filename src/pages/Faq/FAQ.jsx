import React, {useState,useEffect} from 'react';
import '/src/assets/css/FAQ__style.css'
import TanslateOpacity from '/src/utils/TranslateOpacity.js';
import FaqCollection from '/src/data/FaqCollection.js';

function FAQ() {

  const [accordion, setaccordion] = useState(null);
  function changeAccordion(i){
    setaccordion(null)
    setaccordion(i)
  }
  
  return ( 
    <section className={TanslateOpacity() ? 'faqs show-item': 'faqs hide-item'}>
      <div className="head">
          <div className="container title">
              <h2>let's <strong>answer </strong> your  frequency <strong> questions : </strong></h2>
          </div>
      </div>
      <div className="wrapper">
        <div className="container">   
              {
              
              FaqCollection.map((item, index) =>(

                <div className="item" key={index} onClick={()=> changeAccordion(index)}>
                  <div className="question">
                    <h3>{item.question}</h3>
                    <span>{accordion === index ?'-' :'+'}</span>
                  </div>
                  <div className={accordion === index ? 'answer active-item': 'answer'}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              
              ))
            }
        </div>
      </div>
  </section>
  );
}

export default FAQ;