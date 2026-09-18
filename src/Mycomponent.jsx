 
 import React ,{useState} from 'react';

function Mycomponent(){

let  [name,setname]=useState()
const updateName=()=>{
    setname('Esther')
}
return (<div>
       <p>Name:{name}</p>
       <button onClick={updateName}>Set Name</button>
</div>)

}
export default Mycomponent