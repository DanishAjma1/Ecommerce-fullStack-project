import React from "react";

export default function SelectedItem() {
  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12">
          <div className="flex w-4/5 p-4">
            <div className="flex justify-center border-2 rounded-md bg-white w-5/12 flex-row">
              <img
                src="/shirt.jpg"
                className="w-full h-80 object-contain"
                alt="Selected Item"
              />
            </div>
            <div className="flex flex-col px-4">
              <p className="text-green-500">in Stock</p>
              <h1 className="text-2xl font-bold mt-4">
                Classic Check shirt for men,in cotton fabrics
              </h1>
              <div className="flex flex-row items-center">
                <p className="mr-3 text-sm">{"⭐".repeat(4)}</p>
                <span className="text-orange-400 text-lg">9.3</span>
                <p className="text-gray-600">
                  <img
                    src="/icon.png"
                    alt="Reviews"
                    className="inline-block w-4 mr-2 ml-3"
                  />
                  100 Reviews
                </p>
                <p className="text-gray-600">
                  <img
                    src="/icon.png"
                    alt="sold"
                    className="inline-block w-4 mr-2 ml-3"
                  />
                  100 Sold
                </p>
              </div>
              {/* prices */}
              <div className="flex w-full bg-orange-100 rounded-md items-center">
                <div className="flex flex-row w-3/4 p-2 justify-around items-center">
                  <div className="flex flex-col gap-1 px-5 w-1/3 justify-center">
                    <p className="text-black text-xl font-medium active:text-red-500">
                      $49.99
                    </p>
                    <span className="text-gray-500 text-sm">50-100 pcs</span>
                  </div>
                  <div className="flex flex-col gap-1 4 px-5 w-1/3 border-l-2">
                    <p className="text-black text-xl font-medium active:text-red-500">
                      $40.99
                    </p>
                    <span className="text-gray-500 text-sm">50-100 pcs</span>
                  </div>
                  <div className="flex flex-col gap-1 4 px-5 w-1/3 border-l-2">
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
                  <span className="text-gray-800 w-2/3">Customized logo and design custom package</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Protection:</p>
                  <span className="text-gray-800 w-2/3">Refund Policy</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-gray-400 w-1/3">Warranty:</p>
                  <span className="text-gray-800 w-2/3">2 years of full Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
