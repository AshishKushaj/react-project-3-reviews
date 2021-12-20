import './App.css';
import Box from './Box';
import React, {useState, useEffect} from 'react';
import data from './data';

function App() {

  const [i ,setI] =useState(0);
  const {name , image , text , job} = data[i];


// ------------------------------------------------------------------------

  const onLeft=()=>{
    if(i===0){
      setI((i)=>{
        return data.length-1;
      });
    }
    else{
      setI((i)=>{
        return i-1;
      });
    }
  }
// ------------------------------------------------------------------------

  const onRight= ()=>{
    if(i===(data.length-1)){
      setI(()=>{
        return 0;
      });
    }
    else{
      setI((i)=>{
        return i+1;
      });
    }
  } 
// ------------------------------------------------------------------------

const random=() =>{

  const min = Math.ceil(0);
  const max = Math.floor(data.length-1);
  const j=Math.floor(Math.random() * (max - min + 1)) + min;

  setI((i) =>{
    return j;
  })
}
// ------------------------------------------------------------------------

  return (
    <div>
      <h1 className='tc heading'>Reviews</h1>
      <Box
        name={name}
        job={job}
        text={text}
        image={image}
        onLeft={onLeft}
        onRight={onRight}
        random={random}
      />

    </div>
  );

}

export default App;
