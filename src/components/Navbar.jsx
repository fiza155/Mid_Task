import React from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { GoPerson } from "react-icons/go";
import { AiOutlineShop } from "react-icons/ai";
import Myimage from "../assets/5d353eae4c7b063b0da73eddb78c3a89.png"
import { CiUser } from "react-icons/ci";
import textlogo from "../assets/NFT Marketplace.svg";


const Navbar = () => {
  return (
    <div>
       <nav className="bg-[#2B2B2B] p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
        <AiOutlineShop className='text-purple-400 text-4xl px-1 mr-2'/>
        <img src={textlogo} alt="logo" />
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 space-x-12 px-2 mx-12 ">
          <li className="text-white">Marketplace</li>
          <li className="text-white">Rankings</li>
          <li className="text-white">Connect a Wallet</li>
        </ul>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-xl flex items-center mt-2 md:mt-0">
          <GoPerson /> &nbsp;
            Sign In
        </button>
      </div>
    </nav>


 {/* Hero section */}

    <div className="flex flex-col md:flex-row">
    
      <div className="w-auto md:w-1/2 ">
        <img src={Myimage} alt="Your Image" className="w-full h-full object-cover" />
      </div>

      {/* Right side with Create Account form */}
      <div className="text-xl bg-[#2B2B2B] w-full h-auto md:w-1/2 p-4 md:p-8 align-baseline mt-4 px-7 md:mt-0 text-left ">
  
        <h1 className="text-white text-4xl font-bold mb-4">Create Account</h1>
        <p className="text-white mb-6 text-left">
          Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Fusce commodo, odio.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder=  "Username"
              className="w-60 p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-60 p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-60 p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-60 p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white  w-60
             p-2 border-spacing-3 rounded-full px-4 py-2 focus:outline-none hover:bg-purple-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Navbar
