import React, {useState} from'react'

function Food(){
   const [food,setfood]=useState(['Apple','Orange','Banana']);
   function handleAddFood(){
    const newfood=document.getElementById('foodInput').value;
    document.getElementById('foodInput').value=''
    setfood(f=>[...f,newfood])

   }
   function handleRemoveFood(index){

  setfood(food.filter((_,i)=>(i!==index)))

   }
    return(
      <div>
        <h2>List of Food</h2>
        <ul>
            {food.map((food,index)=><li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)} 
        </ul>
        <input type='text' id='foodInput' placeholder='Enter food name'/>
        <button onClick={handleAddFood}>Add Food</button>
      </div>

    )

}
export default Food