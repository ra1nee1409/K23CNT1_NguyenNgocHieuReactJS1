import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import NnhHome from './components/NnhHome';
import NnhAbout from './components/NnhAbout';
import NnhContext from './components/NnhContext';
import NnhGioiThieu from './components/NnhGioiThieu';

class NnhApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='alert alert-primary'>Tran Tien Anh React Router Demo</h1>
        <hr />
        {/* Menu dạng danh sách ul > li */}
        <nav>
          <ul className="list-unstyled">
            <li><Link to="/" className="btn btn-link">Home</Link></li>
            <li><Link to="/login" className="btn btn-link">Login</Link></li>
            <li><Link to="/products/gioithieu" className="btn btn-link">Gioi Thieu</Link></li>
            <li><Link to="/products/home" className="btn btn-link">Home</Link></li>
            <li><Link to="/products/lienhe" className="btn btn-link">Lien He</Link></li>
            <li><Link to="/products/sanpham" className="btn btn-link">San Pham</Link></li>
            <li><Link to="/products/tintuc" className="btn btn-link">Tin Tuc</Link></li>
          </ul>
        </nav>
        <hr />
        {/* Các route tương ứng */}
        <Routes>
          <Route path="/" element={<NnhHome />} />
          <Route path="/login" element={<NnhAbout />} />
          <Route path="/products/gioithieu" element={<NnhGioiThieu />} />
          <Route path="/products/home" element={<NnhHome />} />
          <Route path="/products/lienhe" element={<NnhLienHe />} />
          <Route path="/products/sanpham" element={<NnhSanPham />} />
          <Route path="/products/tintuc" element={<NnhTinTuc />} />
        </Routes>
      </div>
    );
  }
}

export default NnhApp;