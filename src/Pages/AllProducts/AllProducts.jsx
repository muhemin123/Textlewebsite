import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import PRoductSlide from "./PRoductSlide.png";
// import Rebain from "./ProductImage/Rebain.png";
// import Bat from "./ProductImage/Bat.png";
// import Bat1 from "./ProductImage/Bat1.png";
// import Bat2 from "./ProductImage/Bat2.png";
// import Towel from "./ProductImage/Towel.png";
// import TowelTShite1 from "./ProductImage/TowelTShite1.png";
import Bat3 from "./ProductImage/Bat3.png";
import CusionBat from "./ProductImage/CusionBat.png";

import TowelTShite from "./ProductImage/TowelTShite.png";
import commercialSheeting from "./ClassicTextileimages/commercialSheeting.png";
import curtain from "./ClassicTextileimages/curtain.png";
import cushionCovers from "./ClassicTextileimages/cushionCovers.png";
import doctorgowns from "./ClassicTextileimages/doctorgowns.png";
import duvetcoverset from "./ClassicTextileimages/duvetcoverset.png";
import fabrics from "./ClassicTextileimages/fabrics.png";
import filledCushions from "./ClassicTextileimages/filledCushions.png";
import fittedsheet from "./ClassicTextileimages/fittedsheet.png";
import flatsheet from "./ClassicTextileimages/flatsheet.png";
import hospitalsheeting from "./ClassicTextileimages/hospitalsheeting.png";
import kitchenCurtains from "./ClassicTextileimages/kitchenCurtains.png";
import madeuossheets from "./ClassicTextileimages/madeuossheets.png";
import mattressProtector from "./ClassicTextileimages/mattressProtector.png";
import metallicYarn from "./ClassicTextileimages/metallicYarn.png";
import napkin from "./ClassicTextileimages/napkin.png";
import nylonFilamentYarn from "./ClassicTextileimages/nylonFilamentYarn.png";
import otSheet from "./ClassicTextileimages/otSheet.png";
import pillowTicks from "./ClassicTextileimages/pillowTicks.png";
import PolyesterFabrics from "./ClassicTextileimages/Polyester Fabrics.png";
import PolyesterStaple from "./ClassicTextileimages/Polyester Staple Fiber.png";
import polyesterYarn from "./ClassicTextileimages/polyesterYarn.png";
import PureSilk from "./ClassicTextileimages/Pure Silk Yarn.png";
import shower from "./ClassicTextileimages/shower curtain.png";
import tableCloths from "./ClassicTextileimages/tableCloths.png";
import twill from "./ClassicTextileimages/twill.png";
import valanceSheet from "./ClassicTextileimages/valanceSheet.png";
import yarn from "./ClassicTextileimages/yarn.png";
import yarnDiedFabric from "./ClassicTextileimages/yarnDiedFabric.png";

