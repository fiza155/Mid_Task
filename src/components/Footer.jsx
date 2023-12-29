import React from "react";
import logo from "../assets/Storefront.svg";
import textlogo from "../assets/NFT Marketplace.svg";
import discord from "../assets/DiscordLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";

import EnvelopeSimple from "../assets/EnvelopeSimple.svg";
const Footer = () => {
  const obj = [
    { icon: discord },
    { icon: TwitterLogo },
    { icon: YoutubeLogo },
    { icon: InstagramLogo },
  ];
  const obj2 = [
    { name: "Market Place" },
    { name: "Ranking" },
    { name: "Connect A wallet" },
  ];

  return (
    <>
      <section className="bg-[#3B3B3B] flex flex-col lg:flex-row lg:gap-4 lg:justify-around gap-6 p-4 ">
        <div className="flex flex-col gap-4 text-left">
            <div className="flex gap-2 text-white font-bold ">
              <img src={logo} alt="logo" />
            <img src={textlogo} alt="logo" />
          </div>
          <div>
            <p className="text-[#CCC] text-left">
              NFT marketplace UI created<br/>
              with Anima for Figma.
            </p>
          </div>
          <div>
            <p className="text-[#CCCCCC] text-left">Join our community</p>
          </div>
          <div>
            <ul className="flex gap-2 text-[#CCCCCC]">
              {obj &&
                obj.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.icon} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
         
        <div className="flex flex-col gap-4 text-left">
          <ul className="flex flex-col gap-4 justify-start">
            <li className="text-white text-2xl font-mono">Explore</li>
            {obj2 &&
              obj2.map((item, index) => {
                return (
                  <li className="text-[#CCCCCC]" key={index}>
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </div>
        
<div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-white text-left">
            <h1 className="text-2xl font-semibold px-0  font-mono">
              Join Our Weekly Digest
            </h1>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
          </div>
          <div className="flex flex-col gap-4 md:hidden">
            <span className=" text-md  flex items-center  text-black bg-white rounded-full px-4 py-2 ">
              <input className="outline-none" placeholder="Enter you Email" />
            </span>

            <span className="flex text-sm  font-semibold justify-center items-center gap-2 text-[#CCCCCC] bg-[#A259FF] rounded-full px-4 py-3 ">
              <img src={EnvelopeSimple} alt="" />

              <p> Create account</p>
            </span>
          </div>
          <span className="hidden  md:flex relative w-[23rem]">
            <input
              className=" md:block outline-none text-md  flex items-center   w-[30rem] text-black bg-white rounded-2xl px-4 py-4 "
              placeholder="Enter you Email"
            />
            <span className="bg-[#A259FF] right-0 absolute rounded-2xl text-white  px-12 py-4 text-md]  ">
              {" "}
              Subcribe
            </span>
          </span>
        </div>
      </section>

      <div className="border-t-2 bg-[#3B3B3B] p-4 ">
        <p className="text-[#CCCCCC]">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </>
  );
};

export default Footer;