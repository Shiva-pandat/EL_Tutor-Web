import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <div className="contact_us_green py-3 mt-3" id="ContactUs">
        <div className="container">
          <div class="text-center mb-4 main_contact">
            <h2 class="display-5 mb-4 fw-bold main_change_one">
              Contact{" "}
              <strong
                class="fw-bold"
                style={{
                  color: "#25AD0F",
                }}
              >
                Us
              </strong>
            </h2>
            <div className="d-flex justify-content-center">
              <p
                className="text-muted mb-4 col-lg-8 col-md-12 text-center contact "
              >
                We help you connect with your audience,build your brand,and
                acheive your business goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 mt-5 mt-lg-0 Bid_contact">
              <div>
                <h2 className="contactus-head fw-bold fs-6">Contact Details</h2>
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-3 ">
                    <i
                      className="me-3 p-2"
                      style={{
                        color: "#25AD0F",
                        backgroundColor: "#F0F9EE",
                      }}
                    >
                      <IoCall />
                    </i>
                    <span>+12(017)124-987</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i
                      className="me-3 p-2"
                      style={{
                        color: "#25AD0F",
                        backgroundColor: "#F0F9EE",
                      }}
                    >
                      <IoMdMail />
                    </i>
                    <span>hello@workik.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i
                      className="me-3 p-2"
                      style={{
                        color: "#25AD0F",
                        backgroundColor: "#F0F9EE",
                      }}
                    >
                      <MdAddLocationAlt />
                    </i>
                    <span>102 street, y cross 485656</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-12 main_form-box "
              style={{ backgroundColor: "#f3f3f3" }}
            >
              <form className="form-box">
                <div className="form-wrapper" style={{ padding: "15px" }}>
                  <div className="mb-4">
                    <h2 className="contactus-head fw-bold fs-6">
                      GOT ANY QUESTIONS
                    </h2>
                    <p
                      className="contactus-subhead fw-bold"
                      style={{
                        color: "#25AD0F",
                      }}
                    >
                      Send Us a Message
                    </p>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6 form_contact">
                      <label for="firstName" className="form-label input-title">
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="First Name"
                        name="First Name"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-md-6 form_contact">
                      <label for="lastName" className="form-label input-title">
                        Last Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="Last Name"
                        name="Last Name"
                        placeholder="Enter your email"
                      />{" "}
                    </div>
                    <div className="col-md-6 form_contact">
                      <label htmlFor="email" className="form-label input-title">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="Email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-md-6 form_contact">
                      <label htmlFor="phone" className="form-label input-title">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="PhoneNumber"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="col-12 form_contact">
                      <label for="query" className="form-label input-title">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="query"
                        rows="5"
                        placeholder="Please enter your query..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn  submit-btn"
                      style={{
                        padding: "10px,70px",
                        fontWeight: "300",
                        backgroundColor: "#25AD0F",
                        color: "#ffffff",
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-12">
        <img
          src="/assets/images/Frame.png"
          alt=""
          className="img-fluid"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
    </>
  );
};

export default ContactUs;
