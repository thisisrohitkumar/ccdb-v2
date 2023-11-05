import React from "react";
import '../stylesheets/login.css'
import LoginForm from '../components/LoginForm'
import brandImg from '../resources/assets/images/login-image.svg'

const Login = () => {
  return (
    <>
      <div className="Lcontainer">
      <div className="loginContainer">
        <div className="loginBrandBox">
          <div className="loginBrandName">
            <div className="loginBrandNameImg">
              {/* <img src={brandNameImg} alt="Brand" /> */}
            </div>
            <div className="loginBrandNameText">
              <h1>CCDb Login</h1>
              {/* <h2>Census System</h2> */}
            </div>
          </div>
          <div className="loginBrandImg">
            <img src={brandImg} alt="Brand" />
          </div>
        </div>
        <div className="loginFormBox">
          <LoginForm />
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
