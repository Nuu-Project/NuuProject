import "./styles.css";
import logo from "./logo.svg";
import { Link } from 'react-router-dom';

export const Login1 = () => {
  return (
    <section className="page login-1">
      <div className="login-1-background"></div>
      <div className="login-1-card">
        <img src={logo} />
        <h2>歡迎使用</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>登入</button>
        </form>
        <footer>
        沒有帳號? <Link to ="/sign">點此註冊!</Link>
        </footer>
      </div>
    </section>
  );
};
