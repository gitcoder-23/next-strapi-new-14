import React from "react";

const HeroBanner = () => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br /> browny <br /> star <span>.</span>{" "}
              </h2>
              <p>ui/ux designer and web developer</p>
              <a href="assets/download/browney.txt" download>
                download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
