import React from 'react'

export default function NnhExample(props) {
  return (
    <div>
        <h2>Demo:function components props</h2>
            <p>lay du lieu tu props de hien thi</p>
            <p>Name: {props.name}</p>
            <p>address:{props.address}</p>
            <p>company:{props.company}</p>
            <p>note:{props.note}</p>
    </div>
  )
}
