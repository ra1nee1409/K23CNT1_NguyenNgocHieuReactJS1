import React from 'react'

export default function Nnhclassfuncprops(props) {
  const NnhHan1buttonclick1 = () => {
    alert("Du lieu tu props: " +props.nnhRenderName);
    console.log("xin chao: ",props.nnhRenderName);
  }
  const NnhHanldeButtonclick2 = (param) => {
    //lay du lieu tu props
    alert("Du lieu tu props (button click 2): " +props.nnhRenderName);
    //lay du lieu tu tham so
    console.log('==============================');
    console.log("Hi:",param);
    console.log('==============================');
  }

  return (
    <div className='alert alert-info'>   
        <button className='btn btn-primary mx-1' 
        onClick={NnhHan1buttonclick1}>button 1</button>

        <button className='btn btn-primary mx-1' 
        onClick={()=>NnhHanldeButtonclick2("button2")}>button 2</button>

    </div>
  )
}
