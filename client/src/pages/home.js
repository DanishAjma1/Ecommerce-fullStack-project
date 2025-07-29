import React from "react";

const countries = [
  { name: "USA", flag: "🇺🇸", desc: "Leading global economy and innovation" },
  { name: "UK", flag: "🇬🇧", desc: "Historic power with strong culture" },
  { name: "Canada", flag: "🇨🇦", desc: "Peaceful nation with natural beauty" },
  {
    name: "Germany",
    flag: "🇩🇪",
    desc: "Engineering, cars, and strong economy",
  },
  { name: "France", flag: "🇫🇷", desc: "Art, fashion, wine, and romance" },
  { name: "Italy", flag: "🇮🇹", desc: "Ancient heritage and delicious food" },
  { name: "Spain", flag: "🇪🇸", desc: "Passionate culture, food, and history" },
  {
    name: "Australia",
    flag: "🇦🇺",
    desc: "Nature, beaches, and friendly people",
  },
  {
    name: "India",
    flag: "🇮🇳",
    desc: "Diverse culture with ancient traditions",
  },
  { name: "Pakistan", flag: "🇵🇰", desc: "Rich culture and natural landscapes" },
  { name: "Saudia", flag: "🇸🇦", desc: "Islamic center and oil-rich nation" },
  {
    name: "Japan",
    flag: "🇯🇵",
    desc: "Technology, discipline, and ancient customs",
  },
  { name: "S.Korea", flag: "🇰🇷", desc: "Tech, K-pop, and cultural pride" },
  { name: "China", flag: "🇨🇳", desc: "Fast-growing global economic leader" },
  {
    name: "Brazil",
    flag: "🇧🇷",
    desc: "Carnival, football, and Amazon rainforest",
  },
  { name: "Russia", flag: "🇷🇺", desc: "Vast land with global influence" },
  { name: "Turkey", flag: "🇹🇷", desc: "Cultural bridge between continents" },
  { name: "Egypt", flag: "🇪🇬", desc: "Ancient pyramids and desert beauty" },
  {
    name: "S.Africa",
    flag: "🇿🇦",
    desc: "Wildlife, diversity, and rich history",
  },
  { name: "UAE", flag: "🇦🇪", desc: "Modern cities and desert luxury" },
];

