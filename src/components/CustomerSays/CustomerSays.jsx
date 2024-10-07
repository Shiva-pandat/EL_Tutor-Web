import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CustomerSays = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // Now assign the navigation elements after component is rendered
      // Ensure navigation buttons are initialized with the swiper instance
    }
  }, [prevRef, nextRef]);

  return (
    <>
      <div className="text-center py-3 mt-3 main_Customersays">
        <h2 className="display-5 mb-4 fw-bold Customer_Says main_change">
          What our{" "}
          <strong
            className="fw-bold"
            style={{
              color: "#25AD0F",
            }}
          >
            Customer
          </strong>
          &nbsp;says about us
        </h2>
        <div className="d-flex justify-content-center">
          <p
            className="text-muted mb-4 col-lg-8 col-md-12 text-center"
          >
            We help you connect with your audience, build your brand, and
            achieve your business goals through innovative digital marketing
            solutions.
          </p>
        </div>
      </div>

      {/* Swiper Slider for Cards */}
      <div className="container">
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <img
                  src="/assets/images/customerimg2.png"
                  className="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                  alt="Laptop"
                />
                <div className="ms-auto text-warning d-flex">
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                </div>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between"></div>
                <div className="d-flex justify-content-between mb-1">
                  <h5 className="mb-0">Floyd Miles</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className=" mb-0">
                    Ammet minimum mollit non desrunt ullamco est sit aliqua
                    dolor do amet sint. Veilt officia consquet duis enim veilt
                    molit. Excertion veniam consequat sunt nostrud amet. Amet
                    minim mollit non deserunt ullamco.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <img
                  src="/assets/images/customerimg1.png"
                  className="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                  alt="Laptop"
                />
                <div className="ms-auto text-warning d-flex">
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStarHalfAlt style={{ marginRight: "5px" }} />
                </div>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between"></div>
                <div className="d-flex justify-content-between mb-1">
                  <h5 className="mb-0">Floyd Miles</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className=" mb-0">
                    Ammet minimum mollit non desrunt ullamco est sit aliqua
                    dolor do amet sint. Veilt officia consquet duis enim veilt
                    molit. Excertion veniam consequat sunt nostrud amet. Amet
                    minim mollit non deserunt ullamco.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <img
                  src="/assets/images/customerimg3.png"
                  className="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                  alt="Laptop"
                />
                <div className="ms-auto text-warning d-flex">
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStarHalfAlt style={{ marginRight: "5px" }} />
                </div>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between"></div>
                <div className="d-flex justify-content-between mb-1">
                  <h5 className="mb-0">Floyd Miles</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className=" mb-0">
                    Ammet minimum mollit non desrunt ullamco est sit aliqua
                    dolor do amet sint. Veilt officia consquet duis enim veilt
                    molit. Excertion veniam consequat sunt nostrud amet. Amet
                    minim mollit non deserunt ullamco.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <img
                  src="/assets/images/customerimg1.png"
                  className="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                  alt="Laptop"
                />
                <div className="ms-auto text-warning d-flex">
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginRight: "5px" }} />
                  <FaStarHalfAlt style={{ marginRight: "5px" }} />
                </div>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between"></div>
                <div className="d-flex justify-content-between mb-1">
                  <h5 className="mb-0">Floyd Miles</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className=" mb-0">
                    Ammet minimum mollit non desrunt ullamco est sit aliqua
                    dolor do amet sint. Veilt officia consquet duis enim veilt
                    molit. Excertion veniam consequat sunt nostrud amet. Amet
                    minim mollit non deserunt ullamco.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Swiper Navigation Buttons */}
      {/* <div ref={prevRef} className="swiper-button-prev"></div>
      <div ref={nextRef} className="swiper-button-next"></div> */}
    </>
  );
};

export default CustomerSays;
