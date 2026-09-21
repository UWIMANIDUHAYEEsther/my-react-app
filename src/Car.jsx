import React, {useState} from 'react'

function Car(){
const [car,setcar]=useState([])
const [caryear,setcarYear]=useState(new Date().getFullYear())
const[carmake,setcarmake]=useState('')
const[carmodel,setcarmodel]=useState('')
function handleAddCar(){
const newCar={Year:caryear,
              Make:carmake,
              Model:carmodel
}
setcar(c=>([...c,newCar]))
setcarYear((new Date().getFullYear()))
setcarmake('')
setcarmodel('')

}
function handleRemoveCar(index){
  setcar(c=>c.filter((_,i)=>i!==index))  

}
function handleYearChange(event){
    setcarYear(event.target.value)

}
function handleMakeChange(event){
  setcarmake (event.target.value)   
}
function handleModelChange(event){
    setcarmodel(event.target.value)  
}

return(<div>
    <h2>List of car object</h2>
    <ul>
       {car.map((car,index)=>
    <li key={index} onClick={()=>handleRemoveCar(index)}>{car.Year} {car.Make} {car.Model}</li>)}
    </ul>
    <input type='number' value={caryear} onChange={handleYearChange}/><br/>
    <input type='text' value={carmake} onChange={handleMakeChange} placeholder='Enter car make'/><br/>
       <input type='text' value={carmodel} onChange={handleModelChange} placeholder='Enter car model'/><br/>
       <button onClick={handleAddCar}>Add Car</button>
</div>)

}
 
export default Car