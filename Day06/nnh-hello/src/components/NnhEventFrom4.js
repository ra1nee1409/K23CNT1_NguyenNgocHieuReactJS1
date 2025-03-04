import React, { Component } from 'react';

class NnhEventFrom4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: [],
            NngGioitinh: 'Nam'
        };
    }
    
    // Hàm xử lý 
    NnhHandleChange = (event) => {
        this.setState({
            NnhGioitinh: event.target.value
        }, () => {
            alert('Giới tính của bạn là: ' + this.state.NnhGioitinh);
        });
    };
    
    handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        this.setState((prevState) => {
            if (checked) {
                return { hobbies: [...prevState.hobbies, value] };
            } else {
                return { hobbies: prevState.hobbies.filter(hobby => hobby !== value) };
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Bạn đã chọn giới tính: ' + this.state.NnhGioitinh + '\nSở thích của bạn: ' + this.state.hobbies.join(", "));
    };

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form input - radio và checkbox</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="">Giới tính</label>
                            <br/>
                                <input 
                                    type='radio'
                                    name='NnhGioiTinh'
                                    value="Nam"
                                    id='NnhNam'
                                    checked={this.state.NnhGioitinh === "Nam"}
                                    onChange={this.NnhHandleChange}
                                />
                        <label htmlFor='NnhNam'>Nam</label>
                            <br/>
                                <input 
                                    type='radio' 
                                    name='NnhGioitinh' 
                                    value="Nu" 
                                    id='NnhNu' 
                                    checked={this.state.NnhGioitinh === "Nu"} 
                                    onChange={this.NnhHandleChange}
                                />
                        <label htmlFor='NnhNu'>Nữ</label>
                            <br/>
                                <input 
                                    type='radio' 
                                    name='NnhGioitinh' 
                                    value="Khac" 
                                    id='NnhKhac' 
                                    checked={this.state.NnhGioitinh === "Khac"} 
                                    onChange={this.NnhHandleChange} 
                                />
                        <label htmlFor='NnhKhac'>Khác</label>    
                            <br/>
                    </div>
                            <br/>
                        <div>
                            <label>Sở thích:</label>
                            <br/>
                                <input 
                                    type='checkbox' 
                                    name='hobby' 
                                    value="Đọc sách" 
                                    onChange={this.handleCheckboxChange} 
                                /> 
                                Đọc sách
                            <br/>
                                <input 
                                    type='checkbox' 
                                    name='hobby' 
                                    value="Nghe nhạc" 
                                    onChange={this.handleCheckboxChange} 
                                /> 
                                Nghe nhạc
                           <br/>
                                <input 
                                    type='checkbox' 
                                    name='hobby' 
                                    value="Du lịch" 
                                    onChange={this.handleCheckboxChange} 
                                /> 
                                Du lịch
                        </div>
                            <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default NnhEventFrom4;