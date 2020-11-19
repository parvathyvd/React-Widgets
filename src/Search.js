import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios';


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    const setTermOnChange = (e) => {
        let inputTerm = e.target.value;
        setTerm(inputTerm);
    }

    useEffect(()=>{
       
        const search = async() => {
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            })
            setResults(data.query.search)
        }
         
        if(term && !results.length){
            search();
        }
        else{
            const timeoutId = setTimeout(()=> {
                    if(term){
                        search();
                    }
                }, 1000)

                return () => {
                    clearTimeout(timeoutId)
                }
            }
        
      
    //console.log('term changed');
    }, [term])

  

   const renderList =  results.map(result => {
       return(
        <div key={result.pageid} className="ui celled list">
            <div className="item">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML = {{ __html :result.snippet }} ></span>
            <div className="ui button right floated"><a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Add</a></div>
            </div>
        </div>
       )
    })

    return(
        <div className="ui segment">
             <Form>
            <Form.Field>
            <label>Search</label>
            <input placeholder='Search here...' onChange={setTermOnChange} value={term}/>
            {renderList}
            </Form.Field>
            </Form>
        </div>
        )
}

export default Search;