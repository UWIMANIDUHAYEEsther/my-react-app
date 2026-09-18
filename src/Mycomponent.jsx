 
 import React ,{useState} from 'react';

function Mycomponent(){

const  [name,setname]=useState('Guest')
const [age,setage]=useState(0)
const[isEmployed,setisEmployed]=useState(false)
const updateName=()=>{
    setname('Esther')
}
const incrementAge=()=>{
    setage(age+1)
}
const toggleEmployedStatus=() =>{

    setisEmployed(!isEmployed)
}
return (<div>
       <p>Name:{name}</p>
       <button onClick={updateName}>Set Name</button>
        <p>Age:{age}</p>
       <button onClick={incrementAge}>Increment Age</button>
       <p>Is employed:{isEmployed ?'Yes':'No'}</p>
       <button onClick={toggleEmployedStatus}>Toggle Status</button>
</div>)

}
export default Mycomponent