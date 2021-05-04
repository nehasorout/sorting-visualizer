import React from 'react'
import { BubbleSort } from '../sorting_algo/BubbleSort'
import {selectionSort} from '../sorting_algo/SelectionSort'
import {insertionSort} from '../sorting_algo/InsertionSort'
import {MergeSort} from '../sorting_algo/MergeSort'

import './Header.css'
function Header({arr,setArr,size,setSize,generateRandoList,setCurrentIndex,setCurrentNext,setEndAlgo,disableEvents,setDisableEvents,speed,setSpeed,setPurple,setIsGreater,setRedBubble}) {
    return (
        <div className="header" style={{"pointerEvents": disableEvents ? "none" : "unset", "color" : disableEvents ? "red" : "black" }}>
          <ul >
             
              <li onClick={generateRandoList}>Generate New Array</li>
              <div className="separator"></div>
              <li onInput={()=>{
                  const range= document.getElementById("myRange").value
                  setSize(range)
                  range<37 ?  setSpeed(3000/range) :  setSpeed(0)
                 
              }}>Change Size <input type="range"  className="form-range" min="2" max="70" step="1" id="myRange" name="myRange"/></li>
              <div className="separator"></div>
              <li  onClick={()=>{BubbleSort(arr,setArr,setCurrentIndex,setCurrentNext,setEndAlgo,setDisableEvents,speed,setPurple,setIsGreater,setRedBubble)}} >Bubble Sort</li>
               <div className="separator"></div>
              <li  onClick={()=>{ selectionSort(arr,size,setArr,setCurrentIndex,setCurrentNext,setEndAlgo,setDisableEvents,setIsGreater,speed)}}>Selection Sort</li>
               <div className="separator"></div>
              <li  onClick={()=>{insertionSort(arr,setArr,setCurrentIndex,speed,setCurrentNext,setEndAlgo,setDisableEvents,setIsGreater,size)}}>Insertion Sort</li>
               <div className="separator"></div>
                {/* <li onClick={() => { QuickSort(arr, setArr, setCurrentIndex, speed, setCurrentNext, setEndAlgo, setDisableEvents) }}>Quick Sort</li> */}
               {/* <div className="separator"></div> */}
                <li onClick={() => { MergeSort(arr, setArr, setCurrentIndex, speed, setCurrentNext, setEndAlgo, setDisableEvents) }}>Merge Sort</li>
          </ul>
        </div>
    )
}

export default Header
