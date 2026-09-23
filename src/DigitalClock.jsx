

import React, {useState,useEffect} from 'react'

function DigitalClock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
  const setIntervalId=setInterval(()=>{

    setTime(new Date())
  },1000)
  return ()=>{
    clearInterval(setIntervalId);
  }

    },[])
    function formateTime(){
  let  hours=time.getHours();
  const minutes=time.getMinutes();
  const seconds=time.getSeconds();
  const meridiam=hours>=12 ?'PM' :'Am';
  hours=hours % 12 || 12;
 return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiam}`;

    }
    function padZero(number){
        return(number<10?'0':'')+number;
        
    }
return(
    <div className='container-clock'>
    <div className='clock'>
        <span>{formateTime()}</span>
    </div>
</div>
)

}
export default DigitalClock