import React from 'react'
import NnhUseRef from './components/NnhUseRef'
import NnhUseReducer from './components/NnhUseReducer';
import NnhUseCallBack from './components/NnhUseCallBack';
import NnhUseMemo from './components/NnhUseMemo';

export default function NnhApp() {
    return (
        <div>
            
            <div className=' alert alert-danger'>
                <NnhUseRef />
            </div>

            <div className=' alert alert-danger'>
                <NnhUseReducer />
            </div>

            <div className=' alert alert-danger'>
                <NnhUseCallBack />
            </div>

            <div className=' alert alert-danger'>
                <NnhUseMemo />
            </div>

        </div>
    )
}
