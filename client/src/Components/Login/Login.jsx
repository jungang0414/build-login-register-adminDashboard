/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

// 導入 icon套件
import { FaUserShield } from "react-icons/fa";
// 導入我們的資料
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";
const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        {/* <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Ex Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div> */}

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid">
            <span>Login Status will go here</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
