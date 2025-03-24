import React, { Component } from 'react';
import { FaFacebook, FaGoogle, FaEnvelope } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import NnhNavBar from './Components/NnhNavBar';

class NnhApp extends Component {
  render() {
    return (
      <div>
        <NnhNavBar/>

        <footer style={{
          width: "100%",
          background: "white",
          color: "#333",
          padding: "25px 0",
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #ddd"
        }}>
          {/* Danh sách liên kết */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
            <span style={{ cursor: "pointer", color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}
            >
              Privacy Policy
            </span>
            <span style={{ cursor: "pointer", color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}
            >
              Terms of Service
            </span>
            <span style={{ cursor: "pointer", color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}
            >
              Contact
            </span>
          </div>

          {/* Icon mạng xã hội */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontSize: "24px" }}>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer"
              style={{ color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}>
              <SiZalo />
            </a>
            <a href="https://www.facebook.com/ra1nee1409" target="_blank" rel="noopener noreferrer"
              style={{ color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}>
              <FaFacebook />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"
              style={{ color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}>
              <FaGoogle />
            </a>
            <a href="https://guns.lol/ra1nee"
              style={{ color: "#666", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.target.style.color = "#000"}
              onMouseLeave={(e) => e.target.style.color = "#666"}>
              <FaEnvelope />
            </a>
          </div>

          {/* Bản quyền */}
          <p style={{ fontSize: "14px", color: "#666", marginTop: "15px" }}>
            &copy; 2025 NNH Project. All rights reserved.
          </p>
        </footer>

      </div>
    );
  }
}

export default NnhApp;