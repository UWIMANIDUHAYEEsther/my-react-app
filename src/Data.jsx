import React, { useState, useEffect } from 'react'

function Data(){
    const [count, setCount] = useState(0)
    const [color,setColor]=useState('pink')
         useEffect(()=>{
            document.title=`Count:${count}${color}`
          
        },[count,color])

    function addCount(){
        setCount(c => c + 1)
    }
     function subCount(){
        setCount(c => c - 1)
    }
    function colorChange(){
        setColor(c=>c==='pink'?'red':'pink')
    }

    return(
        <>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button>
            <button onClick={colorChange}>Change color</button>
        </>
    )
}

export default Data