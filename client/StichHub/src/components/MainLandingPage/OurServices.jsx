import React from "react";
import { forcustomers, fortailors } from "../../assets/MainLandingPage/Icons";

const OurServices = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative p-20 ml-20 mr-20">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex">
          <span className="text-left text-6xl  font-semibold">
            OUR <br /> SERVICES
          </span>
        </div>

        {/* Card Containers */}
        <div id="cardContainer" className="flex p-10 mt-6 justify-evenly">
          {/* Customer Card */}
          <div id="customerCard" className="">
            <div id="customerCardTitle" className="">
              <span className="">FOR CUSTOMERS</span>
            </div>
            <div
              id="customerCardContentBG"
              className="absolute opacity-40 bg-black w-[350px] h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap"
            ></div>
            <div
              id="customerCardContent"
              className="w-[350px] h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap"
            >
              <img src={forcustomers} className="w-[150px]" />
              <p className="text-base p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.sit
                amet consectetur, adipisicing elit.{" "}
              </p>
              <button className="p-4 bg-white text-black rounded-3xl text-lg font-medium m-5 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Tailor Card */}
          <div id="tailorCard" className="">
            <div id="tailerCardTitle" className="">
              <span className="">FOR TAILORS</span>
            </div>
            <div
              id="customerCardContentBG"
              className="absolute opacity-40 bg-black w-[350px] h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap"
            ></div>
            <div
              id="tailerCardContent"
              className="w-[350px] h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap"
            >
              <img src={fortailors} className="h-[100px] m-6" />
              <p className="text-base p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.sit
                amet consectetur, adipisicing elit.{" "}
              </p>
              <button className="p-4 bg-white text-black rounded-3xl text-lg font-medium m-5 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[670px] h-[570px] top-[220px] left-[475px] z-0 blur-xl"></div>
      
    </div>
  );
};

export default OurServices;