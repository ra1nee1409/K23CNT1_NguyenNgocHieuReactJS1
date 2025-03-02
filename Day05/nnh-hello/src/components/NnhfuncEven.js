import React from 'react'

export default function NnhfuncEven(props) {
    // Hàm xử lý sự kiện
    const nnhEvenbuttonc11lick = () => {
        alert("button 1 - clicked");
    };
    const nnhEvenbuttonc22lick = () => {
        alert("button 2 - clicked");
    };
    const nnhEvenbuttonc3lick = (name) => {
        alert("name: " + name);
    };
  return (
    <div className='alert alert-success ' >
            <button className='btn btn-primary mx-1' onClick={nnhEvenbuttonc11lick}> button 1 </button>
            <button className='btn btn-danger mx-1' onClick={nnhEvenbuttonc22lick}> button 2 </button>
            <button className='btn btn-dark mx-1' onClick={()=>nnhEvenbuttonc3lick("NguyenNgocHieu")} > button 3 </button>
        </div>
  )
}
