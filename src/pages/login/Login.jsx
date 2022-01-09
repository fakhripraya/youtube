import Background from "../../components/background";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <Background />
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <h3 className="loginLogo">LETS GO DOOOD, EVERYONE IS WAITING DOOOODD!</h3>
            <span className="loginDesc">
              Please insert your email and password to log into the social media dood!
            </span>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <button className="loginRegisterButton">
              Forgot your Password
            </button>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
