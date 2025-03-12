import React from 'react';

const NnhAccountList = ({ accounts }) => {
    return (
        <table className="account-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account, index) => (
                    <tr key={index}>
                        <td>{account.nnh_id}</td>
                        <td>{account.nnh_name}</td>
                        <td>{account.nnh_email}</td>
                        <td>{account.nnh_age}</td>
                        <td>{account.nnh_gender}</td>
                        <td>{account.nnh_phone}</td>
                        <td>{account.nnh_address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NnhAccountList;
