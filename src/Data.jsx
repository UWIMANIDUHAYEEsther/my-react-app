import React, { useState, useEffect } from 'react'

function Data(){
  const[width,setWidth]=useState(window.innerWidth)
  const[height,setHeight]=useState(window.innerHeight)
  useEffect(()=>{
    window.addEventListener('resize',handlerResize);
  console.log('EVENT LISTENER ADDED')
  return()=>{
    window.removeEventListener('resize',handlerResize); 
    console.log('EVENT LISTENER REMOVED')
  }
  },[])
  useEffect(()=>{
    document.title=`Resize:${width} x ${height}`
  },[width,height])
 function handlerResize(){
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
 }

    return(
        <>
           <p>Window Width:{width}px</p> 
            <p>Window Height:{height}px</p> 
        </>
    )
}

export default Data