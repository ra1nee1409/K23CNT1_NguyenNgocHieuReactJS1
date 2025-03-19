import React from 'react';
export default function NnhNavBar({ setSelectedUser }) {
    return (
        <nav>
            <button onClick={() => setSelectedUser(null)}>Trang chủ</button>
            <button onClick={() => setSelectedUser('list')}>Danh sách User</button>
            <button onClick={() => setSelectedUser('create')}>Thêm mới User</button>
        </nav>
    );
}
