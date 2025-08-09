import axios from "axios";
import { useEffect, useState } from "react";
import { addItemToLocalStorage } from "../componants/addToLocalStorage.js";
import { removeItemFromLocalStorage } from "../componants/removeFromLocalStorage.js";
import { getItemsFromLocalStorage } from "../componants/getItemFromLocalStorage.js";
import { toast } from "react-toastify";

export default function CartedItems() {
  const [cartedItems, setCartedItems] = useState([]);
  const URL = "http://localhost:5000";
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [dicount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const tax = 14.21;

  const calculateTotal = () => {
    const newSubTotal = cartedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(newSubTotal);
    const newDiscount = newSubTotal * 0.25;
    setDiscount(newDiscount);
    if (subTotal !== 0) setTotal(newSubTotal - newDiscount + tax);
    else setTotal(0);
  };

  useEffect(() => {
    setCartedItems(getItemsFromLocalStorage);
    axios
      .get(`${URL}/products/getProducts`)
      .then((response) => {
        setProducts(response.data || []);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    calculateTotal();
  });
  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12">
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col w-full lg:w-9/12">
              {/* CartedItems */}
              <div className="bg-white border-2 rounded-lg shadow-md">
                {cartedItems.length !== 0 ? (
                  cartedItems.map((item, index) => (
                    <div
                      className="flex m-5 md:flex-row flex-col border-b-2"
                      key={index}
                    >
                      <div className="sm:p-4 p-1 md:w-2/3 flex flex-row gap-2 items-start">
                        <div>
                          <img
                            src={item.imageUri}
                            alt="shirt"
                            className="w-24 object-contain h-24 mt-2 rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className="sm:text-lg text-md font-semibold">
                            {item.title}
                          </h1>
                          <div className="sm:text-md text-xs text-gray-400">
                            <p>
                              Size: {item.size || "Unknown"}, Color:{" "}
                              {item.color || "Unknown"}, Material:{" "}
                              {item.material || "Unknown"}
                            </p>
                            <p>Seller: {item.market || "Unknown"}</p>
                          </div>
                          <div className="flex flex-row items-center text-sm font-medium">
                            <button
                              className="text-red-400 px-2 py-1 border-2 rounded-lg"
                              onClick={(e) => {
                                e.preventDefault();
                                removeItemFromLocalStorage(item);
                                toast.info("Item removed from cart.");
                                setCartedItems(
                                  cartedItems.filter((cartItem) => {
                                    return cartItem._id !== item._id;
                                  })
                                );
                              }}
                            >
                              Remove
                            </button>
                            <button
                              className="text-blue-400 px-2 py-1 border-2 rounded-lg ml-2"
                              onClick={(e) => {
                                e.preventDefault();
                                alert(
                                  "The item is already saved in carted items list,don't worry.."
                                );
                              }}
                            >
                              Save for later
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:w-1/3 sm:flex-col flex-row p-5 gap-1 sm:justify-center justify-between items-center sm:items-end">
                        <p className="sm:text-lg sm:-order-none order-1 font-semibold text-gray-600">
                          Price:{" "}
                          <span className="text-black">
                            ${item.price * item.quantity}
                          </span>
                        </p>

                        <p className="text-gray-500">
                          Quantity:{" "}
                          <span>
                            <select
                              name="quantity"
                              value={item.quantity}
                              className="border-2 border-gray-300 border-y-0 bg-transparent rounded-lg px-2 py-1 sm:mt-2"
                              onChange={(e) => {
                                e.preventDefault();
                                const Items = getItemsFromLocalStorage();
                                let updatedCartItems = [...Items];
                                let existingItemIndex =
                                  updatedCartItems.findIndex((it) => {
                                    return it._id === item._id;
                                  });
                                updatedCartItems[existingItemIndex].quantity =
                                  e.target.value;
                                localStorage.setItem(
                                  "cartItems",
                                  JSON.stringify([...updatedCartItems])
                                );
                                toast.info("Item quantity changed in cart");
                                setCartedItems(updatedCartItems);
                              }}
                            >
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
                  ))
                ) : (
                  <div className="p-5 flex justify-center">
                    <p className="text-lg text-gray-600 font-medium">
                      Your cart is empty
                    </p>
                  </div>
                )}
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
                      <p>${subTotal}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Discount:</p>
                      <p className="text-red-500">-${dicount}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Tax:</p>
                      <p className="text-green-500">
                        +${subTotal === 0 ? 0 : tax}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-4">
                    <p>Total:</p>
                    <p className="xl:text-xl text-lg font-bold">${total}</p>
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
              {products.map((pro, index) => (
                <div
                  className="flex sm:flex-col flex-row w-full justify-center sm:items-center items-start gap-2 border-2 p-4 sm:w-fit"
                  key={index}
                >
                  <img
                    src={pro.imageUri}
                    className="w-44 h-44 sm:min-w-40 min-w-20 min-h-20 object-contain"
                    alt="You may like"
                  />
                  <div className="flex flex-col gap-1 flex-wrap text-wrap">
                    <span className="text-gray-500 font-bold text-lg">
                      {" "}
                      ${pro.price}
                    </span>
                    <p>{pro.title}</p>
                    {/* Button to shop products */}
                    <button
                      className="bg-transparent text-blue-500 text-sm border-2 w-fit px-2 py-1 flex items-center gap-2 rounded-md"
                      onClick={(e) => {
                        e.preventDefault();
                        const updatedCartItems = [...cartedItems];
                        let existingItemIndex = cartedItems.findIndex(
                          (item) => {
                            return item._id === pro._id;
                          }
                        );
                        if (existingItemIndex !== -1) {
                          updatedCartItems[existingItemIndex].quantity += 1;
                          setCartedItems(updatedCartItems);
                        } else {
                          addItemToLocalStorage(pro);
                          toast.success("Item added to cart..");
                          updatedCartItems.push({ ...pro, quantity: 1 });
                          setCartedItems(updatedCartItems);
                        }
                      }}
                    >
                      <img src="/icon.png" alt="icon" className="w-4 h-4" />
                      Move to cart
                    </button>
                    <button
                      className="bg-transparent text-red-500 text-sm border-2 px-2 py-1 flex w-fit items-center gap-2 rounded-md"
                      onClick={(e) => {
                        e.preventDefault();
                        setProducts(
                          products.filter((prod) => {
                            return prod._id !== pro._id;
                          })
                        );
                        toast.info("Item removed.");
                      }}
                    >
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
