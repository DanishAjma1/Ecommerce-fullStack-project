import React from "react";
import Breadcrumbs from "./breadcrumbs.js";

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
  { name: "UAE", flag: "🇦🇪" }
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
  return (
    <div>
      <div className="flex flex-row border border-b-2">
        <div className="w-1/4 p-5 flex justify-center">
          <div className="bg-indigo-950 p-3 rounded-lg shadow-lg shadow-indigo-950">
            <img src="/icon.png" alt="icon" className="w-8" />
          </div>
          <h1 className="flex font-extrabold text-3xl items-center pl-4">
            The Brand
          </h1>
        </div>
        <div className="flex w-2/4 justify-center items-center">
          <div className="border-2 border-indigo-950 w-5/6 rounded-lg flex flex-row">
            <div className="w-full p-2">
              <input
                type="text"
                placeholder="Search"
                className="w-4/6 py-1 px-3"
              />
            </div>
            <span className="flex-row flex border border-l-2 border-y-0 border-r-0 border-indigo-950">
              <select
                className="bg-transparent mr-5 px-3"
                name="cetagories"
                id="cetagories"
              >
                <option disabled>Cetagory</option>
                <option value={"Cloths"}>Cloths</option>
                <option value={"Shoes"}>Shoes</option>
                <option value={"Bikes"}>Bikes</option>
                <option value={"Jackets"}>Jackets</option>
              </select>
              <div className="bg-indigo-950 justify-center items-center flex">
                <button type="submit" className="text-white  px-6">
                  Submit
                </button>
              </div>
            </span>
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <div className="w-2/3 p-3 rounded-lg flex flex-row justify-evenly">
            <img src="/icon.png" alt="icon" className="w-8" />
            <img src="/icon.png" alt="icon" className="w-8" />
            <img src="/icon.png" alt="icon" className="w-8" />
          </div>
        </div>
      </div>
      <div className="flex p-5 border border-b-2">
        <div className="xl:w-1/2 w-0 justify-end flex">
          <div className="xl:w-5/6 w-0 xl:flex hidden flex-row justify-evenly items-center ">
            <span className="flex flex-row items-center">
              <img src="/icon.png" alt="icon" className="w-8 mr-5" />
              <NavItems value={"All Cetagory"} />
            </span>
            <NavItems value={"Hot Offers"} />
            <NavItems value={"Guft Boxes"} />
            <NavItems value={"Projects"} />
            <NavItems value={"Menu Items"} />
            <NavItems value={"Help"} />
          </div>
          </div>
          <div className="xl:w-1/2 w-full flex xxl:justify-end justify-around">
            <div className="xl:w-4/6 lg:5/6 sm:w-2/3 w-full sm:gap-3 flex xl:justify-between md:justify-evenly sm:justify-around justify-between flex-row items-center">
            <div className="flex w-1/5">
            <p className="md:text-lg text-sm font-semibold">English,</p>
              <select name="Shipping" className="bg-transparent sm:text-lg text-sm  xl:px-2 lg:px-3 md:px-1">
                <option selected hidden value={"#"}>Ship-to</option>
                {countries.map((con) => (
                  <option value={con.value}>{`${con.name} ${con.flag}`}</option>
                ))}
              </select>
              </div>
              <div>
                <select name="Currency" className="bg-transparent sm:p-2 sm:text-lg text-sm ">
                <option selected hidden value={"#"}>Currency</option>
                {currencies.map((cur)=>(
                  <option value={cur.name}>{cur.code+' - '+cur.symbol}</option>
                ))}
                
              </select>
              </div>
            </div>
          </div>
      </div>
      <Breadcrumbs />
    </div>
  );
}
