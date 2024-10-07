import React from "react";

const Homehero = () => {
  return (
    <>
      <header>
        <div
          id="intro-example"
          className=" text-center bg-image carousel_img1"
          style={{ backgroundColor: "black" }}
        >
          <div className="mask">
            <div className="d-flex justify-content-center">
              <div className="text-white">
                <h1 className="mb-3 mt-5 heading">
                  "Find the Perfect Home Tutor for Your Needs."
                </h1>
                <a
                  data-mdb-ripple-init
                  className="btn btn-lg m-2 mb-3"
                  style={{ backgroundColor: "#25AD0F", color: "#ffffff" }}
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Download app
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-around carousel_img">
            <div className="col-12 col-sm-12 col-md-12">
              <img
                src="/assets/images/mainImage.png"
                loading="lazy"
                alt=""
                className="img-fluid"
                style={{ height: "50vh", width: "70%" }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Homehero;
