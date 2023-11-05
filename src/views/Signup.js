import React from "react";
import '../stylesheets/signup.css'
import SignupForm from '../components/SignupForm'
import brandImg from '../resources/assets/images/login-image.svg'

const Signup = () => {
  return (
    <>
      <div className="Scontainer">
      <div className="signupContainer">
        <div className="signupBrandBox">
          <div className="signupBrandName">
            <div className="signupBrandNameImg">
              {/* <img src={brandNameImg} alt="Brand" /> */}
            </div>
            <div className="signupBrandNameText">
              <h1>CCDb Signup</h1>
              {/* <h2>Census System</h2> */}
            </div>
          </div>
          <div className="signupBrandImg">
            <img src={brandImg} alt="Brand" />
          </div>
        </div>
        <div className="signupFormBox">
          <SignupForm />
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
