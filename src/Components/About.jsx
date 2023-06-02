import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full text-white">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-14">
        <div className="order-2 md:order-1">
          <img src={logo} alt="" className="w-full" />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <h1
            className="text-4xl break-all text-white  capitalize w-max"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            about chinese pepe
          </h1>

          <p
            data-aos="fade-left"
            data-aos-easing="linear"
            className="leading-relaxed mt-5 tracking-wider"
          >
            Welcome to CHEPE (CP), the most hilarious and light-hearted
            cryptocurrency project inspired by Chinese Pepe, the comical frog.
            With a token supply of 100 million, zero tax on buys and sells, and
            a commitment to transparency, CHEPE aims to bring laughter and joy
            to the crypto community. This simple whitepaper outlines the vision,
            tokenomics, and roadmap of CHEPE, ensuring a ribbiting adventure for
            all.
          </p>
          <p
            className="leading-relaxed mt-5 tracking-wider"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            Welcome to the whimsical world of CHEPE! Inspired by the antics of
            Chinese Pepe, our project is all about bringing laughter and joy to
            the crypto space. We believe in the power of humor to create a
            vibrant and inclusive community. Get ready to hop on board and join
            us in this ribbiting journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
