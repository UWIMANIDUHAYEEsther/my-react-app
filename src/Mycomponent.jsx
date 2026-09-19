 
 import React ,{useState} from 'react';

function Mycomponent(){

 const [name,setname]=useState('')
 const [quantity,setquantity]=useState(1)
 const[comment,setcomment]=useState('')
 const [payment,setpayment]=useState('')
 const[shipping,setshipping]=useState('')
 function handleonclickevent(event){
    setname(event.target.value)

 }
 function handlequantitychange(event){
    setquantity(event.target.value)
 }
 function commentchange(event){
    setcomment(event.target.value);
 }
 function paymenthandle(event){
    setpayment(event.target.value);

 }
 function handleshipping(event){
    setshipping(event.target.value);
 }
return (<div>
<input value={name} onChange={ handleonclickevent}>
</input>
<p>Name: {name} </p>
<input value={name} onChange={handlequantitychange}type='number' ></input>

<p>Quantity:{quantity} </p>
<textarea value={comment} onChange={commentchange} placeholder='Enter delivery instruction '/>
<p>Comment:{comment}</p>
<select value={payment} onChange={ paymenthandle}>
    <option value=''>Select an option</option>
    <option value='Visa'>Visa </option>
    <option value='Mastercard'>Mastercard</option>
    <option value='Giftcard'>Giftcard</option>
</select>
<p>Payment:{payment}</p>
<label>
    <input type='radio' value='Pick Up' checked={shipping==='pick up'} onChange={handleshipping}></input>
    Pick Up
</label><br></br>
<label>
    <input type='radio' value='Delivery' checked={shipping==='Delivery'} onChange={handleshipping}></input>
    Delivery
</label>
<p>Shipping:{shipping}</p>
</div>
)

}
export default Mycomponent