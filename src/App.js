import React,{useState,useEffect} from 'react'
import Header from "./components/Header";
import Bar from './components/Bar'


function App() {
  
    const [size,setSize]=useState(4)
    const [arr,setArr]=useState([])
    const [currentIndex,setCurrentIndex]=useState(null)
    const [currentNext,setCurrentNext]=useState(null)
    const [endAlgo,setEndAlgo]=useState(false)
    const [red,setRed]=useState(false)
    
    

  const generateRandomInteger=(min,max)=>{  
    return Math.floor(min+Math.random()*(max + 1 - min))
    }

   useEffect(()=>{
          const randArr=Array.from({length:size},()=>generateRandomInteger(50,500));
          setArr(randArr)
          setEndAlgo(false)     
   },[size]);

 
const generateRandomList=()=>{
    const randArr=Array.from({length:size},()=>generateRandomInteger(50,500))
    setArr(randArr)
    setEndAlgo(false)
}

  return (
    <div style={{color:"black",fontFamily:"monospace",fontSize:"1.4rem"}}>
      <Header setSize={setSize} arr={arr} setArr={setArr} generateRandoList={generateRandomList} setCurrentIndex={setCurrentIndex} setCurrentNext={setCurrentNext}  setEndAlgo={setEndAlgo} setRed={setRed} />
      <Bar arr={arr} currentIndex={currentIndex} currentNext={currentNext}  endAlgo={endAlgo} red={red} />
    </div>
  );
}

export default App
