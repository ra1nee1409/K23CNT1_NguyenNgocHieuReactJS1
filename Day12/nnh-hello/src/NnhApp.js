import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import NnhHome from './components/NnhHome';
import NnhLienHe from './components/NnhLienHe';
import NnhSanPham from './components/NnhSanPham';
import NnhTinTuc from './components/NnhTinTuc';
import NnhGioiThieu from './components/NnhGioiThieu';
import NnhLogin from './components/NnhLogin';

class NnhApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='alert alert-primary'>Nguyen Ngoc Hieu React Router Demo</h1>
        <hr />
        {/* Menu dạng danh sách ul > li */}
        <nav>
          <ul className="list-unstyled">
            <li><Link to="/" className="btn btn-link">Home</Link></li>
            <li><Link to="/login" className="btn btn-link">Login</Link></li>
            <li><Link to="/gioithieu" className="btn btn-link">Gioi Thieu</Link></li>
            <li><Link to="/products/lienhe" className="btn btn-link">Lien He</Link></li>
            <li><Link to="/products/sanpham" className="btn btn-link">San Pham</Link></li>
            <li><Link to="/products/tintuc" className="btn btn-link">Tin Tuc</Link></li>
          </ul>
        </nav>
        <hr />
        {/* Các route tương ứng */}
        <Routes>
          <Route path="/" element={<NnhHome />} />
          <Route path="/login" element={<NnhLogin/>} />
          <Route path="/gioithieu" element={<NnhGioiThieu/>} />
          <Route path="/products/search" element={<NnhHome/>} />
          <Route path="/products/lienhe" element={<NnhLienHe />} />
          <Route path="/products/sanpham" element={<NnhSanPham />} />
          <Route path="/products/tintuc" element={<NnhTinTuc />} />
        </Routes>
      </div>
    );
  }
}

export default NnhApp;