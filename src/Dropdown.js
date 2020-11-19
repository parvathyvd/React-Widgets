import React, {useState, useEffect, useRef} from 'react';

const Dropdown =  ({label,options,selected,onSelected}) => {

    const [open, setOpen] = useState(false)
    const ref = useRef();

    const onBodyClick = (event) => {
        if(ref.current && ref.current.contains(event.target)){
            return
        }
        setOpen(false);
    }
    useEffect((event) =>{
        document.body.addEventListener('click', onBodyClick)

        return () =>{
            document.body.removeEventListener('click', onBodyClick);
        }
    },[])

   const renderColor = options.map(option => {
       if(selected.value === option.value){
           return null
       }
        return (
            <div className="item"
            key={option.value} 
            onClick={() => onSelected(option)}>
                {option.label}
            </div>
        )
    })
    return(
        <div className="ui segment" ref={ref}>
            <h3>{label}</h3>
        <div onClick= {()=> setOpen(!open)}
          className={`ui selection dropdown ${open ?  'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ?  'visible transition' : ''}`}>{renderColor}</div>
          </div>
        <div>
            <br/>
        </div>
            

            
        </div>
    )
}

export default Dropdown;