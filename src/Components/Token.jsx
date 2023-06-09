import React from "react";
import Logo from "../assets/logo2.png";

const Token = () => {
  return (
    <section className="py-[50px] relative bg-primary">
      <div className="absolute -top-12  w-full bg-secondary py-3 flex text-center justify-center items-center">
        {/* <marquee behavior="" direction="" className="text-white text-4xl ">
          <p className="capitalize">we are proudly china town!</p>
        </marquee> */}
      </div>
      <div className="container relative grid gap-10 md:grid-cols-2 justify-between items-center">
        <div className="">
          <h1
            className="text-6xl capitalize text-white"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            tokenomics
          </h1>
          <div className="flex flex-col gap-8 mt-10">
            <div
              className="flex flex-col gaps-4"
              data-aos="zoom-out"
              data-aos-easing="linear"
            >
              <h2 className="capitalize text-3xl text-white">total Supply:</h2>
              <p className="mt-5 text-white/80 text-2xl ">100 million</p>
            </div>
            <div
              className="flex flex-col gaps-4"
              data-aos="zoom-out"
              data-aos-easing="linear"
            >
              <h2 className="capitalize text-3xl text-white">tax:</h2>
              <p className="mt-5 text-white/80 text-2xl ">
                0% tax on buys and sells
              </p>
            </div>
            <div
              className="flex flex-col gaps-4"
              data-aos="zoom-out"
              data-aos-easing="linear"
            >
              <h2 className="capitalize text-3xl text-white">No team wallet</h2>
            </div>
            <div className="flex flex-col gaps-4">
              <h2 className="capitalize text-3xl text-white">
                Contract renounced
              </h2>
            </div>
          </div>
        </div>
        <img src={Logo} alt="" data-aos="zoom-in" data-aos-easing="linear" />
      </div>
    </section>
  );
};

export default Token;
