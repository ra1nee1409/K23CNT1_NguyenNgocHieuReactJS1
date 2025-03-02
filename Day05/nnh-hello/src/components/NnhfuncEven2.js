import React, { Component } from 'react';

class NnhfuncEven2 extends Component {
    NnhbuttonclickEven1 =() =>{
        alert("button 1 clicked");
    };
    NnhbuttonclickEven2 =() =>{
        alert("button 2 clicked");
    };
    render() {
        return (
            <div className='alert alert-danger'> 
                <button className='btn btn-primary mx-1' onClick={this.NnhbuttonclickEven1} >button1 </button>
                <button className='btn btn-primary mx-1'onClick={this.NnhbuttonclickEven2}>button2 </button>
            </div>
        );
    }
}

export default NnhfuncEven2;