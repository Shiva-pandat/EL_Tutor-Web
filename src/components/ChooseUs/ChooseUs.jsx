import React from "react";

const ChooseUs = () => {
  return (
    <>
      <div class="container py-3 mt-3 main_chooseUs">
        <div class="text-center mb-4">
          <h2 class="display-5 mb-4 fw-bold main_change_one">
            Why{" "}
            <strong
              class="fw-bold"
              style={{
                color: "#25AD0F",
              }}
            >
              Choose Us
            </strong>
          </h2>
          <div className="d-flex justify-content-center ">
            <p
              className="text-muted mb-4 col-lg-8 col-md-12 text-center bid_chooseUs  "
            >
              Choose EL TUTOR for personalized, reliable and convenient
              connections between students and qualified tutors.
            </p>
          </div>
        </div>
        <div class="row  align-items-center">
          <div class="col-sm-6 col-lg-4 mb-4 main_bidchooseUs">
            <div class="text-center text-sm-start">
              <h4 class="fw-semibold">For Student</h4>
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Roin gravida nibh vel velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
            </div>
            <div class="text-center text-sm-end">
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Vel proin gravida nibh velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Gravida roin nibh vel velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 d-none d-lg-block">
            <div class="why-choose-center-image">
              <img
                src="/assets/images/chooseimg.png"
                alt="..."
                class="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="text-center text-sm-start mb-0 teacher_choose">
              <h4 class="fw-semibold">For Teacher</h4>
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Nibh roin gravida vel velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
            </div>

            <div class="text-center text-sm-start teacher_choose">
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Vel proin gravida nibh velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
              <li class="mb-0" style={{ textAlign: "justify" }}>
                Vel proin gravida nibh velit auctor aliquetenean sollicitudin,
                lorem qui bibendum auctor.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
