import React, { Component } from 'react';

class NnhEventFrom2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: 'css',
        };
    }

    handleChange = (event) => {
        this.setState({
            course: event.target.value
        });
    };

    handleSubmit = (event) => {
        alert('Khóa học đã chọn khi submit: ' + this.state.course);
        event.preventDefault();
    };

    render() {
        return (
            <div className='alert alert-info'>
            <h2>Input 2</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.course} onChange={this.handleChange}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JS</option>
                        <option value="reactjs">ReactJS</option>
                        </select>
                    </label>
                    <input type='submit' value="Submit" />
                </form>
            </div>
        );
    }
}

export default NnhEventFrom2;
