import React, { useReducer } from 'react'

export default function NnhUseReducer() {
     // 1. Khai báo các hằng số action
     const UP_ACTION = "UP";
     const DOWM_ACTION = "DOWN";
     const RESET_ACTION = "RESET";
         // 2. Khởi tạo state ban đầu
         const initState = 0;
    const refucer = (state, action) => {
        switch(action){
            case UP_ACTION:
                return state +1;
            case DOWM_ACTION:
                return state -1;
            case RESET_ACTION:
                return 0;
            default:
                throw new Error ('action ko hop le')
        }
    }
    const [count, dispatch] = useReducer(refucer, initState);
  return (
    <div>
        <h1 className='text-center'> {count}</h1>
        <button className='btn btn-danger mx-2' onClick={() => dispatch(DOWM_ACTION)}>Down</button>
        <button className='btn btn-primary mx-2' onClick={() => dispatch(UP_ACTION)}>Up</button>
        <button className='btn btn-warning mx-2' onClick={() => dispatch(RESET_ACTION)}>Reset</button>
    </div>
  )
}