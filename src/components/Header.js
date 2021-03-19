import React from 'react'
import { BubbleSort } from './BubbleSort'
import './Header.css'
function Header({size,arr,setArr,setSize,generateRandoList,setCurrentIndex,setCurrentNext,setEndAlgo,setRed}) {
    return (
        <div className="header">
          <ul >
             
              <li onClick={generateRandoList}>Generate New Array</li>
              <div className="separator"></div>
              <li onInput={()=>{
                  const range= document.getElementById("myRange").value
                  setSize(range)
              }}>Change Size <input type="range" className="form-range" min="2" max="70" step="3" id="myRange" name="myRange"/></li>
              <div className="separator"></div>
              <li onClick={()=>{
                  console.log('passed from header array',arr)
                  BubbleSort(arr,setArr,setCurrentIndex,setCurrentNext,setEndAlgo,setRed) 
                  console.log('array 2 from header',arr)
              }} >Bubble Sort</li>
               <div className="separator"></div>
              <li>Selection Sort</li>
               <div className="separator"></div>
              <li>Insertion Sort</li>
               <div className="separator"></div>
              <li>Quick Sort</li>
               <div className="separator"></div>
              <li>Merge Sort</li>
          </ul>
        </div>
    )
}

export default Header
