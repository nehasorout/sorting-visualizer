import React from 'react';
import './bar.css'

function Bar({arr,currentIndex,currentNext,endAlgo,isGreater}) {     
    return (
    <div className="container" style={style1}>
             {arr.map((size,i)=>{
                 return <div className="bar" style={{height:`${size}px`,width:"8%",margin:"2px",  boxShadow:" 5px 5px 5px grey",color:"white",backgroundColor:`${
                     isGreater & currentIndex === i ? "red" : isGreater & currentNext === i ? "red" : currentIndex === i ? "rgb(23, 219, 33)" : currentNext === i ? "rgb(23, 219, 33)" : endAlgo ? "rgb(187, 73, 158)" :   "rgb(38, 9, 105)"
                 }`,
                 display:"flex", justifyContent: "center",alignItems:" center"}}>{arr.length<=12 ? size : ''}</div>
             })} 
       </div>
    );
}
 const style1={
        justifyContent:"center",
        position:"absolute",
        bottom:"0",
        width:"60%",
        display:"flex",
        textAlign:"center",
        alignItems:"flex-end",
        left:"20%",
        overflow:"hidden"     
    }


export default Bar
