import React, { useState } from 'react';
import axios from 'axios';

export function NnhCreateUser({ onCreate }) {
    const [nnh_name, setNnhName] = useState('');
    const [nnh_email, setNnhEmail] = useState('');
    const [nnh_phone, setNnhPhone] = useState('');
    const [nnh_active, setNnhActive] = useState(false);

    const nnhCreateUserApi = "https://67da14fb35c87309f52ae10f.mockapi.io/k23cnt1_NguyenNgocHieu_2310900037/nnh_users";

    const nnhHandleSubmit = (event) => {
        event.preventDefault();
        let nnhNewUser = { nnh_name, nnh_email, nnh_phone, nnh_active };
        console.log("Dữ liệu gửi lên:", nnhNewUser);
        axios.post(nnhCreateUserApi, nnhNewUser)
            .then(() => onCreate())
            .catch(error => console.error('Error creating user:', error));
    };

    return (
        <div className='form-container'>
            <h2>Thêm mới User</h2>
            <form>
                <div className='form-group'>
                    <label>Họ và tên: <input type='text' name='nnh_name' value={nnh_name} onChange={(ev) => setNnhName(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Email: <input type='email' name='nnh_email' value={nnh_email} onChange={(ev) => setNnhEmail(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Số điện thoại: <input type='text' name='nnh_phone' value={nnh_phone} onChange={(ev) => setNnhPhone(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Hoạt động: 
                        <select name='nnh_active' value={nnh_active} onChange={(ev) => setNnhActive(ev.target.value === 'true')}>
                            <option value='true'>Hoạt động</option>
                            <option value='false'>Khoá</option>
                        </select>
                    </label>
                </div>
                <button type='submit' onClick={nnhHandleSubmit}>Thêm mới</button>
            </form>
        </div>
    );
}
