import React from "react";
import {
  FaInstagramSquare,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "black", color: "white" }}
      >
        {/* Social icons */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row d-flex justify-content-between align-items-start">
              {/* Quick Navigation Link */}
              <div className="col-md-2 mb-4">
                <h6 className=" fw-bold mb-4 d-flex align-items-center justify-content-center">
                  <i className="fas fa-gem "></i>
                  <span>Quick Navigation Link</span>
                </h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Laravel
                  </a>
                </p>
              </div>

              {/* Social Media and Community */}
              <div className="col-12 col-md-6 col-lg-2 mb-4">
                <h6 className="fw-bold mb-4 text-center text-md-start">
                  Social Media and Community
                </h6>
                <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                  <p className="d-flex align-items-center gap-2">
                    <FaInstagramSquare style={{ fontSize: "1.3rem" }} />{" "}
                    Instagram
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <FaFacebook style={{ fontSize: "1.3rem" }} /> Facebook
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <FaYoutube style={{ fontSize: "1.3rem" }} /> YouTube
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <FaTwitter style={{ fontSize: "1.3rem" }} /> Twitter
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <FaLinkedinIn style={{ fontSize: "1.3rem" }} /> LinkedIn
                  </p>
                </div>
              </div>

              {/* Download the App */}
              <div className="col-12 col-md-6 col-lg-2 mb-4">
                <h6 className="fw-bold mb-4 text-center text-md-start">
                  Download the App
                </h6>
                <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
                  <p className="d-flex align-items-center gap-2">
                    <BiLogoPlayStore style={{ fontSize: "2rem" }} /> Google Play
                  </p>
                </div>
              </div>

              {/* Legal Information */}
              <div className="col-12 col-md-6 col-lg-2 mb-4">
                <h6 className="fw-bold mb-4 text-center text-md-start">
                  Legal Information
                </h6>
                <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <h6 className="fw-bold mb-4 text-center text-md-start">
                  Contact
                </h6>
                <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                  <p className="d-flex justify-content-center justify-content-md-start gap-2 footer">
                    <CiLocationOn style={{ fontSize: "3rem" }} />
                    <span className="text-center text-md-start">
                      Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                    </span>
                  </p>
                  <p className="d-flex justify-content-center justify-content-md-start gap-2">
                    <CiMail style={{ fontSize: "1.5rem" }} />
                    <span className="ms-2">support@eltutor.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
