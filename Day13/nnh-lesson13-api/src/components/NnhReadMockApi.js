import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NnhReadMockApi() {
    //khoi tao state 
    const [nnhListUser, setNnhListUser] = useState([])
    //API 
    const nnhApiOnl = "https://67d98ea700348dd3e2ab9ea0.mockapi.io/k23cnt1_NguyenNgocHieu/nnh_users"
    //Doc du lieu tu API = axios
    useEffect(() =>{
        axios
            .get(nnhApiOnl)
            .then((nnh_response)=>{
                setNnhListUser(nnh_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    //view data
    const nnhElementUser = nnhListUser.map((nnh_item, index)=>{
        return(
            <tr>
                <td>{nnh_item.nnhId}</td>
                <td>{nnh_item.nnhfullName}</td>
                <td>{nnh_item.nnhAge}</td>
                <td>{nnh_item.nnhActive?'Hoạt động':'Khoá'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xoá</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách </h2>
        <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nnhElementUser
                    }
                </tbody>
            </table>
    </div>
  )
}
