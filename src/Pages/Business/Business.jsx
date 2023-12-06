import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import business from "../../Images/business.png";

export default function Business(params) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentTab = searchParams.get("tab") || "0";

  // const changeTab = (tab) => {
  //   searchParams.set("tab", tab);
  //   setSearchParams(searchParams);
  // };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <NavBar />
      <br />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Company Profile
            </h1>
            <p class="mb-8 leading-relaxed">
              Primarily a textile trading company, over the past two decades we
              emerged as a leading importer of Polyester & Nylon Filament Yarn,
              Metallic Yarn, Polyester Staple Fiber, Polyester Fabrics and Pure
              Silk Yarn. Now Classic Textile has become one of the leading
              organizations, standing in front line along with its national as
              well as global competitors. With the untiring and concerted
              efforts, the company achieved tremendous success in International
              Trading.
            </p>
            <p>
              Within matter of years, our imports have reached magnitude volume,
              despite competition from other local companies. Classic Textile is
              well set to touch the highest in imports in years to come and
              compete successfully in our market and constantly capturing new
              products from all over the globe.
            </p>
            <p>
              We are also proudly representing many suppliers of Filament Yarn,
              Staple Fiber & Fabrics from China, Indonesia, Japan, Malaysia,
              Taiwan & Thailand.
            </p>
            <br />
            <ul>
              <li>Shipment Retrieval from any Pakistani Port</li>
              <li>Importing Expertise</li>
              <li>Quality Fibre</li>
            </ul>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={business}
            />
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
