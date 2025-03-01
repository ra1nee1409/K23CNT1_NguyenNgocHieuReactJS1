import React, { Component } from 'react';

class Nnhclasscomprops2 extends Component {
    //ham xu ly
    NnhEventHandleclick1 = () =>{
        alert ("hello... " + this.props.NnhEventHandleclick1);
    }
    render() {
        return (
            <div>
                <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.NnhEventHandleclick1}>Button 1</button>
            </div>

            </div>
        );
    }
}

export default Nnhclasscomprops2;