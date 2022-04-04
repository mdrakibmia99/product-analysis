import React from 'react';
import './QNA.css'
const QNA = () => {
    return (
        <div className='question-container'>
            {/* question 1 */}
            <div className='question-answer'>
            <h2> What is context Api?? </h2>
          
            <p>{`In React we usually send data from one component to another. In that case the data of one component has to be sent to another child component as props. Often the situation is that the child component is much lower than our main component where your data is.  There may be many children doing this. It can be said to be like digging up data. We usually use Redux in such situations.`}</p>
            </div>
           
           {/* question 2 */}
            <div className='question-answer'>
            <h2>What is Semantic Tags? </h2>
            <p >{`HTML5 semantic elements support all modern browsers. Generally semantic tags means about to an element call it with it's proper name. which induces with it's prime criteria. Able to define separate parts with it's separate name which previous version of HTML use with classes. Possible combinations are included here. Tags define HTML elements for markups in terms of browser of modern style approach.`}</p>
            </div>
                  


          

        </div>
    );
};

export default QNA;