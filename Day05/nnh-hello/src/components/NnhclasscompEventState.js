import React, { Component } from 'react'

export default class NnhclasscompEventState extends Component {
    constructor(props){
        super(props);
        this.state ={
            nnhFullname: "Nguyen Ngoc Hieu",
            nnhAge: "19",
            test: "what the sigmma",
            sdt: "0966090909"
        }
    }
//ham xu ly
    nnhEventHandleclick1 = () => {
        //lay du lieu trong state
        alert("Ho va ten: " + this.state.nnhFullname + "\nAge: " + this.state.nnhAge );
    }
    
    nnhEventHandleclick2 = () => {
        //lay du lieu trong state
        alert("Ho va ten: " + this.state.test + "\nAge: " + this.state.sdt );
    }

//button
  render() {
    return (
      <div className='alert alert-danger mx-22'>
        <button className='btn btn-primary' onClick={this.nnhEventHandleclick1}>
            Button 1 - Dữ liệu trong state - Họ và tên - Tuổi
        </button>
        
        <button className='btn btn-primary' onClick={this.nnhEventHandleclick2}>
            Button 1 - Dữ liệu trong state - test - sđt
        </button> 
      </div>
    )
  }
}
