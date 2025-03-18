import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NnhReadApiLocal() {
    //khoi tao state
    const [nnhListUser, setNnhListUser] = useState([])
    //doc du lieu tu api local va set cho nnhListUser
    const apiUrl = "http://localhost:3001/users"
    //Lay danh sach tu apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nnhResponse)=>{
                setNnhListUser(nnhResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nnhListUser.map((nnhItem, index)=>{
                            return (
                                <tr>
                                    <td>{nnhItem.fullName}</td>
                                    <td>{nnhItem.age}</td>
                                    <td>{nnhItem.class}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
