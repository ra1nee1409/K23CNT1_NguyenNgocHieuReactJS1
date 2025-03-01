import React from 'react';

export default function NnhFunComponents(props) {
  return (
    <div>
      <h2>Props is an object</h2>
      <p><b>Information</b></p>
        <p>Full Name: {props.renderInfo.fullname}</p>
        <p>Age: {props.renderInfo.age}</p>
        <p>Phone: {props.renderInfo.phone}</p>
    </div>
    
  );
}