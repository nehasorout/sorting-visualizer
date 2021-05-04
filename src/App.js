import React,{useState,useEffect} from 'react'
import Header from "./components/header/Header";
import Bar from './components/bar/Bar'

function App() {
  
    const [size,setSize]=useState(37)
    const [speed,setSpeed]=useState(0)
    const [arr,setArr]=useState([])
    const [currentIndex,setCurrentIndex]=useState(null)
    const [currentNext,setCurrentNext]=useState(null)
    const [endAlgo,setEndAlgo]=useState(false)
    const [disableEvents,setDisableEvents]=useState(false)
    const [purple,setPurple]=useState(0)
    const [isGreater,setIsGreater]=useState(false)
    const [red,setRedBubble]=useState(false)

    const generateRandomInteger=(min,max)=>{  
    return Math.floor(min+Math.random()*(max + 1 - min))
    }

   useEffect(()=>{
          const randArr=Array.from({length:size},()=>generateRandomInteger(50,480));
          setArr(randArr)
          setEndAlgo(false)     
   },[size]);

 
const generateRandomList=()=>{
    const randArr=Array.from({length:size},()=>generateRandomInteger(50,480))
    setArr(randArr)
    setEndAlgo(false)
}

  return (
   <div>
      <div className="appDiv" style={{"color":"black","fontFamily":"monospace"}}>
        
      <Header size={size} setSize={setSize} arr={arr} setArr={setArr} generateRandoList={generateRandomList} setCurrentIndex={setCurrentIndex} setCurrentNext={setCurrentNext}  setEndAlgo={setEndAlgo} disableEvents={disableEvents} setDisableEvents={setDisableEvents} speed={speed} setSpeed={setSpeed} setPurple={setPurple} setIsGreater={setIsGreater} setRedBubble={setRedBubble}/>

      <Bar arr={arr} currentIndex={currentIndex} currentNext={currentNext}  endAlgo={endAlgo} purple={purple} isGreater={isGreater} red={red}/>
    </div>
   </div>
  );
}

export default App
