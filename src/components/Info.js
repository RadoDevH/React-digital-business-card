import React from "react";
import logo from "../images/ddd.jpg";

const Info = () => {
  return (
    <header>
      <img className="  h-[300px]" src={logo} width="100%" alt="hero-logo" />
      <main className="text-center py-6">
        <h1 className="text-4xl capitalize font-bold">rado holubowski</h1>
        <h3 className="text-[#f3bf99] text-2xl capitalize py-3">
          full stack developer
        </h3>
        <p>radoh.website</p>
        <div className="flex justify-around mt-6">
          <button
            className="flex justify-center items-center  bg-gradient-to-r from-sky-500 to-indigo-500   w-40 text-white rounded-2xl   capitalize font-medium
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            email
          </button>
          <button className="flex justify-center items-center w-40  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl capitalize font-medium py-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
            linkedin
          </button>
        </div>
      </main>
    </header>
  );
};
export default Info;
