import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addItemToLocalStorage } from "../componants/addToLocalStorage.js";
import { toast } from "react-toastify";
import { getItemsFromLocalStorage } from "../componants/getItemFromLocalStorage.js";

export default function SelectedItem({ querySearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const URL = "https://ecommerce-backend-two-navy.vercel.app";
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/api/products/getProducts`,{
        withCredentials:true
      })
      .then((response) => {
        setProducts(response.data || []);
        setAllProducts(response.data || []);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    if (!querySearch || allProducts.length === 0) {
      setProducts(allProducts);
      return;
    }
    const filteredProducts = allProducts.filter((pro) =>
      pro.title.toLowerCase().includes(querySearch.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [querySearch, allProducts]);
  const HandleResponsive = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex sm:p-4 p-2">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Doloribus, cumque. Quasi, asperiores voluptates.
          Doloribus, cumque. Quasi, asperiores voluptates doloribus, cumque.
          Quasi, asperiores voluptates doloribus, cumque. Quasi, asperiores
          voluptates doloribus, cumque. Quasi, asperiores voluptates doloribus,
          cumque. Quasi, asperiores voluptates doloribus, cumque. Quasi,
          asperiores voluptates doloribus, cumque. Quasi, asperiores voluptates
          doloribus, cumque. Quasi, asperiores voluptates doloribus, cumque.
          Quasi, asperiores voluptates doloribus, cumque. Quasi, asperiores
        </div>
        <div className="sm:w-8/12 w-full sm:px-4 px-2">
          <table className="w-full border text-left">
            <tbody>
              <tr>
                <td className="text-gray-600 bg-gray-200 w-1/3 px-2 py-2 border">
                  Model
                </td>
                <td className="text-gray-600 w-2/3 px-2 py-2 border">
                  {product.model || "Unknown"}
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 w-1/3 px-2 bg-gray-200 py-2 border">
                  Style
                </td>
                <td className="text-gray-600 w-2/3 px-2 py-2 border">
                  Classic Style
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 w-1/3 px-2 py-2 border bg-gray-200">
                  Certificate
                </td>
                <td className="text-gray-600 w-2/3 px-2 py-2 border">
                  ISO-324798237
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 w-1/3 px-2 py-2 border bg-gray-200">
                  Size
                </td>
                <td className="text-gray-600 w-2/3 px-2 py-2 border">
                  {product.size || "Unknown"}
                </td>
              </tr>

              <tr>
                <td className="text-gray-600 w-1/3 px-2 py-2 border bg-gray-200">
                  Memory
                </td>
                <td className="text-gray-600 w-2/3 px-2 py-2 border">
                  {product.memory || "Unknown"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  const HandleSupplierDiv = () => {
    return (
      <div className="flex flex-col lg:w-3/12 py-2 lg:bg-transparent bg-white rounded-md border-2 h-fit">
        <div className="flex flex-row items-start gap-3 m-2 p-2 border-b-2">
          <img src="/icon.png" alt="Selected Item" className="w-8 h-8 mb-2" />
          <h2 className="text-lg mb-2">Supplier name</h2>
        </div>
        <div className="flex lg:flex-col lg:justify-start md:text-md text-sm justify-around flex-col sm:flex-row gap-2 p-4">
          <div className="flex flex-row gap-3 items-center">
            <img src="/icon.png" alt="Selected Item" className="w-4 h-4 mb-2" />
            <h2 className="mb-2">Germany,Berlin</h2>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src="/icon.png" alt="Selected Item" className="w-4 h-4 mb-2" />
            <h2 className="mb-2">Verified Seller</h2>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src="/icon.png" alt="Selected Item" className="w-4 h-4 mb-2" />
            <h2 className="mb-2">Worldwide shipping</h2>
          </div>
          <div className="hidden flex-col w-full lg:flex gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Send inquiry
            </button>
            <button className="bg-white text-blue-500 border-2 px-4 py-2 rounded-md">
              Seller's Profile
            </button>
          </div>
        </div>
      </div>
    );
  };
  const HandleProductButtons = (product) => {
    const Items = getItemsFromLocalStorage();
    let updatedCartItems = [...Items];
    let existingItemIndex = updatedCartItems.findIndex((item) => {
      return item._id === product._id;
    });
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify([...updatedCartItems]));
      toast.info("Item quantity increased in cart");
    } else {
      addItemToLocalStorage(product);
      toast.success("Item added to cart");
    }
  };
  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12">
          <div className="flex lg:flex-row flex-col lg:bg-white lg:rounded-md lg:shadow-lg xs:p-6 lg:p-4 lg:gap-0 gap-5">
            {/* Pic details */}
            <div className="flex w-full lg:w-10/12 flex-col lg:p-0 p-4 bg-white md:flex-row lg:bg-transparent bg-whitelg:rounded-none rounded-md lg:shadow-none shadow-md justify-center md:items-start items-center gap-4">
              <div className="flex sm:h-80 min-h-60 justify-center border-2 rounded-md bg-white sm:w-6/12 w-8/12 md:flex-row">
                <img
                  src={product.imageUri}
                  className="w-full sm:h-79 m-h-59 object-contain"
                  alt="Selected Item"
                />
              </div>

              <div className="flex flex-col px-4 md:gap-0 gap-2 ">
                <div className="flex sm:-order-none order-2 flex-col px-2">
                  <p className="text-green-500">In Stock</p>
                  <h1 className="md:text-2xl text-lg font-bold md:mt-4 mt-2">
                    {product.description}
                  </h1>
                  <p className="text-red-500 text-lg font-medium md:hidden block">
                    ${product.price}
                  </p>
                </div>
                <div className="flex sm:-order-none order-1 md:text-lg text-sm flex-row items-start sm:items-center gap-1 md:gap-2 flex-nowrap">
                  <div className="flex flex-row items-center">
                    <p className="mr-1 text-sm md:ml-3 ml-1">
                      {"⭐".repeat(4)}
                    </p>
                    <span className="text-orange-400 md:block hidden">9.3</span>
                  </div>
                  <p className="text-gray-600">
                    <img
                      src="/icon.png"
                      alt="Reviews"
                      className="inline-block w-4 mr-1 md:ml-3 ml-1"
                    />
                    {product.reviews || "10"} Reviews
                  </p>
                  <p className="text-gray-600">
                    <img
                      src="/icon.png"
                      alt="sold"
                      className="inline-block w-4 mr-1 md:ml-3 ml-1"
                    />
                    {product.sold || "10"} Sold
                  </p>
                </div>
                {/* prices */}
                <div className="md:flex w-full sm:-order-none hidden bg-orange-100 rounded-md items-center mt-2">
                  <div className="flex flex-row sm:w-3/4 w-full p-2 justify-around items-center">
                    <div className="flex flex-col gap-1 px-5 w-1/3 justify-center">
                      <p className="text-black text-lg font-medium active:text-red-500">
                        ${product.price}
                      </p>
                      <span className="text-gray-500 text-sm">50-100 pcs</span>
                    </div>
                    <div className="flex flex-col gap-1 px-5 w-1/3 border-l-2 justify-center">
                      <p className="text-black text-lg font-medium active:text-red-500">
                        ${product.price - 10}
                      </p>
                      <span className="text-gray-500 text-sm">50-100 pcs</span>
                    </div>
                    <div className="flex flex-col gap-1 px-5 w-1/3 border-l-2 justify-center">
                      <p className="text-black text-lg font-medium active:text-red-500">
                        ${product.price - 20}
                      </p>
                      <span className="text-gray-500 text-sm">50-100 pcs</span>
                    </div>
                  </div>
                </div>
                {/* Add to cart and Buy now button */}
                <div className="flex flex-row md:justify-evenly md:gap-0 gap-5  items-center">
                  <button
                    className="bg-blue-500 md:w-40 flex justify-center text-white px-4 py-2 rounded-md my-5"
                    onClick={(e) => {
                      e.preventDefault();
                      HandleProductButtons(product);
                    }}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="bg-green-500 md:w-40 flex justify-center text-white px-4 py-2 rounded-md my-5"
                    onClick={(e) => {
                      e.preventDefault();
                      HandleProductButtons(product);
                      navigate("/cartitems");
                    }}
                  >
                    Buy now
                  </button>
                </div>
                {/* description */}
                <div className="sm:-order-none order-4">
                  <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">Price:</p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        Negotiable
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">Type:</p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        {product.title}
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">Material:</p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        {product.material || "Unknown"}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">Design:</p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        {product.design || "Unknown"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full py-4 border-b-2 pb-2">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">
                        Customizations:
                      </p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        Customized logo and design custom package
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">
                        Protection:
                      </p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        Refund Policy
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-400 sm:w-1/3 w-1/2">Warranty:</p>
                      <span className="text-gray-800 sm:w-2/3 w-1/2">
                        2 years of full Warranty
                      </span>
                    </div>
                  </div>
                  <div className="w-full sm:hidden flex">
                    <HandleResponsive />
                  </div>
                </div>
              </div>
            </div>
            {/* Supplier div */}
            <HandleSupplierDiv />
          </div>
          {/* Description */}
          <div className="sm:flex hidden lg:flex-row flex-col gap-4 w-full">
            <div className="flex flex-row lg:w-9/12 w-full">
              <div className="flex flex-col mt-4 p-2 border-spacing-3 border w-full bg-white rounded-md shadow-lg">
                <div className="w-full sm:flex hidden border-b-2">
                  <div className="flex flex-row justify-start gap-3 p-2">
                    <p className="text-lg text-gray-400 px-2 active:border-blue-300">
                      Description
                    </p>
                    <p className="text-lg text-gray-400 px-2 active:border-blue-300">
                      Reviews
                    </p>
                    <p className="text-lg text-gray-400 px-2 active:border-blue-300">
                      Shipping
                    </p>
                    <p className="text-lg text-gray-400 px-2 active:border-blue-300">
                      About seller
                    </p>
                  </div>
                </div>
                {/* you may like */}
                <div className="sm:flex hidden">
                  <HandleResponsive />
                </div>
              </div>
            </div>
            <div className="lg:flex hidden flex-col overflow-y-scroll mt-4 p-2 border-spacing-3 border w-3/12 bg-white rounded-md shadow-lg">
              <h4 className="text-black block font-medium px-2 pt-2">
                You may like
              </h4>
              <div className="flex flex-col gap-4 overflow-y-scroll h-auto hover:cursor-pointer">
                {products.slice(0, 5).map((pro, index) =>
                  index === 4 ? (
                    <div>
                      <Link to={"/products"} className="text-blue-500 pl-5">
                        see more...
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="flex flex-row gap-2 p-3 min-w-4/5"
                      key={index}
                    >
                      <img
                        src={pro.imageUri}
                        className="w-20 h-20 object-contain border-2 rounded-md"
                        alt="You may like"
                      />
                      <div className="flex flex-col gap-1 flex-wrap text-wrap">
                        <p>{pro.title}</p>
                        <span className="text-gray-500"> ${pro.price}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Similar products */}
          <div className="flex flex-col overflow-y-scroll mt-4 p-2 border-spacing-3 border my-5 w-full bg-white rounded-md shadow-md">
            <h4
              className="text-black block font-medium p-2 w-fit hover:text-blue-500 hover:cursor-pointer"
              onClick={() => {
                navigate("/products");
              }}
            >
              Similar products
            </h4>
            <div className="flex flex-row gap-2 overflow-y-scroll h-auto">
              {(querySearch === "" ? allProducts : products).map(
                (pro, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center hover:cursor-pointer gap-2 border-2 p-4 w-fit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/products/${pro._id}`, {
                        state: { product: pro },
                      });
                    }}
                  >
                    <img
                      src={pro.imageUri}
                      className="min-w-40 h-40 bg-slate-100 object-contain border-2 rounded-md"
                      alt="You may like"
                    />
                    <div className="flex flex-col gap-1 flex-wrap text-wrap">
                      <p>{pro.description}</p>
                      <span className="text-gray-500"> ${pro.price}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Discount section */}
          <div className="flex flex-row w-full justify-between rounded-md bg-blue-600 my-5 p-6">
            <div className="flex flex-row items-center justify-between w-full gap-4 mx-5">
              <div className="flex flex-col text-white">
                <h2 className="text-2xl font-medium">
                  Super discount on more than 100 USD
                </h2>
                <p className="font-light text-gray-50">
                  Get an additional 20% off on your next purchase!
                </p>
              </div>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
