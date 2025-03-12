import React, { Component } from 'react';
import NnhAccountAdd from "./components/NnhAccountAdd";
import NnhAccountList from "./components/NnhAccountList";
import './NnhApp.css';

class NnhApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nnh_Accounts: [
        { nnh_id: "SV001", nnh_name: "Nguyen Ngoc Hieu", nnh_email: "Hieu@gmail.com", nnh_age: "20", nnh_gender: "Nam", nnh_phone: "0987654321", nnh_address: "Hà Nội" },
        { nnh_id: "SV002", nnh_name: "Tran Tien Anh", nnh_email: "Anh@gmail.com", nnh_age: "34", nnh_gender: "Nam", nnh_phone: "0912345678", nnh_address: "TP HCM" },
        { nnh_id: "SV003", nnh_name: "Nguyen Quang Tam", nnh_email: "Tam@gmail.com", nnh_age: "23", nnh_gender: "Nam", nnh_phone: "0963456789", nnh_address: "Đà Nẵng" },
        { nnh_id: "SV004", nnh_name: "Le Ngoc Son", nnh_email: "Son@gmail.com", nnh_age: "54", nnh_gender: "Nam", nnh_phone: "0934567890", nnh_address: "Hải Phòng" },
        { nnh_id: "SV005", nnh_name: "Vu Mai Chi", nnh_email: "Chi@gmail.com", nnh_age: "23", nnh_gender: "Nữ", nnh_phone: "0905678901", nnh_address: "Cần Thơ" },
      ],
    };
  }

  addAccount = (newAccount) => {
    this.setState((prevState) => ({
      nnh_Accounts: [...prevState.nnh_Accounts, { nnh_id: `SV00${prevState.nnh_Accounts.length + 1}`, ...newAccount }],
    }));
  };

  render() {
    return (
      <div className="app-container">
        <h1>Quản lý tài khoản</h1>
        <div className="content-wrapper">
          <div className="account-add">
            <NnhAccountAdd addAccount={this.addAccount} />
          </div>
          <div className="account-list">
            <NnhAccountList accounts={this.state.nnh_Accounts} />
          </div>
        </div>
      </div>
    );
  }
}

export default NnhApp;
