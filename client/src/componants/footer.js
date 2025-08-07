import React from "react";
import { Link } from "react-router-dom";
import BrandIdentification from "./brandIdentification.js";

export default function Footer() {
const countries = [
  { name: "English", flag: "🇺🇸" },     // USA
  { name: "English", flag: "🇬🇧" },     // UK
  { name: "English & French", flag: "🇨🇦" }, // Canada
  { name: "German", flag: "🇩🇪" },
  { name: "French", flag: "🇫🇷" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "English", flag: "🇦🇺" },     // Australia
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Urdu", flag: "🇵🇰" },
  { name: "Arabic", flag: "🇸🇦" },      // Saudi Arabia
  { name: "Japanese", flag: "🇯🇵" },
  { name: "Korean", flag: "🇰🇷" },      // South Korea
  { name: "Mandarin Chinese", flag: "🇨🇳" },
  { name: "Portuguese", flag: "🇧🇷" },
  { name: "Russian", flag: "🇷🇺" },
  { name: "Turkish", flag: "🇹🇷" },
  { name: "Arabic", flag: "🇪🇬" },      // Egypt
  { name: "Zulu & Afrikaans", flag: "🇿🇦" }, // South Africa
  { name: "Arabic", flag: "🇦🇪" }       // UAE
];

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col h-52 text-wrap text-center items-center gap-3 justify-center bg-gray-200 w-full">
          <h2 className="text-xl font-medium">Subscribe on our newsletter</h2>
          <p className="text-lg font-light">
            Get daily news on upcoming offers from any suppliers all over the
            world
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <div className="w-10/12 flex lg:flex-row flex-col">
            <div className="lg:w-2/6 p-5 w-full">
              <div className="flex items-center">
                <BrandIdentification />
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="grid grid-flow-row bg-white rounded-md p-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5">
              <div className="items-center w-full sm:border-r-2 border-t-2 sm:border-t-0 sm:pt-0 pt-3 justify-center flex">
                <div className=" sm:text-start text-center flex flex-col">
                  <h5 className="font-medium">About</h5>
                  <ul>
                    <li>
                      <Link
                        to="/about"
                        className="font-light hover:text-blue-500"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/findStore"
                        className="font-light hover:text-blue-500"
                      >
                        Find store
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/categories"
                        className="font-light hover:text-blue-500"
                      >
                        Categories
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blogs"
                        className="font-light hover:text-blue-500"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center justify-center sm:border-r-2 border-t-2 sm:border-t-0 flex sm:pt-0 pt-3">
                <div className=" sm:text-start text-center flex flex-col">
                  <h5 className="font-medium">About</h5>
                  <ul>
                    <li>
                      <Link
                        to="/about"
                        className="font-light hover:text-blue-500"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/findStore"
                        className="font-light hover:text-blue-500"
                      >
                        Find store
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/categories"
                        className="font-light hover:text-blue-500"
                      >
                        Categories
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blogs"
                        className="font-light hover:text-blue-500"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center justify-center sm:border-r-2 border-t-2 sm:border-t-0 flex sm:pt-0 pt-3">
                <div className="sm:text-start text-center flex flex-col">
                  <h5 className="font-medium">Information</h5>
                  <ul>
                    <li>
                      <Link
                        to="/helpCenter"
                        className="font-light hover:text-blue-500"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/moneyRefund"
                        className="font-light hover:text-blue-500"
                      >
                        Money Refund
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/shipping"
                        className="font-light hover:text-blue-500"
                      >
                        Shipping
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contactUs"
                        className="font-light hover:text-blue-500"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center justify-center sm:border-r-2 border-t-2 sm:border-t-0 flex sm:pt-0 pt-3">
                <div className=" sm:text-start text-center flex flex-col">
                  <h5 className="font-medium">For users</h5>
                  <ul>
                    <li>
                      <Link
                        to="/login"
                        className="font-light hover:text-blue-500"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="font-light hover:text-blue-500"
                      >
                        Register
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/settings"
                        className="font-light hover:text-blue-500"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/myOrders"
                        className="font-light hover:text-blue-500"
                      >
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-center justify-center flex sm:pt-0 pt-3 border-t-2 sm:border-t-0">
                <div className="sm:text-start text-center flex flex-col gap-4">
                  <h5 className="font-medium">Get App</h5>
                  <div className="flex px-2 py-1 flex-row bg-black text-white items-center gap-3 rounded-lg">
                    <div>
                      <img
                        src="/icon.png"
                        alt="icons"
                        className="w-8 p-1 bg-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Download App</span>
                      <h5 className="text-lg font-semibold">App Store</h5>
                    </div>
                  </div>
                  <div className="flex px-2 py-1 flex-row bg-black text-white items-center gap-3 rounded-lg">
                    <div>
                      <img
                        src="/icon.png"
                        alt="icons"
                        className="w-8 bg-white p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Get on</span>
                      <h5 className="text-lg font-semibold">Google play</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center bg-slate-200 justify-center w-full">
            <div className="w-10/12 flex justify-between items-center py-5">
              <p className="text-gray-500">@ 2025 Ecommerce</p>
              <div className="flex gap-3">
                <select name="countries" className="py-3 bg-transparent text-lg">
                  {countries.map((con) => (
                    <option value={con.name}>
                      {con.flag + " " + con.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
