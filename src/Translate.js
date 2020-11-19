import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
      label: 'Africans',
      value : 'af'
    },
    {
      label: 'Arabic',
      value : 'ar'
    },
    {
      label: 'Hindi',
      value : 'hi'
    }
  ]

const Translate =  () => {

const [languageSelected, setSelectedLanguage] = useState(options[0]);
const [text, setText] = useState('');


    return(
        <div>
            <div className="ui form">
                <div className="field">

                </div>
            <label>Enter Text</label>
             <input value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
           
    <Dropdown 
        label = 'Select a language'
        selected = {languageSelected} 
        options = {options}
        onSelected = {setSelectedLanguage}
        />      
        <hr/>
        <Convert text={text} language={languageSelected} />
        </div>
        
    )
}

export default Translate