import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
  {
  title: 'About React',
  description: 'This is a js framework called React'
  },
  {
    title: 'About React11',
    description: 'This is a js framework called React12'
  },
  {
    title: 'About React13',
    description: 'This is a js framework called React13'
  },
]
/***Dropdown to select color ****/

const colors = [
  {
  label: 'Dark Red',
  value: 'red'
  },
  {
    label: 'Stylish Green',
    value: 'green'
  },
  {
    label: 'Awesome yellow',
    value: 'yellow'
  },
]




const App = () => {

const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="App">
      <Header/>
      <Route path={'/'}>  
      <Accordion items={items} /> 
      </Route>
      <Route path={'/list'}>  
       <Search/> 
      </Route>
      <Route path={'/dropdown'}>  
      <Dropdown 
        label = 'Select a language'
        selected = {selected} 
        options = {colors}
        onSelected = {setSelected} />    
        </Route>
      <Route path={'/translate'}>  
      <Translate />
      </Route>
    </div>
  );
}

export default App;
