import React, { Component } from 'react';

class NnhAccountAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nnh_name: "",
            nnh_email: "",
            nnh_age: "",
            nnh_gender: "",
            nnh_phone: "",
            nnh_address: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state);
        this.setState({
            nnh_name: "",
            nnh_email: "",
            nnh_age: "",
            nnh_gender: "",
            nnh_phone: "",
            nnh_address: "",
        });
    };

    render() {
        return (
            <form className="account-form" onSubmit={this.handleSubmit}>
                <input type="text" name="nnh_name" placeholder="Tên" value={this.state.nnh_name} onChange={this.handleChange} required />
                <input type="email" name="nnh_email" placeholder="Email" value={this.state.nnh_email} onChange={this.handleChange} required />
                <input type="number" name="nnh_age" placeholder="Tuổi" value={this.state.nnh_age} onChange={this.handleChange} required />
                <select name="nnh_gender" value={this.state.nnh_gender} onChange={this.handleChange} required>
                    <option value="">Chọn giới tính</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                </select>
                <input type="text" name="nnh_phone" placeholder="Số điện thoại" value={this.state.nnh_phone} onChange={this.handleChange} required />
                <input type="text" name="nnh_address" placeholder="Địa chỉ" value={this.state.nnh_address} onChange={this.handleChange} required />
                <button type="submit">Thêm</button>
            </form>
        );
    }
}

export default NnhAccountAdd;