const images = [
  "shirt.jpg",
  "watch.jpg",
  "watch.jpg",
  "watch.jpg",
  "watch.jpg",
  "watch.jpg",
  "watch.jpg",
  "watch.jpg",
];
export default function Home() {
  const ExtraServices = () => {
    return (
      <div className="min-w-40 max-w-60 w-full md:w-auto rounded-lg justify-self-center bg-white overflow-hidden shadow hover:shadow-lg transition">
        <div className="relative h-36">
          <img
            src="/shipping.jpg"
            alt="Industry Hubs"
            className="w-full h-32"
          />
          <div className="absolute bottom-0 right-2 bg-blue-100 p-2 rounded-full hover:scale-110 transition">
            <img src="/icon.png" alt="nothing" className="w-6 h-6 text-black" />
          </div>
        </div>
        <div className="p-3 bg-white">
          <h3 className="text-lg font-medium text-gray-800">
            Source from
            <br />
            Industry Hubs
          </h3>
        </div>
      </div>
    );
  };
  const SupplierRegion = ({ con }) => {
    return (
      <div key={con.id} className="p-4 flex flex-col">
        <div className="flex gap-2">
          <p>{con.flag}</p>
          <h1 className="text-lg font-bold">{con.name}</h1>
        </div>
        <p className="lg:block hidden text-sm">{con.desc}</p>
      </div>
    );
  };
  const GridPicsDesign = () => {
    return (
      <div className="flex flex-col text-black justify-center shadow-md items-center p-5 rounded-lg bg-white">
        <img src="/shirt.jpg" alt="shirt" className="h-52" />
        <div className="mt-5 flex text-center xl:text-start flex-col">
          <h1 className="text-lg font-bold">$10.30</h1>
          <p className="text-gray-400">T-shirt with mutiple colors,for men</p>
        </div>
      </div>
    );
  };
  const TimeDiv = ({ heading, subHeading }) => {
    return (
      <div>
        <div className="md:text-[15px] text-sm sm:font-extrabold md:w-12 w-10 px-3 py-1 rounded-md flex text-white bg-black opacity-75 justify-center items-center">
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
      <div className="min-w-1/5 flex flex-col justify-center items-center p-5 border-r-2">
        <img src="/watch.jpg" alt="watch" className="rounded-md min-w-24" />
        <p className="text-lg my-3">{heading}</p>
        <p className="text-sm py-1 px-3 text-red-800 rounded-3xl bg-red-200">
          {subHeading}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="px-1 py-5 gap-3 md:w-10/12 md:flex hidden bg-gray-100 shadow-lg my-5 rounded-lg h-[60vh]">
          {/* Cetagory List */}
          <div className="lg:w-3/12 md:w-4/12 justify-start flex ">
            <div className="w-full ml-3 overflow-y-auto text-wrap overflow-scroll  ">
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
          {/* shopingDashboardPic & userInfo */}
          <div className="lg:w-9/12 md:w-4/6 flex gap-3 flex-row">
            {/* shopingDashboardPic */}
            <div className="lg:w-9/12 md:w-full relative">
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
            {/* userInfo */}
            <div className="lg:w-3/12 w-0 bg-slate-300 overflow-x-auto overflow-y-auto overflow-scroll rounded-md">
              <div className="flex flex-col justify-center min-w-52">
                <div className="flex flex-row m-5">
                  <img
                    src="/icon.png"
                    alt="icon"
                    className="min-w-8 w-8 mr-5"
                  />
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
              <div className="m-3 bg-orange-400 rounded-md">
                <p className="p-3">
                  Get US $10 off
                  <br />
                  with a new
                  <br />
                  supplier
                </p>
              </div>
              <div className="m-3 bg-yellow-300 rounded-md">
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
      <div className="flex justify-center bg-gray-50">
        <div className="w-10/12 flex flex-col">
          {/* Deals and offers line */}
          <div className="w-full my-5">
            <div className="flex xl:flex-row flex-col bg-gray-100 overflow-hidden shadow-md rounded-md">
              <div className="xl:w-1/5 flex justify-center  items-center border-r-2">
                <div className="p-2 flex xl:w-full md:w-3/4 w-full xl:flex-col flex-row justify-between">
                  <div className="pl-3 pt-5">
                    <h1 className="sm:text-xl text-md font-extrabold">
                      Deals and offers
                    </h1>
                    <p className="sm:text-lg text-sm">Hygiene equipments</p>
                  </div>
                  {/* time of offers */}
                  <div className="flex flex-row xl:justify-evenly gap-1 mt-5">
                    <TimeDiv heading={"04"} subHeading={"Days"} />
                    <TimeDiv heading={"13"} subHeading={"hour"} />
                    <TimeDiv heading={"34"} subHeading={"min"} />
                    <TimeDiv heading={"56"} subHeading={"sec"} />
                  </div>
                </div>
              </div>
              <div className="xl:w-4/5 w-full overflow-y-scroll flex flex-row">
                <SaleItemDiv heading={"Smart watches"} subHeading={"-25%"} />
                <SaleItemDiv heading={"Smart watches"} subHeading={"-23%"} />
                <SaleItemDiv heading={"Smart watches"} subHeading={"-34%"} />
                <SaleItemDiv heading={"Smart watches"} subHeading={"-24%"} />
                <SaleItemDiv heading={"Smart watches"} subHeading={"-50%"} />
              </div>
            </div>
          </div>
          {/* gridpics two times */}
          <div className="my-5 w-full shadow-md overflow-hidden rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-7">
              {/* Large screen left image with text */}
              <div className="hidden lg:block col-span-2 relative">
                <img
                  src="/watch.jpg"
                  alt="Featured Watch"
                  className="w-full h-full object-cover rounded-l-md"
                />
                <div className="absolute top-10 gap-2 flex flex-col items-start w-2/3 left-6 text-white z-10">
                  <h2 className="text-2xl font-bold">Home and outdoor</h2>
                  <button className="text-lg bg-white px-3 py-2 opacity-80 rounded-md text-black">
                    Best Seller
                  </button>
                </div>
              </div>

              {/* Text for small screens */}
              <div className="lg:hidden px-4 py-2">
                <h2 className="text-xl font-bold">Home and outdoor</h2>
              </div>

              {/* Grid of product images */}
              <div className="relative lg:col-span-5 lg:p-0 p-2 lg:gap-0 items-center overflow-y-scroll flex lg:grid lg:grid-cols-4">
                {images.map((img, idx) => (
                  <div className="py-2 lg:p-0 relative lg:h-full border-2 lg:items-center flex">
                    <div className="relative flex flex-col lg:gap-0 gap-3 lg:flex-row lg:justify-between lg:w-full lg:p-2 items-start">
                      <div className="flex flex-col order-2 lg:order-none lg:w-1/2 justify-start px-1">
                        <h6 className="xl:text-md text-sm">Soft chairs</h6>
                        <p className="text-xs md:text-sm text-gray-600">
                          From USD 19
                        </p>
                      </div>
                      <img
                        key={idx}
                        src={img}
                        alt={`watch${idx}`}
                        className="min-w-32 min-h-28 order-1 lg:order-none lg:min-w-8 lg:min-h-8 relative lg:w-1/2 h-20 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-5 w-full shadow-md overflow-hidden rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-7">
              {/* Large screen left image with text */}
              <div className="hidden lg:block col-span-2 relative">
                <img
                  src="/watch.jpg"
                  alt="Featured Watch"
                  className="w-full h-full object-cover rounded-l-md"
                />
                <div className="absolute top-6 w-2/3 left-6 text-white z-10 gap-2 flex flex-col items-start">
                  <h2 className="text-2xl font-bold">
                    Consumer electronic and gadgets
                  </h2>
                  <button className="text-lg bg-white px-3 py-2 opacity-90 rounded-md text-black">
                    Source now
                  </button>
                </div>
              </div>

              {/* Text for small screens */}
              <div className="lg:hidden px-4 py-2">
                <h2 className="text-xl font-bold">
                  Consumer electronic and gadgets
                </h2>
              </div>

              {/* Grid of product images */}
              <div className="relative lg:col-span-5 lg:p-0 p-2 lg:gap-0 items-center overflow-y-scroll flex lg:grid lg:grid-cols-4">
                {images.map((img, idx) => (
                  <div className="py-2 lg:p-0 relative lg:h-full border-2 lg:items-center flex">
                    <div className="relative flex flex-col lg:gap-0 gap-3 lg:flex-row lg:justify-between lg:w-full lg:p-2 items-start">
                      <div className="flex flex-col order-2 lg:order-none lg:w-1/2 justify-start px-1">
                        <h6 className="xl:text-md text-sm">Soft chairs</h6>
                        <p className="text-xs md:text-sm text-gray-600">
                          From USD 19
                        </p>
                      </div>
                      <img
                        key={idx}
                        src={img}
                        alt={`watch${idx}`}
                        className="min-w-32 min-h-28 order-1 lg:order-none lg:min-w-8 lg:min-h-8 relative lg:w-1/2 h-20 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* supplier inquiry */}
          <div className="relative my-5 shadow-md overflow-hidden rounded-md">
            <div className="w-full flex bg-center">
              <img
                src="/shopingDashboardPic.jpg"
                alt="womenShopping"
                className="absolute h-[55vh] w-full bg-blend-overlay inset-1 object-cover bg-center"
              />
            </div>
            <div className="bg-blue-700 opacity-85 relative h-full w-full p-3 flex flex-row text-white">
              <div className="w-2/5 flex-col md:flex hidden text-wrap ml-10 mt-10 p-3">
                <h1 className="lg:text-4xl text-2xl font-bold">
                  An easy way to send requests to all suppliers
                </h1>
                <p className="lg:text-lg text-md">
                  {" "}
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="md:w-3/5 w-full justify-center flex items-center">
                <div className="md:w-2/3 justify-center flex items-center">
                    <form className="lg:gap-5 gap-2 flex xl:text-lg text-black lg:text-md text-sm flex-col lg:p-8 p-6 bg-white rounded-lg">
                      <h2 className="text-2xl">
                        Send qoute to suppliers
                      </h2>
                      <input
                        type="text"
                        placeholder="What item you need?"
                        className="p-2 w-full rounded-lg border-2"
                      />

                      <textarea
                        rows={2}
                        placeholder="What item you need?"
                        className="p-2 w-full rounded-lg border-2"
                      />
                      <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 text-black">
                        <input
                          type="text"
                          placeholder="What item you need?"
                          className="p-2 w-full rounded-lg border-2"
                        />
                        <select name="quantity" className="p-2 bg-white border-2 rounded-lg">
                          <option>Select quantity</option>
                          <option value={1}>1</option>
                          <option value={1}>2</option>
                          <option value={1}>3</option>
                          <option value={1}>4</option>
                          <option value={1}>5</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-700 w-fit text-white px-3 py-2 rounded-lg"
                      >
                        Send inquiry
                      </button>
                    </form>
                </div>
              </div>
            </div>
          </div>
          {/* grid Pics */}
          <div className="my-5">
            <h1 className="text-2xl font-bold">Recommended items</h1>
          </div>
          <div className="grid grid-flow-row bg-white rounded-md p-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5 xl:grid-rows-2">
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
            <GridPicsDesign />
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-bold">Our extra services</h1>
          </div>
          <div className="grid grid-flow-row xl:grid-cols-5 lg:grid-cols-4 bg-white rounded-md p-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5">
            <ExtraServices />
            <ExtraServices />
            <ExtraServices />
            <ExtraServices />
            <ExtraServices />
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-bold">Suppliers by region</h1>
          </div>
          <div>
            <div className="flex my-5 justify-center">
              <div className="grid grid-flow-row xl:grid-cols-5 md:grid-cols-4 bg-white rounded-md p-4 sm:grid-cols-3 grid-cols-2 gap-4 my-5 gap-x-4">
                {countries.map((con) => (
                  <SupplierRegion con={con} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
