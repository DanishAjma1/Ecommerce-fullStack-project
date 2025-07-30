import React, { useState } from "react";
import Breadcrumbs from "./breadcrumbs.js";
import CategoriesNav from "./categoriesNav.js";
import BrandIdentification from "./brandIdentification.js";
import MenuPopUp from "./menuPopUp.js";
import { Link } from "react-router-dom";

export default function Header() {
  const NavItems = ({ value }) => {
    return <h2 className="text-[16px] font-semibold">{value}</h2>;
  };
  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "India", flag: "🇮🇳" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Saudia", flag: "🇸🇦" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "S.Korea", flag: "🇰🇷" },
    { name: "China", flag: "🇨🇳" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "S.Africa", flag: "🇿🇦" },
    { name: "UAE", flag: "🇦🇪" },
  ];

  const currencies = [
    { name: "United States Dollar", code: "USD", symbol: "$" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "British Pound", code: "GBP", symbol: "£" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Australian Dollar", code: "AUD", symbol: "$" },
    { name: "Saudi Riyal", code: "SAR", symbol: "﷼" },
    { name: "Emirati Dirham", code: "AED", symbol: "د.إ" },
    { name: "Swiss Franc", code: "CHF", symbol: "CHF" },
    { name: "Russian Ruble", code: "RUB", symbol: "₽" },
    { name: "Turkish Lira", code: "TRY", symbol: "₺" },
    { name: "South Korean Won", code: "KRW", symbol: "₩" },
    { name: "Egyptian Pound", code: "EGP", symbol: "£" },
    { name: "Brazilian Real", code: "BRL", symbol: "R$" },
    { name: "South African Rand", code: "ZAR", symbol: "R" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const ShowmenuPopup = () => {
    return (
      <div className="absolute left-0 pb-5 top-0 w-10/12 bg-white border transition text-black border-gray-300 rounded-md shadow-lg z-50">
        <div className="py-3 px-2 rounded-lg shadow-lg mr-4 gap-4 flex flex-col w-fit m-2">
          <img src="/icon.png" alt="icon" className="min-w-8 w-8" />
        </div>
        <div className="p-3 mt-5 h-28 bg-slate-200 justify-center flex flex-col gap-2">
          <div className="bg-white w-fit p-2 rounded-full items-center flex justify-center">
            <img src="/icon.png" alt="icon" className="min-w-8 w-8" />
          </div>
          <p className="">Signin | Register</p>
        </div>
        <ul className="py-1">
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/cartitems" className="hover:text-gray-300">Cart Items</Link>
          </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/dashboard" className="hover:text-gray-300">Home</Link>
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/products" className="hover:text-gray-300">Products</Link>
            </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/products/1" className="hover:text-gray-300">Any Item</Link>
            </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My orders
            </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              English | USD
            </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Contact us
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            About
          </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            User agreement
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Partenership
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Privacy Policy
          </li>
          </div>
        </ul>
      </div>
    );
  };
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center border border-b-2">
        <div className="lg:w-1/4 md:w-2/5 w-full p-5 flex flex-row items-center md:justify-center">
          <div
            className="bg-white py-3 px-2 rounded-lg shadow-lg mr-4 lg:hidden block"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            <img src="/icon.png" alt="icon" className="min-w-8 w-8" />
            {isOpen && <ShowmenuPopup />}
          </div>
          <BrandIdentification />
        </div>
        <div className="flex lg:w-2/4 md:w-3/5 w-5/6  md:p-0 py-3 justify-center items-center">
          <div className="border-2 border-indigo-950 w-5/6 rounded-lg flex flex-row overflow-hidden">
            <div className="w-full p-1">
              <input
                type="text"
                placeholder="Search"
                className=" w-full md:py-1 md:text-lg text-sm md:px-3 px-1"
              />
            </div>
            <span className="flex-row flex border border-l-2 border-y-0 border-r-0 border-indigo-950">
              <select
                className="bg-transparent lg:block md:hidden sm:block hidden  mr-5 px-3"
                name="cetagories"
                id="cetagories"
              >
                <option disabled>Cetagory</option>
                <option value={"Cloths"}>Cloths</option>
                <option value={"Shoes"}>Shoes</option>
                <option value={"Bikes"}>Bikes</option>
                <option value={"Jackets"}>Jackets</option>
              </select>
              <div className="bg-indigo-950 justify-center md:text-lg text-sm items-center flex">
                <button type="submit" className="text-white px-3 md:px-6">
                  Submit
                </button>
              </div>
            </span>
          </div>
        </div>
        <div className="w-1/4 lg:flex hidden justify-center items-center">
          <div className="w-2/3 p-3 rounded-lg flex flex-row justify-evenly">
            <img src="/icon.png" alt="icon" className="w-8" />
            <img src="/icon.png" alt="icon" className="w-8" />
            <img src="/icon.png" alt="icon" className="w-8" />
          </div>
        </div>
      </div>
      <div className="p-5 border flex justify-center border-b-2">
        <div className="flex w-10/12">
          <div className="lg:w-4/6 w-2/6 justify-start md:flex hidden flex-row">
            <span className="flex lg:w-3/12 flex-row w-full items-center mr-5">
              <img src="/icon.png" alt="icon" className="w-8 mr-2" />
              <NavItems value={"All Cetagory"} />
            </span>
            <div className="lg:w-5/6 lg:flex hidden gap-2 flex-row xl:justify-around justify-between items-center ">
              <NavItems value={"Hot Offers"} />
              <NavItems value={"Guft Boxes"} />
              <NavItems value={"Projects"} />
              <NavItems value={"Menu Items"} />
              <NavItems value={"Help"} />
            </div>
          </div>
          <div className="lg:w-2/6 md:w-4/6 w-full flex lg:justify-around justify-end">
            <div className="lg:w-5/6  w-full sm:gap-3 flex xl:justify-between md:justify-around sm:justify-around justify-between flex-row items-center">
              <div className="flex w-4/5">
                <p className="sm:text-lg text-sm font-semibold">English,</p>
                <select
                  name="Shipping"
                  className="bg-transparent sm:text-lg text-sm pl-1"
                >
                  <option selected hidden value={"#"}>
                    Ship-to
                  </option>
                  {countries.map((con) => (
                    <option
                      value={con.value}
                    >{`${con.name} ${con.flag}`}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <select
                  name="Currency"
                  className="bg-transparent sm:p-2 sm:text-lg text-sm "
                >
                  <option selected hidden value={"#"}>
                    Currency
                  </option>
                  {currencies.map((cur) => (
                    <option value={cur.name}>
                      {cur.code + " - " + cur.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <CategoriesNav />
      </div>
      <Breadcrumbs />
    </div>
  );
}
