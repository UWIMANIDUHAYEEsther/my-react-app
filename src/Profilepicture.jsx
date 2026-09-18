

function Profilepicture(){

const imageurl='./src/assets/eee.png'
const handleClick=(e)=>e.target.style.display='none'
return (<img  onClick={(e)=>handleClick(e)} src={imageurl}/>)

}
export default  Profilepicture