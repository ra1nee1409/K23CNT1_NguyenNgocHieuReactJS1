import React, { useEffect, useState } from 'react'

export default function NnhUseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect(call back)");
    })
    useEffect(() => {
        console.log("useEffect(call back),[]; chi hien 1 lan duy nhat");
    })
    useEffect(() => {
        console.log("count has changer",count);
    })
    return (
        <div className='alert alert-danger'>
            <h2>useEffect</h2> 
            <button className='btn btn-primary mx-2' onClick={() =>setCount(count+1)}>Click</button> 
        </div>
    )
}
