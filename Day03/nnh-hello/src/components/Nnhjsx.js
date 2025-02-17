import React from 'react'

export default function Nnhjsx() {
  //biến
  const name="Nguyễn Ngọc Hiếu"
  //biến đối tượng
  const user = {
        firstName:"Nguyễn",
        lastName:"Hiếu"
  }
  //hàm
  const fullName=(user)=>{
        return user.firstName + " " + user.lastName ;
  }

  //element
  const element =(
    <div>
        {/*biếu thức jsx*/}
        {fullName(user)}
        <hr></hr>
        <h3> welcome to, {name}       </h3>
    </div>
  ) 
  
  //ham
  const Himyfriend = (name)=>{
    if(name){
        return <h3> welcome to {name}</h3>
    }
    else{
        return <h3> welcome to feed-NTU - K23CNT1</h3>
    }
}
    return (
    <div>
        <h1>
            NNH - JSX Expression
        </h1>
        {/* sử dụng biến element */}
        {element}
        {/*biến không giá tri */}
        {Himyfriend()}
        {/*biến găn giá tri */}
        {Himyfriend(name)}

    </div>
  )
}
