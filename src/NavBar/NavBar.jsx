import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClassicLogo from "./classic textile logo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 right-0 z-10"
        style={{ background: "#9EC8B9" }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link to="/">
                {/* <h2 className="text-2xl text-white font-bold hover:text-orange-800 "> */}
                <img src={ClassicLogo} alt="" className="-my-7" style={{ height: '65px', width: "75px" }} />
                {/* LOGO */}
                {/* </h2> */}
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BM8K0P6UhJnZ2UyM51c2aqLcsUMKsa6XvoGCaB6xXRQ7e6ee_ckHC4J7cTZo2f7M4OA&usqp=CAU"
                      //   src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5003-512.png"
                      width={30}
                      height={30}
                      style={{ color: "white" }}
                      alt="logo"
                    />
                  ) : (
                    <svg
                      class="w-6 h-6 text-white-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-lg text-white py-5 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link to="/" onClick={() => setNavbar(!navbar)}>
                    Company Profile
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Our Associates
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Shipment Retrieval
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Importing Expertise
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Quality Fibre
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
