
import React, {useState,useEffect,useRef} from 'react'

function Mycomp(){
    const ref=useRef(0)

    useEffect(()=>{
        console.log('COMPONENT RENDERED')
    })

    function handleClick(){
   ref.current++;
   console.log(ref.current)
    }


    return(<div>

        <button onClick={handleClick}>
      Click Me !
    </button>
    
    </div>)


}
export default Mycomp