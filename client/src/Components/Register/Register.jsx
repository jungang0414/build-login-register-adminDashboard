import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";

// 導入 icon套件
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

// 導入我們的資料
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";
const Register = () => {
  return (
    <div className="RegisterPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Ex Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">信箱</label>
              <div className="input flex">
                <MdOutlineEmail className="icon" />
                <input type="email" id="email" placeholder="Enter email" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">使用者名稱</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="username"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">密碼</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="text" id="password" placeholder="Enter Password" />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>註冊</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              忘記你的密碼? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
