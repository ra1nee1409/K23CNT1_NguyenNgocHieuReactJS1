import React, { useState } from 'react';
import './style.css';
import { NnhListUsers } from './components/NnhListUsers';
import { NnhCreateUser } from './components/NnhCreateUser';
import NnhHome from './components/NnhHome';
import NnhNavBar from './components/NnhNavBar';

function NnhApp() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className='container border my-3 p-3'>
            <h1>Mini Project - Nguyen Ngoc Hieu - K23CNT1</h1>
            <NnhNavBar setSelectedUser={setSelectedUser} />
            <hr />
            {selectedUser === null && <NnhHome />}
            {selectedUser === 'list' && <NnhListUsers />}
            {selectedUser === 'create' && <NnhCreateUser onCreate={() => setSelectedUser('list')} />}
        </div>
    );
}

export default NnhApp;
