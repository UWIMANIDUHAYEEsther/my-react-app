import React, { useState, useEffect } from 'react'

function Data(){
    const [count, setCount] = useState(0)
         useEffect(()=>{
            document.title=`Count:${count}`
        },[count])

    function addCount(){
        setCount(c => c + 1)
    }
     function subCount(){
        setCount(c => c - 1)
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button>
        </>
    )
}

export default Data