import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

export default function NewsArticles(params) {
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
      {/* <br /> */}
      <br />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Lorem, ipsum dolor sit
              {/* <br class="hidden lg:inline-block" />
              consectetur adipisicing elit. */}
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos
              animi nihil iste doloremque, omnis minima provident molestias,
              laudantium optio repudiandae rem exercitationem eveniet sint?
              Reiciendis explicabo tenetur hic odit?
            </p>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Production Capacity:
                </h2>
                <p class="leading-relaxed">
                  1.0 Million meters fabric and stitching units having capacity
                  100,000-150,000 sets per month.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Weaving:
                </h2>
                <p class="leading-relaxed">
                  Currently we are producing Poly cotton, 100% Cotton, Cotton
                  Rich, Egyptian cotton blends for our valued customers in
                  different qualities & weaving techniques. We weave these
                  qualities on Auto Loom, Sulzer Loom, and Air Jet Loom
                  according to customer requirement. We have complete setup for
                  Yarn Dyed Weaving.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span class="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Products:
                </h2>
                <p class="leading-relaxed">
                  We regularly producing and supplying. Fabrics and madeup’s
                  finished upto 300 cm, Twill, Made ups Sheet Set, Duvet Cover
                  set, Flat Sheet, Fitted Sheet, Valance Sheet, Comforters,
                  Mattress Protector (without & with Water proof), Bedspread,
                  Curtain, shower Curtain, (Lined/Unlined), Kitchen curtains,
                  cushion covers, Filled cushions, Pillow Ticks, table cloth,
                  napkin, commercial sheeting, Hospital sheeting, Doctor gowns &
                  O.T Sheet. Yarn Dyed fabric.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span class="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Current Supplies:
                </h2>
                <p class="leading-relaxed">
                  Currently we are supplying to UK, Europe, U.S.A, South
                  America, Brazil, Australia, and Morocco, Russia, New Zealand
                  to our various customers and top Chain stores, laundries,
                  hospitals.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span class="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Business Strength:
                </h2>
                <p class="leading-relaxed">
                  No bank financing - owner’s equity - long-term customer’s
                  relationship. We assure you our best services & sharp prices
                  with committed on time deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Certifications
            </h1>
            <p class="leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              illo incidunt maxime quod illum error expedita nihil. Nobis
              libero, quasi blanditiis non asperiores natus temporibus
              cupiditate adipisci tempora quisquam est?
            </p>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">: ISO 9001:2008</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">
                  : Oeko-Tex Standard 100
                </a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">
                  : Sedex Registration
                </a>
              </li>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
