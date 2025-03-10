import React, { Component } from 'react';

class NnhForm extends Component {
    render() {
      const {RenderNnhStuden} = this.props;

      // Kiểm tra nếu chưa chọn sinh viên, dùng dữ liệu mặc định
      const studentData = RenderNnhStuden || {
        nnhId: "",
        nnhStudentName: "",
        nnhAge: "",
        nnhGender: "",
        nnhBirtday: "",
        nnhBirtPlace: "",
        nnhAddress: "",
    };
        return (
            <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
        <form className="form-sample">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value={studentData.nnhId} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value={studentData.nnhStudentName} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tuổi</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value={studentData.nnhAge} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Giới tính</label>
            <div className="col-sm-9">
              <select className="form-control" value={studentData.nnhGender} disabled>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Ngày sinh</label>
            <div className="col-sm-9">
              <input className="form-control" placeholder="dd/mm/yyyy" value={studentData.nnhBirthday} readOnly  />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Nơi sinh</label>
            <div className="col-sm-9">
              <select className="form-control" disabled>
                <option value="HN">Hà Nội</option>
                <option value="HCM">TP. Hồ Chí Minh</option>
                <option value="DN">Đà Nẵng</option>
                <option value="QN">Quảng Ninh</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Địa chỉ</label>
            <div className="col-sm-9">
              <textarea className="form-control" value={studentData.nnhAddress}  defaultValue={""} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
        </form>
      </div>
    </div>
        );
    }
}

export default NnhForm;