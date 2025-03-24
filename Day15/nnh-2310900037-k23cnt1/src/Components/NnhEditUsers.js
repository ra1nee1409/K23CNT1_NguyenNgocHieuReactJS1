import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NnhEditUsers() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Nnh_User, setNnh_User] = useState({
        Nnh_FullName: '',
        Nnh_Email: '',
        Nnh_Phone: '',
        Nnh_Active: false
    });

    useEffect(() => {
        if (!id) {
            console.error("ID không hợp lệ");
            return;
        }
        axios.get(`https://67e1094e58cc6bf78523f76a.mockapi.io/Nnh-K23CNT1-2310900037/Nnh_users/${id}`)
            .then((response) => {
                console.log("Dữ liệu nhận được:", response.data);
                if (response.data) {
                    setNnh_User(response.data);
                } else {
                    console.error("Không tìm thấy dữ liệu người dùng");
                }
            })
            .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
    }, [id]);

    const NnhhandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNnh_User((prevUser) => ({
            ...prevUser,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const NnhhandleSubmit = (e) => {
        e.preventDefault();
        console.log("Dữ liệu gửi lên API:", Nnh_User);
        axios.put(`https://67e1094e58cc6bf78523f76a.mockapi.io/Nnh-K23CNT1-2310900037/Nnh_users/${id}`, Nnh_User)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate('/NnhListUsers');
            })
            .catch((error) => console.error("Lỗi khi cập nhật:", error));
    };

    return (
        <div className="container">
            <h2>Chỉnh sửa User ID: {id}</h2>
            <form onSubmit={NnhhandleSubmit}>
                <div>
                    <label>Full Name: </label>
                    <input
                        type="text"
                        name="Nnh_FullName"
                        value={Nnh_User.Nnh_FullName || ''}
                        onChange={NnhhandleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="Nnh_Email"
                        value={Nnh_User.Nnh_Email || ''}
                        onChange={NnhhandleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone: </label>
                    <input
                        type="text"
                        name="Nnh_Phone"
                        value={Nnh_User.Nnh_Phone || ''}
                        onChange={NnhhandleChange}
                        required
                    />
                </div>
                <div>
                    <label>Active: </label>
                    <input
                        type="checkbox"
                        name="Nnh_Active"
                        checked={Nnh_User.Nnh_Active || false}
                        onChange={NnhhandleChange}
                    />
                </div>
                <button type="submit">Cập nhật</button>
            </form>
        </div>
    );
}
