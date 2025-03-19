import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function NnhEditUser({ userId, onUpdate, onCancel }) {
    const [user, setUser] = useState({ nnh_name: '', nnh_email: '', nnh_phone: '', nnh_active: false });
    const apiURL = `https://67da14fb35c87309f52ae10f.mockapi.io/k23cnt1_NguyenNgocHieu_2310900037/nnh_users/${userId}`;

    useEffect(() => {
        axios.get(apiURL)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(apiURL, user)
            .then(() => onUpdate())
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className='edit-form-container'>
            <h2>Chỉnh sửa người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input type='text' name='nnh_name' value={user.nnh_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='nnh_email' value={user.nnh_email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input type='text' name='nnh_phone' value={user.nnh_phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Trạng thái:</label>
                    <select name='nnh_active' value={user.nnh_active} onChange={handleChange}>
                        <option value='true'>Hoạt động</option>
                        <option value='false'>Khóa</option>
                    </select>
                </div>
                <button type='submit'>Cập nhật</button>
                <button type='button' onClick={onCancel}>Hủy</button>
            </form>
        </div>
    );
}
