import React, { useEffect, useState } from 'react'

const Test1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`ban da bam vao ${count} lan`);
    }, [count]
);
    return (
        <div>
            <h1>Ban da bam {count} lan</h1>
            <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}> Bấm </button>
        </div>
    )
}

export default Test1