import React from "react";

export default function About(props) {
  let currStyle = {
    color: props.mode==="dark" ? "white" : "black",
    backgroundColor: props.mode==="light" ? "#fefae0" : "#415a77",
  };
  return (
    <>
    <div className="container" style={currStyle}>
      <h1 className="about my-3 mx-3">About</h1>
      <div className="accordion container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={currStyle}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currStyle}>
              This is a Utility app designed to help you to manipulate your text in various ways.
              In order to enhance user experience, the web app comes equipped with Dark mode and Light Mode, allowing user to personalize the screen as per their preference and environment.
              Unsure weather you actually clicked on "Copy Text" or forgot to do so? Our Alerts got your back!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={currStyle}
            >
              <strong>Infrastructure</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currStyle}>
            This project is built using React, a powerful JavaScript library for building modern, responsive user interfaces. 
            Leveraging React’s component-based architecture, it ensures a modular, scalable, and efficient development process. 
            The project is designed to deliver a fast, interactive, and seamless user experience, following best practices in performance and code organization.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={currStyle}
            >
              <strong>Thanks for visiting</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currStyle}>
              I hope this utility app was actually helpful to you and that you were provided the best user experience.
              Feel free to visit any time you need this. Adios!
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
