import React from "react";

export default function SelectedItem() {
  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12 flex flex-row bg-white rounded-md shadow-lg p-4">
          <div className="flex w-full lg:w-10/12 flex-col md:flex-row justify-center md:items-start items-center gap-4">
            <div className="flex sm:h-80 min-h-60 justify-center border-2 rounded-md bg-white sm:w-6/12 w-8/12 md:flex-row">
              <img
                src="/shirt.jpg"
                className="w-full sm:h-79 m-h-59 object-contain"
                alt="Selected Item"
              />
            </div>
            <div className="flex flex-col px-4 md:gap-0 gap-2 ">
              <p className="text-green-500">In Stock</p>
              <h1 className="text-2xl font-bold md:mt-4 mt-2">
                Classic Check shirt for men,in cotton fabrics
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex flex-row items-center">
                <p className="mr-1 text-sm ml-3">{"⭐".repeat(4)}</p>
                <span className="text-orange-400 text-lg">9.3</span>
                </div>
                <p className="text-gray-600">
                  <img
                    src="/icon.png"
                    alt="Reviews"
                    className="inline-block w-4 mr-1 ml-3"
                  />
                  100 Reviews
                </p>
                <p className="text-gray-600">
                  <img
                    src="/icon.png"
                    alt="sold"
                    className="inline-block w-4 mr-1 ml-3"
                  />
                  100 Sold
                </p>
              </div>
              {/* inquiry button */}
                <button className="bg-blue-500 md:hidden flex justify-center text-white px-4 py-2 rounded-md my-2">
                  Send inquiry
                </button>
              {/* prices */}
              <div className="flex w-full bg-orange-100 rounded-md items-center mt-2">
                <div className="flex flex-row w-3/4 p-2 justify-around items-center">
                  <div className="flex flex-col gap-1 px-5 w-1/3 justify-center">
                    <p className="text-black text-xl font-medium active:text-red-500">
                      $49.99
                    </p>
                    <span className="text-gray-500 text-sm">50-100 pcs</span>
                  </div>
                  <div className="flex flex-col gap-1 px-5 w-1/3 border-l-2 justify-center">
                    <p className="text-black text-xl font-medium active:text-red-500">
                      $40.99
                    </p>
                    <span className="text-gray-500 text-sm">50-100 pcs</span>
                  </div>
                  <div className="flex flex-col gap-1 px-5 w-1/3 border-l-2 justify-center">
                    <p className="text-black text-xl font-medium active:text-red-500">
                      $30.99
                    </p>
                    <span className="text-gray-500 text-sm">50-100 pcs</span>
                  </div>
                </div>
              </div>
              {/* description */}
              <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Price:</p>
                  <span className="text-gray-800 w-2/3">Negotiable</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Type:</p>
                  <span className="text-gray-800 w-2/3">Classic Shirt</span>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-gray-400 w-1/3">Material:</p>
                  <span className="text-gray-800 w-2/3">Cotton</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Design:</p>
                  <span className="text-gray-800 w-2/3">Modern nice</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Cutomizations:</p>
                  <span className="text-gray-800 w-2/3">
                    Customized logo and design custom package
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Protection:</p>
                  <span className="text-gray-800 w-2/3">Refund Policy</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Warranty:</p>
                  <span className="text-gray-800 w-2/3">
                    2 years of full Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden flex-col w-3/12 py-2 bg-white rounded-md border-2 h-fit">
            <div className="flex flex-row items-start gap-3 m-2 p-2 border-b-2">
              <img
                src="/icon.png"
                alt="Selected Item"
                className="w-8 h-8 mb-2"
              />
              <h2 className="text-lg mb-2">Supplier name</h2>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="/icon.png"
                  alt="Selected Item"
                  className="w-4 h-4 mb-2"
                />
                <h2 className="text-md mb-2">Germany,Berlin</h2>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="/icon.png"
                  alt="Selected Item"
                  className="w-4 h-4 mb-2"
                />
                <h2 className="text-md mb-2">Germany,Berlin</h2>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="/icon.png"
                  alt="Selected Item"
                  className="w-4 h-4 mb-2"
                />
                <h2 className="text-md mb-2">Germany,Berlin</h2>
              </div>
              <div className="flex flex-col w-full gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Send inquiry
                </button>
                <button className="bg-white text-blue-500 border-2 px-4 py-2 rounded-md">
                  Seller's Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