export default function AllProducts(params) {
  let [items, setitems] = useState(0);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentTab = searchParams.get("tab") || "0";

  // const changeTab = (tab) => {
  //   searchParams.set("tab", tab);
  //   setSearchParams(searchParams);
  // };

  const allImages = [
    { url: commercialSheeting, name: "Commercial Sheeting" },
    { url: nylonFilamentYarn, name: "Nylon Filament Yarn" },
    { url: mattressProtector, name: "Mattress Protector" },
    { url: PolyesterFabrics, name: "Polyester Fabrics" },
    { url: hospitalsheeting, name: "Hospital Sheeting" },
    { url: kitchenCurtains, name: "Kitchen Curtains" },
    // { url: PolyesterStaple, name: "Polyester Staple" },
    // { url: filledCushions, name: "Filled Cushions" },
    // { url: yarnDiedFabric, name: "Yarn Died Fabric" },
    // { url: polyesterYarn, name: "polyesterYarn" },
    // { url: cushionCovers, name: "cushionCovers" },
    // { url: duvetcoverset, name: "duvetcoverset" },
    // { url: madeuossheets, name: "madeuossheets" },
    // { url: metallicYarn, name: "metallicYarn" },
    // { url: valanceSheet, name: "valanceSheet" },
    // { url: pillowTicks, name: "pillowTicks" },
    // { url: tableCloths, name: "tableCloths" },
    // { url: doctorgowns, name: "doctorgowns" },
    // { url: fittedsheet, name: "fittedsheet" },
    // { url: flatsheet, name: "flatsheet" },
    // { url: PureSilk, name: "PureSilk" },
    // { url: curtain, name: "curtain" },
    // { url: fabrics, name: "fabrics" },
    // { url: otSheet, name: "otSheet" },
    // { url: napkin, name: "napkin" },
    // { url: shower, name: "shower" },
    // { url: twill, name: "twill" },
    // { url: yarn, name: "yarn" },
  ];

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
      <section
        className="header relative pt-16 items-center flex h-screen"
        style={{ maxHeight: "860px" }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 md:mt-8 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-slate-600">
                Lorem ipsum dolor sit consectetur.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                dolores velit minima sint quia aperiam assumenda ab voluptatibus
                distinctio accusantium. Aliquid ea porro corporis sint eos
                dolores perferendis voluptates optio.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-8/6"
          src={PRoductSlide}
          alt="..."
          id="ImagSlider"
          // style={{ maxHeight: "800px" }}
        />
      </section>

      <section className="text-gray-600 body-font" id="ProdutOffer">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Products We Offer
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                We regularly producing and supplying. Fabrics and madeup’s
                finished upto 300 cm, Twill, Made ups Sheet Set, Duvet Cover
                set, Flat Sheet, Fitted Sheet, Valance Sheet, Comforters,
                Mattress Protector (without & with Water proof), Bedspread,
                Curtain, shower Curtain, (Lined/Unlined), Kitchen curtains,
                cushion covers, Filled cushions, Pillow Ticks, table cloth,
                napkin, commercial sheeting, Hospital sheeting, Doctor gowns &
                O.T Sheet. Yarn Dyed fabric.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <ul
                id="portfolio-flters"
                style={{ marginTop: "15%", marginBottom: "8%" }}
              >
                <li
                  data-filter="*"
                  className={items === 0 ? "filter-active" : ""}
                  onClick={() => setitems(0)}
                >
                  Polyester & Nylon Filament Yarn
                </li>
                <li
                  data-filter=".filter-app"
                  className={items === 1 ? "filter-active" : ""}
                  onClick={() => setitems(1)}
                >
                  Metallic Yarn
                </li>
                <li
                  data-filter=".filter-card"
                  className={items === 2 ? "filter-active" : ""}
                  onClick={() => setitems(2)}
                >
                  Polyester Staple Fiber
                </li>
                <li
                  data-filter=".filter-card"
                  className={items === 3 ? "filter-active" : ""}
                  onClick={() => setitems(3)}
                >
                  Polyester Fabrics
                </li>
                <li
                  data-filter=".filter-card"
                  className={items === 4 ? "filter-active" : ""}
                  onClick={() => setitems(4)}
                >
                 Pure Silk Yarn
                </li>
              </ul>
            </div>

            {items == 0 ? (
              <>
                {allImages.map((v, i) => {
                  console.log(v);
                  return (
                    <div className="lg:w-1/3 md:w-1/2 p-4 w-42 " key={i}>
                      <a
                        className="block relative h-42 rounded overflow-hidden"
                        id="grow"
                      >
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-42 block"
                          src={v.url}
                        />
                      </a>
                      <div class="block w-full  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <ul class="w-full">
                          <li class="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
                            {v.name}
                          </li>
                          <li class="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
                            Price: To be provided on call
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-42 block"
                      src={Bat}
                    />
                  </a>
                </div>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-42">
                  <a className="block relative h-42 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-42 block"
                      src={Bat1}
                    />
                  </a>
                </div>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-42 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-42 block"
                      src={Bat2}
                    />
                  </a>
                </div> */}

                {/* <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={Bat3}
                    />
                  </a>
                </div>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={Towel}
                    />
                  </a>
                </div>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/601x361"
                    />
                  </a>
                </div> */}
              </>
            ) : items === 1 ? (
              <>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={Bat3}
                    />
                  </a>
                </div>
              </>
            ) : items === 2 ? (
              <>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={CusionBat}
                    />
                  </a>
                </div>
              </>
            ) : items === 3 ? (
              <>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a className="block relative h-full rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={TowelTShite}
                    />
                  </a>
                </div>
              </>
            ) : (
              <></>
            )}
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
