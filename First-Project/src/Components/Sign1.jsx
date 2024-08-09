import "./Sign1.css";
import logo from "./logo.svg";
import { Link } from 'react-router-dom';

export const Sign1 = () => {
  return (
    <section className="page login-1">
      <div className="login-1-background"></div>
      <div className="login-1-card">
        <img src={logo} />
        <h2>歡迎註冊</h2>
        <form>
          <input type="email" placeholder="輸入聯大Email" />
          <input type="password" placeholder="輸入Password" />
          <button>註冊</button>
        </form>
        <footer>
          已有帳號? <Link to ="/login">點此登入!</Link>
        </footer>
      </div>
    </section>
  );
};
