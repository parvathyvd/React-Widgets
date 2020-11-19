import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({text, language}) => {

   const [translatedLanguage, setTranslatedLanguage] = useState('');

    useEffect(()=>{
        const translated =  async () =>{
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            }
        }
        )
        setTranslatedLanguage(data.data.translations[0].translatedText)
     }
     translated();
    },[text, language])

return(
    <div>
        <p>Output</p>
        <h3 className="ui header">{translatedLanguage}</h3>
    </div>
)
}

export default Convert