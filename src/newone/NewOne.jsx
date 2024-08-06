import React from "react";
import "./newone.css";

function NewOne() {
  return (
    <div className="container">
      <div className="card">
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <i className="fas fa-seedling"></i>
          </span>
        </div>

        <div className="glass">
          <div className="content">
            <h1>Rayen</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              autem.
            </p>
          </div>

          <div className="footer">
            <div className="social">
              <span className="social_icons">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="social_icons">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="social_icons">
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>

            <div className="link">
              Read More <i className="fas fa-arrow-up-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOne;
