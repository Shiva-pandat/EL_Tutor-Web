import React from "react";

const AboutUs = () => {
  return (
    <section className="about container py-3 mt-3" id="AboutUs">
      <h1 className="text-center mb-4 fw-bold main_change_one">
        About{" "}
        <strong
          class="fw-bold"
          style={{
            color: "#25AD0F",
          }}
        >
          EL TUTOR
        </strong>
      </h1>
      <div
        className="d-flex justify-content-center"
      >
        <p
          className="text-muted mb-4 col-lg-8 col-md-12 text-center "
        >
          A Revolutionary ED tech platform for all your learning needs.A place
          where learning,ambition,and success go hand-in-hand.Find more about
          us.
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/assets/images/aboutimg.png"
            alt="About Us"
            className="img-fluid h-100  " 
          />
        </div>
        <div className="col-md-6">
          <div class="row">
            <div class="col-sm-6 mb-2">
              <div class="card h-100 " style={{ backgroundColor: "#F0F9EE" }}>
                <div class="card-body">
                  <img src="/assets/images/icon1.png" alt="About Us"  style={{ marginBottom: "10px" }} />
                  <h5 class="card-title">Story</h5>
                  <p class="card-text">
                    We've got a stellar team with polished skills and high
                    profiles.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-2">
              <div class="card h-100" style={{ backgroundColor: "#F0F9EE" }}>
                <div class="card-body">
                  <img src="/assets/images/icon2.png" alt="About Us" style={{ marginBottom: "10px" }} />
                  <h5 class="card-title">Mission</h5>
                  <p class="card-text">
                    By Responding to our client's needs,we provide them with
                    reliable and applicable services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-2">
              <div class="card h-100" style={{ backgroundColor: "#F0F9EE" }}>
                <div class="card-body">
                  <img src="/assets/images/icon3.png" alt="About Us" style={{ marginBottom: "10px" }} />
                  <h5 class="card-title">24/7 Support</h5>
                  <p class="card-text">
                    we have a strong customer support platform to serve our
                    customer 24/7.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-2">
              <div class="card h-100" style={{ backgroundColor: "#F0F9EE" }}>
                <div class="card-body">
                  <img src="/assets/images/icon4.png" alt="About Us" style={{ marginBottom: "10px" }} />
                  <h5 class="card-title">Achievement</h5>
                  <p class="card-text">
                    sustainable growth in digital marketing involves creating a
                    long-term strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
