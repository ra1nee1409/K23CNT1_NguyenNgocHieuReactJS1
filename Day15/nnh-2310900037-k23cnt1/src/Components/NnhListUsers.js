import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NnhListUsers() {
    const [NnhListUsers, setNnhListUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const usersPerPage = 5;
    const NnhApiOnline = "https://67e1094e58cc6bf78523f76a.mockapi.io/Nnh-K23CNT1-2310900037/Nnh_users";

    useEffect(() => {
        axios.get(NnhApiOnline)
            .then((response) => {
                const sortedData = response.data.sort((a, b) => {
                    const nameComparison = a.Nnh_FullName.localeCompare(b.Nnh_FullName);
                    if (nameComparison !== 0) {
                        return nameComparison;
                    }
                    return parseInt(a.Nnh_Id) - parseInt(b.Nnh_Id);
                });
                setNnhListUsers(sortedData);
            })
            .catch((error) => console.log("Lỗi:", error));
    }, []);

    const NnhHandleDelete = (Nnh_Id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
            axios.delete(`${NnhApiOnline}/${Nnh_Id}`).then(() => {
                setNnhListUsers((prevUsers) => prevUsers.filter((user) => user.Nnh_Id !== Nnh_Id));
            });
        }
    };

    const filteredUsers = NnhListUsers.filter((user) =>
        user.Nnh_FullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const NnhElemenUsers = currentUsers.map((Nnh_Item) => (
        <tr key={Nnh_Item.Nnh_Id}>
            <td>{Nnh_Item.Nnh_Id}</td>
            <td>{Nnh_Item.Nnh_FullName}</td>
            <td>{Nnh_Item.Nnh_Email}</td>
            <td>{Nnh_Item.Nnh_Phone}</td>
            <td>
                <span className={`badge ${Nnh_Item.Nnh_Active ? "bg-success" : "bg-danger"}`}>
                    {Nnh_Item.Nnh_Active ? "Hoạt động" : "Khóa"}
                </span>
            </td>
            <td>
                <div className="d-flex gap-2">
                    <Link to={`/NnhEditUsers/${Nnh_Item.Nnh_Id}`} className="btn btn-primary w-50">
                        Sửa
                    </Link>
                    <button onClick={() => NnhHandleDelete(Nnh_Item.Nnh_Id)} className="btn btn-danger w-50">
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    ));

    return (
        <div>
            <div className="text-center mb-3">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên...🔍"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control w-50 mx-auto"
                />
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{NnhElemenUsers}</tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                <button
                    className="btn btn-secondary"
                    style={{ padding: "5px 10px", width: "150px", textAlign: "center" }}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ⬅ Trang trước
                </button>
                    <span style={{ fontSize: "16px", fontWeight: "bold", minWidth: "50px", textAlign: "center" }}>
                        Trang {currentPage}
                    </span>
                <button
                    className="btn btn-secondary"
                    style={{ padding: "5px 10px", width: "150px", textAlign: "center" }}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastUser >= filteredUsers.length}
                >
                    Trang sau ➡
    </button>
</div>


        </div>
    );
}
