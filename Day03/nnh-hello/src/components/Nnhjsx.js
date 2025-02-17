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
        return "<h2>" +user .firstName + " " + user.lastName + "</h2>"
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
  
    return (
    <div>
        <h1>
            NNH - JSX Expression
        </h1>
        {/* sử dụng biến element */}
        {element}
        
        
    </div>
  )
}
