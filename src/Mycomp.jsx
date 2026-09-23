
import React, {useState,useEffect,useRef} from 'react'

function Mycomp(){
    const inputref1=useRef(null)
    const inputref2=useRef(null)
    const inputref3=useRef(null)

    useEffect(()=>{
        console.log('COMPONENT RENDERED');
        

    })

    function handleClick1(){
    inputref1.current.focus();
    inputref1.current.style.backgroundColor='yellow'
     inputref2.current.style.backgroundColor=''
      inputref3.current.style.backgroundColor=''
    }
    
    function handleClick2(){
    inputref2.current.focus();
    inputref1.current.style.backgroundColor=''
     inputref2.current.style.backgroundColor='yellow'
      inputref3.current.style.backgroundColor=''
    }
    
    function handleClick3(){
    inputref3.current.focus();
     inputref1.current.style.backgroundColor=''
      inputref2.current.style.backgroundColor=''
    inputref3.current.style.backgroundColor='yellow'
    }


    return(<div>

        <button onClick={handleClick1}>
      Click Me1 !
    </button>
    <input ref={inputref1}/>
       <button onClick={handleClick2}>
      Click Me2 !
    </button>
    <input ref={inputref2}/>
       <button onClick={handleClick3}>
      Click Me3 !
    </button>
    <input ref={inputref3}/>
    </div>)


}
export default Mycomp