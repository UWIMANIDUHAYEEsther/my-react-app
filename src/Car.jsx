import React, {useState} from 'react'

function Car(){
const [car,setcar]=useState({year:2025,make:"Mark",model:'Mustang'})
function  handleyearchange(event){
    setcar(c=>({...c,year:event.target.value}))
}
function  handlemakechange(event){
  setcar(c=>({...c,make:event.target.value}))   
}
function  handlemodelchange(event){
     setcar(c=>({...c,modelg:event.target.value}))
}

return(<div>
  <p>  Your favorite car is: {car.year}  {car.make}  {car.model}</p>
  <input type='number' value={car.year} onChange={handleyearchange}/> <br/>
   <input type='text' value={car.make} onChange={handlemakechange}/> <br/>
    <input type='text' value={car.model} onChange={handlemodelchange}/> <br/>
</div>)

}
 
export default Car