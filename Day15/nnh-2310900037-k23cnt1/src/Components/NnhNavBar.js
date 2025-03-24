import React from 'react'
import { BrowserRouter as NnhRouter, Link, Routes, Route } from 'react-router-dom';
import NnhHome from './NnhHome';
import NnhListUsers from './NnhListUsers';
import NnhCreateUsers from './NnhCreateUsers';
import NnhEditUsers from './NnhEditUsers';

function NnhNavBar() {
    return (
        <NnhRouter>
            <div>
                <nav className="Nnh-navbar" >
                    <ul>
                        {/* Logo với hình ảnh */}
                        <li>

                            <Link to="/">
                                <img
                                    src="https://i.pinimg.com/736x/73/2c/f9/732cf95089aa4267d9815b45a74cd885.jpg"
                                    alt="Logo"
                                    className="Nnh-logo"
                                />
                            </Link>
                        </li>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/NnhListUsers">Danh Sách Users</Link></li>
                        <li><Link to="/NnhCreateUsers">Thêm Mới Users</Link></li>
                    </ul>

                </nav>

                {/* Nội dung chính */}
                <main>
                    <Routes>
                        <Route path="/" element={<NnhHome />} />
                        <Route path="/NnhListUsers" element={<NnhListUsers />} />
                        <Route path="/NnhCreateUsers" element={<NnhCreateUsers />} />
                        <Route path="/NnhEditUsers/:id" element={<NnhEditUsers />} />
                    </Routes>
                </main>


            </div>
        </NnhRouter>
    );
}

export default NnhNavBar