import React,{useState} from 'react';
import data from './MOCK_DATA.json'
import './App.css';


function App() {
  const [filter , setFilter] = useState('')

  return (
    <div className='App'>

    <input type="text" placeholder='fillter' onChange={(e) => setFilter(e.target.value)}/>

        {data.filter((valFillter) => {
            if(filter == ""){
                return valFillter
            } else if(valFillter.first_name.toLowerCase().includes(filter.toLowerCase())){
              return valFillter
            }


        }).map((valMap,key) => {
          return <h3 key={key}>{valMap.first_name}</h3>
        })}
    </div>
  );
}

export default App;
