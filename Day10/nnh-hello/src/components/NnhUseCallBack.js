//useCallback dùng để tối ưu hóa cho qua trình render
import React, { useCallback, useState } from 'react'
import NnhContenUseCallBack from './NnhContenUseCallBack';

function NnhUseCallBack() {
    const [count, setCount] = useState(0);
    const NnhHadelIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])
    
    return (
        <div>
            <NnhContenUseCallBack
                onIncrease={NnhHadelIncrease}>
            </NnhContenUseCallBack>
            <h1 className='text-center'>
                {count}
            </h1>
        </div>
    )
}

export default NnhUseCallBack