import React, { useState } from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const getItem = (index) =>{
       // console.log(`item index is`, index)
        setActiveIndex(index);
    }
    
    const getItems = items.map((item,index) =>{

    const active  = activeIndex === index ? 'active' : '';
    
        return (
        <React.Fragment key={item.title}>
            <div className="ui styled accordion" onClick={() => getItem(index)}>
                <div className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                     <p>{item.description}</p>
                </div>
            </div>
        </React.Fragment>
            )
        })


        
    return(
        <div>{getItems}</div>
    )
}

export default Accordion;