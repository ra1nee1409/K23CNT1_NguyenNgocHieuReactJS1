import React, { Component } from 'react';

class NnhEventFrom5 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hobbies: [],
            NnhGioitinh: 'Nam',
            course: 'html'
        };
    }
    
    // Hàm xử lý thay đổi input text
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    // Hàm xử lý radio button
    nnhHandleChange = (event) => {
        this.setState({
            NnhGioitinh: event.target.value
        });
    };

    // Hàm xử lý checkbox
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

    // Hàm xử lý select option
    handleCourseChange = (event) => {
        this.setState({ course: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Tên: ${this.state.name}\nGiới tính: ${this.state.NnhGioitinh}\nSở thích: ${this.state.hobbies.join(", ")}\nKhoá học: ${this.state.course}`);
    };

    
    render() {
        return (
            <div className='alert alert-success'>
            <h2>Form tổng hợp</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input 
                        type='text' 
                        value={this.state.name} 
                        onChange={this.handleNameChange} 
                    />
                </div>
                <div>
                    <label>Giới tính:</label>
                    <input 
                        type='radio' 
                        name='NnhGioitinh' 
                        value="Nam" 
                        id='NnhNam' 
                        checked={this.state.NnhGioitinh === "Nam"} 
                        onChange={this.nnhHandleChange} 
                    />
                    <label htmlFor='NnhNam'>Nam</label>
                    
                    <input 
                        type='radio' 
                        name='NnhGioitinh' 
                        value="Nu" 
                        id='NnhNu' 
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
                <div>
                    <label>Sở thích:</label>
                    <input 
                        type='checkbox' 
                        name='hobby' 
                        value="Đọc sách" 
                        onChange={this.handleCheckboxChange} 
                    /> Đọc sách
                    
                    <input 
                        type='checkbox' 
                        name='hobby' 
                        value="Nghe nhạc" 
                        onChange={this.handleCheckboxChange} 
                    /> Nghe nhạc
                    
                    <input 
                        type='checkbox' 
                        name='hobby' 
                        value="Du lịch" 
                        onChange={this.handleCheckboxChange} 
                    /> Du lịch
                </div>
                <div>
                    <label>Khoá học:</label>
                    <select value={this.state.course} onChange={this.handleCourseChange}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
                
            </div>
        );
    }
}

export default NnhEventFrom5;