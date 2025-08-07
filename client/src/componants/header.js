import React, { useState } from "react";
import Breadcrumbs from "./breadcrumbs.js";
import CategoriesNav from "./categoriesNav.js";
import BrandIdentification from "./brandIdentification.js";
import ShowmenuPopup from "./menuPopUp.js";
import { useNavigate } from "react-router-dom";

export default function Header({ querySearch, setQuerySearch }) {
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
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex md:flex-row flex-col items-center border border-b-2">
        <div className="lg:w-1/4 md:w-2/5 w-full p-5 flex flex-row items-center md:justify-center">
          <div
            className="bg-white py-3 px-2 rounded-lg shadow-lg mr-4"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            <img src="/menuIcon.png" alt="icon" className="min-w-6 w-6 lg:hidden block" />
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
                value={querySearch}
                className=" w-full md:py-1 md:text-lg text-sm md:px-3 px-1"
                onChange={(e) => {
                  setQuerySearch(e.target.value);
                }}
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
            <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-blue-600 hover:scale-110 transition">
              <img src="/profile.png" alt="icon" className="w-6" />
              <p className="text-xs">profile</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-blue-600 hover:cursor-pointer hover:scale-110 transition">
              <img src="/messages.png" alt="icon" className="w-6" />
              <p className="text-xs">messages</p>
            </div>
            <div
              className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-blue-600 hover:scale-110 transition"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cartitems");
              }}
            >
              <img src="/cart.png" alt="icon" className="w-6" />
              <p className="text-xs">my cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border flex justify-center border-b-2">
        <div className="flex w-10/12">
          <div className="lg:w-4/6 w-2/6 justify-start md:flex hidden flex-row">
            <span
              className="flex lg:w-3/12 flex-row w-full items-center mr-5">
              <img
                src="/menuIcon.png"
                alt="icon"
                className="min-w-8 w-8 mr-2 shadow-md p-1 rounded-sm"
                onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            />
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
                  className="bg-transparent sm:text-lg text-sm pl-1 border-none"
                >
                  <option hidden value={"#"}>
                    Ship-to
                  </option>
                  {countries.map((con,idx) => (
                    <option
                    key={idx}
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
                  <option hidden value={"#"}>
                    Currency
                  </option>
                  {currencies.map((cur,idx) => (
                    <option key={idx} value={cur.name}>
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
