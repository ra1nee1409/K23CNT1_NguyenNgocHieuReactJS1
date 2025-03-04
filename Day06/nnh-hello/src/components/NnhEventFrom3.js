import React, { Component } from 'react';

class NnhEventFrom3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NnhGioitinh: 'Nam',
        };
    }
    
    //Hàm xử lý
    nnhHandleChange = (event) => {
        this.setState({
            NnhGioitinh: event.target.value
        }, () => {
            alert('Giới tính của bạn là: ' + this.state.NnhGioitinh);
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Bạn đã chọn giới tính: ' + this.state.NnhGioitinh);
    };

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form input - radio</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="">Giới tính</label>
                        
                        <input 
                            type='radio'
                            name='NnhGioiTinh'
                            value="Nam"
                            id='NnhNam'
                            checked={this.state.NnhGioitinh === "Nam"}
                            onChange={this.nnhHandleChange}
                        /> 
                        <label htmlFor="NnhNam">Nam</label>

                        <input 
                            type="radio"
                            name='NnhGioiTinh'
                            value="Nu"
                            id="NnhNu"
                            checked={this.state.NnhGioitinh === "Nu"}
                            onChange={this.nnhHandleChange}
                        />
                        <label htmlFor='NnhNu'>Nữ</label>

                        <input 
                            type='radio' 
                            name='NnhGioitinh' 
                            value="Khac" 
                            id='NnhKhac' 
                            checked={this.state.NnhGioitinh === "Khac"} 
                            onChange={this.nnhHandleChange} 
                        />
                        <label htmlFor='NnhKhac'>Khác</label>

                    </div>       
                    <button type='submit'>Submit</button>             
                </form>
            </div>
        );
    }
}

export default NnhEventFrom3;