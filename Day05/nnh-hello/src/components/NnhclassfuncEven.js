import React, { Component } from 'react';

class NnhclassfuncEven extends Component {
     constructor(props) {
        super(props);// Gọi super(props) để sử dụng `this.props`
        this.state ={
            nnhNoiDung:"JOKE OF THE DAY"
        }
    }
    //Hàm xử lý sự kiện
    NnhbuttoncompHandleClick=()=> {
        this.props.NnhonNnhDatatoapp("Dữ liệu từ component con - NnhbuttoncompHandleClick - abcxyz")
    }
    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary' onClick={this.NnhbuttoncompHandleClick}>
                    Chuyển dữ liệu lên App
                </button>
            </div>
        );
    }
}

export default NnhclassfuncEven;