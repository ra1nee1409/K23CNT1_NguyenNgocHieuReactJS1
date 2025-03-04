import React, { Component } from 'react';

class NnhEventFrom1 extends Component {
    constructor(props){
        super(props)
            this.state ={
                nnhStudenName:"Nguyen Ngoc Hieu",
            }
        }
    
    //ham xu ly du lieu tren text box
    NnhHendelchange = (event) =>{
        this.setState({
            nnhStudenName:event.target.value,
        })
    }
      //khi submit
      nnhHandelsubmit =(ev) =>{
        alert('Xin chao ' + this.state.nnhStudenName);
    }

    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form input</h2>
                <form onSubmit={this.nnhHandelsubmit}>
                    <label htmlFor='nnhStudenName'>
                        <input 
                        type="text" 
                        name='nnhStudenName' 
                        id='nnhStudenName' 
                        value={this.state.nnhStudenName}  
                        onChange={this.nnhStudenName}
                        />
                    </label>
                    <button className='btn btn-primary'> Click to here</button>
                </form>
            </div>
        );
    }
}

export default NnhEventFrom1;