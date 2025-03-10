import React, { Component } from 'react';
import NnhStuden from './NnhStuden';

class NnhStudenList extends Component {
  constructor(props) {
    super(props);

  }

//ham xu ly su kien xem
  nnhHandleView= (NnhStuden)=>{
//chuyen du lieu len NnhApp
  this.props.onnnhHandleView(NnhStuden);
  }

  render() {
    //lay du lieu tu props cua NnhApp.js xuong
    let { renderNnhStudents } = this.props;
    console.log("List:", renderNnhStudents);

    //chuyen du lieu vao NnhStudent de hien thi
    let NnhElementStudent = renderNnhStudents.map((nnhItem,index)=>{
      return( 
      <NnhStuden 
      key={index}
      index={index + 1}
      renderNnhStudents = {nnhItem} 
      onnnhHandleView ={this.nnhHandleView}
      />)
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

              {NnhElementStudent}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NnhStudenList;