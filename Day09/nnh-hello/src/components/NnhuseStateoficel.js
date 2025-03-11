import React, { useState } from 'react'

export default function NnhuseStateoficel() {
    //  Mảng sinh viên
    const listStudent = [
        { nnhId: "SV01", nnhStudentName: "Nguyen Ngoc Hieu", nnhAge: 19, nnhGender: "Nam", nnhBirtday: "14/09/2005", nnhBirtPlace: "HaNoi", nnhAddress: "Toa VCN, 25 Vu Ngoc Phan" },
        { nnhId: "SV02", nnhStudentName: "Tran Tien Anh", nnhAge: 20, nnhGender: "Nam", nnhBirtday: "2/3/2005", nnhBirtPlace: "NinhBinh", nnhAddress: "Toa VCN, 123 Vu Trong Phung" },
        { nnhId: "SV03", nnhStudentName: "Nguyen Quang Tam", nnhAge: 20, nnhGender: "Nam", nnhBirtday: "20/12/2005", nnhBirtPlace: "ThaiBinh", nnhAddress: "Toa VCN, 324 Tran Duy Dung" },
        { nnhId: "SV04", nnhStudentName: "Le Ngoc Son", nnhAge: 20, nnhGender: "Nam", nnhBirtday: "3/5/2005", nnhBirtPlace: "TPHoChiMinh", nnhAddress: "Toa VCN, 456 sigmaroad" },
    ];
    //  Khai báo state quản lý danh sách
    const [NnhStudent, setNnhStudent] = useState(listStudent);

    let NnhElement = NnhStudent.map((student, index)=> (
        <tr key={student.nnhId}>
            <td>{index + 1}</td>
            <td>{student.nnhId}</td>
            <td>{student.nnhStudentName}</td>
            <td>{student.nnhAge}</td>
            <td>{student.nnhGender}</td>
            <td>{student.nnhBirtday}</td>
            <td>{student.nnhBirtPlace}</td>
            <td>{student.nnhAddress}</td>
            <td>
                <button className='btn btn-primary mx-2' >Edit</button>
                <button className='btn btn-primary mx-2' onClick={() => handleDelete(student.nnhId)}>Delete</button>
            </td>
        </tr>
    ))
    const handleDelete = (id) => {
        const newList = NnhStudent.filter(student => student.nnhId !== id);
        setNnhStudent(newList); // Cập nhật lại danh sách mới (không có SV03)
      };
    return (
        <div>
      <h2>Danh sách sinh viên</h2>
      <table border="1" cellPadding="10" cellSpacing="0"  class="table table-striped-columns">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Nơi sinh</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
                {NnhElement}
        </tbody>
      </table>
    </div>
    )
}
