import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function NnhListUsers() {
    const [users, setUsers] = useState([]);
    const apiUrl = "https://67da14fb35c87309f52ae10f.mockapi.io/k23cnt1_NguyenNgocHieu_2310900037/nnh_users";

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.error("Lỗi:", error));
    }, []);

    return (
        <div className="container">
            <h2>Danh sách người dùng</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.nnh_Id}>
                            <td>{user.nnh_Id}</td>
                            <td>{user.nnh_name}</td>
                            <td>{user.nnh_email}</td>
                            <td>{user.nnh_phone}</td>
                            <td>{user.nnh_active ? "Hoạt động" : "Khoá"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
