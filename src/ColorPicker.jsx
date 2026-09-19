
import React, {useState}  from 'react'

function ColorPicker(){
const [color,setcolor]=useState('FFFFFF')
function handlecolorchange(event){

    setcolor(event.target.value)
}
return (<div className='color-picker-component'>
<h1>Color picker</h1>
<div className='color-display' style={{backgroundColor:color}}>
    <p>Selected Color:{color}</p>
    </div>
    <label>Select color</label>
    <input type='color' value={color} onChange={handlecolorchange}>
    </input>
</div>)

}
export  default ColorPicker