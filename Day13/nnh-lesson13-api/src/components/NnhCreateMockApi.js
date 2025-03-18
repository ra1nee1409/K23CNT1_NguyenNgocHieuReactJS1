//thêm mới dữ liệu

import React, { useState } from 'react'
import axios from 'axios'
export default function NnhCreateMockApi() {
    //khoi tao state
    const [nnhfullName,setNnhfullName] = useState ('')
    const [nnhAge,setNnhAge] = useState (0)
    const [nnhActive,setNnhActive] = useState (true)

    //api post
    const nnhCreateUserApi = "https://67d98ea700348dd3e2ab9ea0.mockapi.io/k23cnt1_NguyenNgocHieu/nnh_users";

    //khi submit form
    const nnhHandleSubmit = (event) =>{
        event.preventDefault();
        console.log("nnhActive: ",nnhActive);
        let nnhNewUser = {nnhfullName, nnhAge, nnhActive};
        console.log(nnhNewUser);
    //ghi du lieu vao Api
    axios
        .post(nnhCreateUserApi, nnhNewUser)
        .then((nnh_response)=>{
            
        })
    }
    return (
    <div className='alert alert-info'>
        <h2>Thêm mới user</h2>
        <hr/>
        <form>
            <div className='row mb-1'>
                <label for="nnhfullName">FullName</label>
                <input type="text" name='nnhfullName' id='nnhfullName' 
                value={nnhfullName}
                onChange={(ev)=>setNnhfullName(ev.target.value)} />
            </div>

            <div className='row mb-1'>
                <label for="nnhAge">Age</label>
                <input type="number" name='nnhAge' id='nnhAge' value={nnhAge}
                onChange={(ev)=>setNnhAge(ev.target.value)} />
            </div>

            <div className='row mb-1'>
                <label for="nnhActive">Active</label>
                <input type="radio" name='nnhActive' id='nnhActive_hd' value={'true'} 
                onChange={(ev)=>setNnhActive(ev.target.value)} />
                    <label for="nnhActive_hd">Hoạt động </label>
                <input type="radio" name='nnhActive' id='nnhActive_kh' value={'false'} 
                onChange={(ev)=>setNnhActive(ev.target.value)} />
                    <label for="nnhActive_kh">Khoá </label>
            </div>

            {/* <div className='row mb-1'>
                <label htmlFor='nnhActive'>Active</label>
                <select name='nnhActive' id='nnhActive'>
                    <option value='true'>Hoạt động</option>
                    <option value='false'>Khoá</option>
                </select>
            </div> */}
            <button onClick={nnhHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
