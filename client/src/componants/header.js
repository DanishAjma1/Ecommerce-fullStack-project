import React from "react";

export default function Header() {
  const NavItems = ({ value }) => {
    return <h2 className="text-[16px] font-semibold">{value}</h2>;
  };
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
        <div className="w-1/2 justify-end flex">
          <div className="w-5/6 flex flex-row justify-evenly items-center ">
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
          <div className="w-1/2 flex justify-end">
            <div className="xl:w-4/6 lg:5/6 w-full flex justify-evenly flex-row items-center">
            <div className="flex w-1/5">
            <p className="text-lg font-semibold">English,</p>
              <select name="Currency" className="bg-transparent xl:px-2 lg:px-3 px-1">
                <option value={"#"}>USD-dollor</option>
                <option value={"#"}>Pk-rupee</option>
                <option value={"#"}>Riyal</option>
                <option value={"#"}>Pound</option>
              </select>
              </div>
              <div>
                <select name="Shipping" className="bg-transparent p-2">
                <option selected hidden value={"#"}>Ship-to</option>
                <option value={"#"}>Germany</option>
                <option value={"#"}>Pakistan</option>
                <option value={"#"}>Saudia</option>
                <option value={"#"}>Qatar</option>
              </select>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
