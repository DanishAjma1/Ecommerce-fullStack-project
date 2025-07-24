import React from "react";

export default function Home() {
  const TimeDiv = ({ heading, subHeading }) => {
    return (
      <div>
        <div className="text-[15px] font-extrabold w-12 px-3 py-1 rounded-md flex text-white bg-black opacity-75 justify-center items-center">
          <p className="flex flex-col">
            {heading}
            <span className="text-sm font-light">{subHeading}</span>
          </p>
          <br />
        </div>
      </div>
    );
  };
  const SaleItemDiv = ({ heading, subHeading }) => {
    return (
      <div className="w-1/5 flex flex-col justify-center items-center p-5 border-r-2">
        <img src="/watch.jpg" alt="watch" className="rounded-md" />
        <p className="text-lg my-3">{heading}</p>
        <p className="text-sm py-1 px-3 text-red-800 rounded-3xl bg-red-200">
          {subHeading}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex px-1 py-5 gap-3 w-10/12 bg-gray-100 shadow-lg my-5 rounded-lg h-[60vh]">
          <div className="w-3/12 justify-start flex ">
            <div className="w-full ml-3">
              <ul className="ml-3 text-lg p-3 items-center hover:cursor-pointer">
                <li className="p-2 active:bg-slate-400 hover:cursor-pointer not-active:bg-white">
                  Automobiles
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Clothes and wear
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Home interiors
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Computer and tech
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Tools, equipments
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Sports and outdoor
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Animal and pets
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  Machinery tools
                </li>
                <li className="p-2 active:bg-slate-400 not-active:bg-white">
                  More category
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 flex gap-3 flex-row">
            <div className="w-9/12 relative">
              <div className="w-full flex bg-center">
                <img
                  src="/shopingDashboardPic.jpg"
                  alt="womenShopping"
                  className="absolute h-[55vh] w-full rounded-md"
                />
              </div>
              <div className="relative ml-12 flex mt-10 flex-col w-2/4">
                <h2 className="text-2xl">Latest trending</h2>
                <h1 className="text-3xl text-white font-bold">
                  Electronic items
                </h1>
                <button className="text-lg bg-white mt-5 py-2 w-40 ">
                  Learn more
                </button>
              </div>
            </div>
            <div className="bg-slate-300 rounded-md">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row m-5">
                  <img src="/icon.png" alt="icon" className="w-8 mr-5" />
                  <p>
                    Hi,user
                    <br />
                    let's get started
                  </p>
                </div>
                <button className="bg-indigo-950 mx-5 mb-2 text-white rounded-md px-3 py-1">
                  {" "}
                  join now
                </button>
                <button className="bg-white rounded-md mx-5 text-indigo-950 px-3 py-1">
                  {" "}
                  Log in
                </button>
              </div>
              <div className="mt-3 bg-orange-400 rounded-md">
                <p className="p-3">
                  Get US $10 off
                  <br />
                  with a new
                  <br />
                  supplier
                </p>
              </div>
              <div className="mt-3 bg-yellow-300 rounded-md">
                <p className="p-3">
                  Send Qoutes with
                  <br />
                  supplier
                  <br />
                  prefernces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <div className="w-10/12 flex flex-row bg-gray-100 rounded-md">
          <div className="w-1/5  border-r-2">
            <div className="p-2">
              <div className="pl-3 pt-5">
                <h1 className="text-xl font-extrabold">Deals and offers</h1>
                <p>Hygiene equipments</p>
              </div>
              {/* time of offers */}
              <div className="flex flex-row justify-evenly mt-5">
                <TimeDiv heading={"04"} subHeading={"Days"} />
                <TimeDiv heading={"13"} subHeading={"hour"} />
                <TimeDiv heading={"34"} subHeading={"min"} />
                <TimeDiv heading={"56"} subHeading={"sec"} />
              </div>
            </div>
          </div>
          <div className="w-4/5 flex flex-row">
            <SaleItemDiv heading={"Smart watches"} subHeading={"-25%"} />
            <SaleItemDiv heading={"Smart watches"} subHeading={"-23%"} />
            <SaleItemDiv heading={"Smart watches"} subHeading={"-34%"} />
            <SaleItemDiv heading={"Smart watches"} subHeading={"-24%"} />
            <SaleItemDiv heading={"Smart watches"} subHeading={"-50%"} />
          </div>
        </div>
      </div>
    </div>
  );
}
