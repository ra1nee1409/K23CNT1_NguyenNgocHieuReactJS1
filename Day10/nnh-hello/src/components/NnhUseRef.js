import React, { useRef, useState } from 'react'

export default function NnhUseRef() {
    const [count, setCount] = useState(60);
    const timerID = useRef();
    const NnhHandleStart = () =>{
        timerID.current = setInterval(() =>{
              setCount(prevCount => prevCount-1)
            }, 1000)
    }
    const NnhHandleStop = () =>{
        clearInterval(timerID.current);
        console.log('Stop ->',timerID.current);
        
    }
  return (
    <div>
        <h1 className='text-center'>{count}</h1>
        <button className='btn btn-primary mx-2' onClick={NnhHandleStart}>Start</button>
        <button className='btn btn-danger mx-2' onClick={NnhHandleStop}>Stop</button>
    </div>
  )
}