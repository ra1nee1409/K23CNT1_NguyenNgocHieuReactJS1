import React, { useState } from "react";

function Test2() {
    const lists = ["arr1", "arr2"];
    const [count, setCount] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0); // Đếm tổng số lần click
    const [list, setList] = useState(lists);
    const danh_sach = [100, 120, 150, 200];
    const [liste, setLists] = useState(danh_sach);

    // Hàm xử lý khi nhấn nút
    const handleClickCount = (change) => {
        setCount(prev => prev + change);
        setTotalClicks(prev => prev + 1);
    };

    const handleList = () => {
        setList([
            ...list,
            parseInt(Math.random() * 1000),
        ]);
    };

    const NnhHandleAppNewRandom = () => {
        setLists(prev => [
            ...prev,
            parseInt(Math.random() * 1000),
        ]);
    };

    return (
        <div className='alert alert-info'>
            <h2>Tim hieu them ve useState</h2>
            <div>
                <p>Your clicked {totalClicks} times</p>
                <button className="btn btn-primary mx-2" onClick={() => handleClickCount(1)}>Click me</button>
                <p>List: {list.toString()}</p>
                <button className="btn btn-primary mx-2" onClick={handleList}>Click me</button>
            </div>
            <div>
                <p>Count {count}</p>
                <button className="btn btn-primary mx-2" onClick={() => handleClickCount(1)}>Tang</button>
                <button className="btn btn-primary mx-2" onClick={() => handleClickCount(-1)}>Giam</button>
                <button className="btn btn-primary mx-2" onClick={() => { setCount(0); setTotalClicks(prev => prev + 1); }}>Dat lai</button>
            </div>
            <div>
                <h2>List: {liste.toString()}</h2>
                <button className="btn btn-primary mx-2" onClick={NnhHandleAppNewRandom}>App new</button>
            </div>
        </div>
    );
}

export default Test2;
