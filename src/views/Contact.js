import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="contactContainer">
          <h2>Get in Touch</h2>

          <div className="Vmail">
            <a href="mailto:coursecritiquedb@gmail.com">
              <div className="emailContainer">
                <i className="fa-solid fa-envelope"></i>
                <p>coursecritiquedb@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
