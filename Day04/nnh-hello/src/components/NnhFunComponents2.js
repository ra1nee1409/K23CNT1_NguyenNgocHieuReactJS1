import React, { Component } from 'react';

class NnhFunComponents2 extends Component {
    constructor(props){
        super(props);
        //khởi tạo state đúng cách
        this.state = {
            fullname: "Anh Hieu DZ" ,
            age: 19 ,
            phone: "1234567890"
        };
    }
    //Ham xu ly su kien
    ChangeInfo = (ev) =>{
        //cap nhat state
        this.setState({
            fullname: "Anh Hieu DZ VCL",
            age: 22 ,
            phone: "213231123"
        });
    }
    
    render() {
        // let users = this.props.renderUsers;
        return (
            <div className='atert atert-success'>
                <h2>Trinh bay du lieu tu state</h2>
                <p>Info state (fullname): {this.state.fullname}</p>
                <p>Info state (age): {this.state.age}</p>
                <p>Info state (phone): {this.state.phone}</p>
                <hr/>
                <button className='btn btn-primary' onClick={this.ChangeInfo}>Change Info</button>
                <hr/>
                <p>Name: {this.props.renderName}</p>
                <p>fullname: {this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
                <p>age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
            </div>
        );
    }
}

export default NnhFunComponents2;