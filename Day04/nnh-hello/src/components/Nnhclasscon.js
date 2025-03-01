import React, { Component } from 'react';

class Nnhclasscon extends Component {
    
    constructor(props){
        super(props);
        //khoi tao state
        this.state = {
          fullname: "NN HIEU ",
          age: 19,
          phone:  "1234567890"
        }
      }
    
    render() {
        return (
            <div className='atert atert-success'>
        <h2>Trinh bay du lieu tu state</h2>
        <p>Info state (fullname): {this.state.fullname}</p> 
        <p>Info state (fullname): {this.state.age}</p>
        <p>Info state (fullname): {this.state.phone} </p>
        <hr/>
        <p>check props{this.props.renderTest.fullname}</p>           
        <p>check props 2:{this.props.renderTest.age}</p>           
        <p>check props 3:{this.props.renderTest.phone}</p>           
            </div>
        );
    }
}

export default Nnhclasscon;