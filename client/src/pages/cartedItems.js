import React from "react";

export default function CartedItems() {
  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12">
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col w-full lg:w-9/12">
            {/* CartedItems */}
              <div className="bg-white border-2 rounded-lg shadow-md">
                {[...Array(4)].map((_, index) => (
                  <div className="flex m-5 md:flex-row flex-col border-b-2" key={index}>
                    <div className="sm:p-4 p-1 md:w-2/3 flex flex-row gap-2 items-start">
                      <div>
                        <img
                          src="/shirt.jpg"
                          alt="shirt"
                          className="min-w-24 object-contain h-24 mt-2 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="sm:text-lg text-md font-semibold">
                          T-shirt for men multiple colors,men and womens
                        </h1>
                        <div className="sm:text-md text-xs text-gray-400">
                          <p>Size: M, Color: Blue, Material: Polyester</p>
                          <p>Seller: Artel Market</p>
                        </div>
                        <div className="flex flex-row items-center text-sm font-medium">
                          <button className="text-red-400 px-2 py-1 border-2 rounded-lg">
                            Remove
                          </button>
                          <button className="text-blue-400 px-2 py-1 border-2 rounded-lg ml-2">
                            Save for later
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:w-1/3 sm:flex-col flex-row p-5 gap-1 sm:justify-center justify-between items-center sm:items-end">
                      <p className="sm:text-lg sm:-order-none order-1 font-semibold text-gray-600">
                        Price: <span className="text-black">$20.00</span>
                      </p>

                      <p className="text-gray-500">
                        Quantity:{" "}
                        <span>
                          <select className="border-2 border-gray-300 border-y-0 bg-transparent rounded-lg px-2 py-1 sm:mt-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* faclities */}
              <div className="sm:flex hidden sm:flex-row flex-col px-4 py-6 justify-between gap-3 sm:items-center items-start">
                <div className="flex md:flex-row sm:w-1/3 flex-col gap-2 sm:items-center items-start">
                  <div className="w-12 h-12 flex bg-gray-200 rounded-full justify-center items-center">
                    <img src="/icon.png" alt="icon" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg ">Secure payment</p>
                    <p className="text-gray-400">Have you ever finally just</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col sm:w-1/3 gap-2 sm:items-center items-start">
                  <div className="w-12 h-12 flex bg-gray-200 rounded-full justify-center items-center">
                    <img src="/icon.png" alt="icon" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg ">Customer suppor</p>
                    <p className="text-gray-400">Have you ever finally just</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 sm:w-1/3 sm:items-center items-start">
                  <div className="w-12 h-12 flex bg-gray-200 rounded-full justify-center items-center">
                    <img src="/icon.png" alt="icon" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg ">Free delivery</p>
                    <p className="text-gray-400">Have you ever finally just</p>
                  </div>
                </div>
              </div>
            </div>
            {/* coupons */}
            <div className="flex lg:w-4/12 w-full sm:justify-center">
              <div className="flex flex-col lg:w-full sm:w-2/3 w-full lg:px-4">
                <div className="p-4 bg-white rounded-md shadow-md gap-2 lg:flex hidden flex-col">
                  <p className="">Have a coupon?</p>
                  <div className="flex border-2 justify-center xl:text-lg text-sm items-center rounded-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Add coupon"
                      className="px-4 py-2 w-full"
                    />
                    <button className="bg-transparent  text-blue-600 border-l-2 px-4 py-2">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col text-gray-600 bg-white rounded-md shadow-md my-4">
                  <div className="border-b-2 pb-4">
                    <div className="flex flex-row w-full justify-between">
                      <p>Subtotal:</p>
                      <p>$2312.23</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Discount:</p>
                      <p className="text-red-500">-$60.23</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Tax:</p>
                      <p className="text-green-500">+$14.21</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-4">
                    <p>Total:</p>
                    <p className="xl:text-xl text-lg font-bold">$3242.23</p>
                  </div>
                  <div className="py-4 w-full justify-center flex">
                    <button className="text-white rounded-md px-4 xl:py-4 py-2 max-w-40 bg-green-600 w-full">
                      Checkout
                    </button>
                  </div>
                  <div className="lg:flex hidden flex-row gap-3 justify-center">
                    <img src="/icon.png" alt="icon" className="w-6 h-4" />
                    <img src="/icon.png" alt="icon" className="w-6 h-4" />
                    <img src="/icon.png" alt="icon" className="w-6 h-4" />
                    <img src="/icon.png" alt="icon" className="w-6 h-4" />
                    <img src="/icon.png" alt="icon" className="w-6 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Similar products */}
          <div className="flex flex-col overflow-y-scroll p-4 my-5 border-spacing-3 border w-full bg-white rounded-md shadow-md">
            <h4 className="text-black block text-lg font-medium p-2">
              Similar products
            </h4>
            <div className="flex sm:flex-row flex-col gap-2 sm:overflow-y-scroll h-auto">
              {[...Array(8)].map((_, index) => (
                <div
                  className="flex sm:flex-col flex-row w-full justify-center sm:items-center items-start gap-2 border-2 p-4 sm:w-fit"
                  key={index}
                >
                  <img
                    src="/shirt.jpg"
                    className="max-w-44 max-h-44 sm:min-w-40 sm:min-h-40 min-w-20 min-h-20 object-contain"
                    alt="You may like"
                  />
                  <div className="flex flex-col gap-1 flex-wrap text-wrap">
                    <span className="text-gray-500 font-bold text-lg">
                      {" "}
                      $29.99
                    </span>
                    <p>Casual Shirt sets Elegant Formal</p>
                    <button className="bg-transparent text-blue-500 sm:text-lg text-sm border-2 w-fit sm:p-2 px-2 py-1 flex items-center gap-2 rounded-md">
                      <img src="/icon.png" alt="icon" className="w-4 h-4" />
                      Move to cart
                    </button>
                    <button className="bg-transparent text-red-500 border-2 sm:p-2 px-2 py-1 flex w-fit items-center gap-2 rounded-md">
                      <img src="/icon.png" alt="icon" className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
