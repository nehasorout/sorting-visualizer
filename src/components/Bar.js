import React from 'react';
import './bar.css'

function Bar({arr,currentIndex,currentNext,endAlgo,bar}) {     
    return (
         <div className="container" style={style1}>
             {arr.map((size,i)=>{
                 return <div style={{height:`${size}px`,width:"8%",margin:"2px",  boxShadow:" 5px 5px 5px grey",color:"white",backgroundColor:`${
                   currentIndex === i ? "green" :  currentNext=== i ? "green" : endAlgo ? "purple" : "rgba(5, 5, 56, 0.877)"
                 }`,
                 display:"flex", justifyContent: "center",alignItems:" center"}}>{arr.length<=12 ? size : ''}</div>
             })}
            
       </div>
    )
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
        overflow:"hidden",
        // maxHeight:"75%"        
    }

export default Bar
