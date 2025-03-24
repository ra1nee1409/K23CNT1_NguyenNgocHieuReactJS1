import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NnhCreateUsers() {
    const [Nnh_FullName, setNnh_FullName] = useState('');
    const [Nnh_Email, setNnh_Email] = useState('');
    const [Nnh_Phone, setNnh_Phone] = useState('');
    const [Nnh_Active, setNnh_Active] = useState(true);
    const NnhCreateUserApi = "https://67e1094e58cc6bf78523f76a.mockapi.io/Nnh-K23CNT1-2310900037/Nnh_users";
    const navigate = useNavigate();

    const NnhHandleSubmit = (event) => {
        event.preventDefault();
        let NnhNewUser = { Nnh_FullName, Nnh_Email, Nnh_Phone, Nnh_Active };
        
        axios.post(NnhCreateUserApi, NnhNewUser)
            .then(() => {
                alert("Người dùng đã được tạo thành công!");
                navigate('/NnhListUsers');
            })
            .catch((error) => console.log("Lỗi khi tạo:", error));
    };

    const NnhHandleBack = () => {
        navigate('/NnhListUsers');
    };

    return (
        <div className='container mt-4'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className='card p-4 shadow-sm'>
                        <h2 className="text-center text-primary">Thêm mới Users</h2>
                        <hr />
                        <form onSubmit={NnhHandleSubmit}>
                            <div className='mb-3'>
                                <label className="form-label">Full Name</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    value={Nnh_FullName} 
                                    onChange={(ev) => setNnh_FullName(ev.target.value)} 
                                    required 
                                />
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Email</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    value={Nnh_Email} 
                                    onChange={(ev) => setNnh_Email(ev.target.value)} 
                                    required 
                                />
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Phone</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    value={Nnh_Phone} 
                                    onChange={(ev) => setNnh_Phone(ev.target.value)} 
                                    required 
                                />
                            </div>

                            <div className='mb-3'>
    <label className="form-label">Active</label>
    <div className="btn-group-vertical w-100">
        <input 
            type='radio' 
            className="btn-check" 
            name='Nnh_Active' 
            id="Nnh_Active_hd" 
            value="true" 
            checked={Nnh_Active === true} 
            onChange={() => setNnh_Active(true)} 
        />
        <label className="btn btn-outline-success btn-sm w-100 py-1 fs-7" htmlFor="Nnh_Active_hd">Hoạt động</label>

        <input 
            type='radio' 
            className="btn-check" 
            name='Nnh_Active' 
            id="Nnh_Active_kh" 
            value="false" 
            checked={Nnh_Active === false} 
            onChange={() => setNnh_Active(false)} 
        />
        <label className="btn btn-outline-danger btn-sm w-100 py-1 fs-7" htmlFor="Nnh_Active_kh">Khóa</label>
    </div>
</div>


                            <div className="d-flex justify-content-between">
                                <button type="submit" className='btn btn-primary'>Create</button>
                                <button type="button" className='btn btn-secondary' onClick={NnhHandleBack}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
