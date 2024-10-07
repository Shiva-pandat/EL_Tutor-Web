import React from "react";

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Set the duration of the scroll (in milliseconds)
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        // Ease function for smoother scroll (ease-in-out effect)
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    }
  };
  
  

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/images/logo.png"
            height="20"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{boxShadow:"none"}}
        >
          <span className="navbar-toggler-icon" style={{backgroundColor:"transparent"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li onClick={()=>scrollToSection('AboutUs')} className="nav-item">
              <a className="nav-link text-white"style={{cursor:"pointer"}}>
              About Us
              </a>
            </li> 
            <li onClick={()=>scrollToSection('ContactUs')}className="nav-item">
              <a className="nav-link text-white"style={{cursor:"pointer"}} >Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
