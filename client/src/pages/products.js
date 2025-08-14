import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Products({ querySearch }) {
  const categories = [
    "Select Category",
    "All Categories",
    "Mobile accessory",
    "Electronics",
    "Fashion",
    "Tools and equipments",
    "Animal and pets",
    "Machinary tools",
  ];
  const ratings = [
    { stars: 5, checked: true },
    { stars: 4, checked: true },
    { stars: 3, checked: true },
    { stars: 2, checked: true },
    { stars: 1, checked: true },
  ];

  const brands = [
    { name: "Samsung", checked: true },
    { name: "Apple", checked: true },
    { name: "Huawei", checked: false },
    { name: "Pocco", checked: true },
    { name: "Oppo", checked: true },
    { name: "Techno", checked: true },
    { name: "Itel", checked: true },
    { name: "Lenovo", checked: false },
  ];

  const features = [
    { name: "Metallic", checked: true },
    { name: "Plastic cover", checked: false },
    { name: "8GB Ram", checked: false },
    { name: "16GB Ram", checked: false },
    { name: "Light Power", checked: false },
    { name: "32GB Ram", checked: false },
    { name: "Super power", checked: false },
    { name: "Large Memory", checked: false },
  ];
  const Conditions = ["Any", "Refurbished", "Brand New", "Used", "Damaged"];
  const [ShowListOfCategory, setShowListOfCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ShowListOfBrand, setShowListOfBrand] = useState(false);
  const [ShowListOfRating, setShowListOfRating] = useState(false);
  const [ShowListOfCondition, setShowListOfCondition] = useState(false);
  const [ShowListOfFeatures, setShowListOfFeatures] = useState(false);
  const [ShowPriceDiv, setShowPriceDiv] = useState(false);
  const [minVal, setMinVal] = useState(10);
  const [maxVal, setMaxVal] = useState(90);
  const [fetchedItems, setFetchedItems] = useState(0);
  const [fileFlow, setFileFlow] = useState(false);

  const navigate = useNavigate();
  const min = 0;
  const handleSelectedCategories = (cat) => {
    setSelectedCategory(cat);
    setShowListOfCategory(false); // Hide list after selection
  };

  const CategoriesFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent justify-start border-t-2 flex ">
        <div className="w-full text-[16px]">
          <div
            className="cursor-pointer font-bold p-3"
            onClick={() => setShowListOfCategory((prev) => !prev)}
          >
            {selectedCategory || heading}
          </div>
          {/* List of categories */}
          {ShowListOfCategory && (
            <ul className="relative w-full mt-1">
              {categories.map((li) => (
                <li
                  key={li}
                  className="px-3 py-1 hover:bg-slate-800 hover:text-white cursor-pointer"
                  onClick={() => handleSelectedCategories(li)}
                >
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  const BrandsFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent justify-start border-t-2 flex ">
        <div className="w-full text-[16px]">
          <div
            className="cursor-pointer font-bold  p-3"
            onClick={() => setShowListOfBrand((prev) => !prev)}
          >
            {heading}
          </div>
          {/* List of categories */}
          {ShowListOfBrand && (
            <div className="relative w-full px-3 py-1 mt-1 flex  flex-col gap-2">
              {brands.map((li) => (
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    key={li}
                    className="hover:bg-slate-800 hover:text-white cursor-pointer"
                  />
                  <label>{li.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  const FeaturesFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent border-t-2 flex ">
        <div className="w-full text-[16px]">
          <div
            className="p-3 cursor-pointer font-bold"
            onClick={() => setShowListOfFeatures((prev) => !prev)}
          >
            {heading}
          </div>
          {ShowListOfFeatures && (
            <div className="relative w-full mt-1 flex flex-col gap-3 px-3 py-1">
              {features.map((li) => (
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    key={li}
                    className="hover:bg-slate-800 hover:text-white cursor-pointer"
                  />
                  <label>{li.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  const RatingsFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent border-t-2 justify-start flex ">
        <div className="w-full text-[16px]">
          <div
            className="p-3 cursor-pointer font-bold"
            onClick={() => setShowListOfRating((prev) => !prev)}
          >
            {heading}
          </div>
          {ShowListOfRating && (
            <div className="relative w-full mt-1 flex flex-col px-3 py-1">
              {ratings.map((li) => (
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    key={li.stars}
                    className="cursor-pointer"
                  />
                  <label>{"⭐".repeat(li.stars)}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  const ConditionFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent border-t-2  justify-start flex ">
        <div className="w-full text-[16px]">
          <div
            className="p-3 cursor-pointer font-bold"
            onClick={() => setShowListOfCondition((prev) => !prev)}
          >
            {heading}
          </div>
          {ShowListOfCondition && (
            <div className="relative w-full mt-1 flex flex-col gap-3 p-2">
              {Conditions.map((li) => (
                <div className="flex gap-3">
                  <input
                    type="radio"
                    key={li}
                    className="hover:bg-slate-800 hover:text-white cursor-pointer"
                  />
                  <label>{li}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  const Products = ({ product }) => {
    return (
      <div
        onClick={(e) => {
          e.preventDefault();
          navigate(`/products/${product._id}`, {
            state: { product },
          });
        }}
      >
        {/* Product card */}
        {fileFlow ? (
          <div className="flex flex-col sm:flex-row border-2 relative rounded-md p-3 bg-white gap-5 justify-center">
            <div className="absolute right-5 top-5 h-10 border-2 rounded-md flex items-center justify-center bg-white shadow-sm">
              <img
                src="/icon.png"
                alt="product"
                className="cursor-pointer hover:bg-slate-100 w-6 object-fill"
              />
            </div>
            <img
              src={product.imageUri}
              alt="product"
              className="sm:w-1/4 h-48 object-contain"
            />
            <div className="flex flex-col w-3/4 p-3">
              <h4 className="text-lg font-medium">{product.title}</h4>
              <span className="text-black mt-3 text-2xl font-medium">
                ${product.price}
              </span>
              <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
                <p>
                  {"⭐".repeat(product.rating || "5")} {"(5 reviews)"}
                </p>
                <li className="text-gray-600">154 orders</li>
                <li className="text-green-300 text-lg">Free shipping</li>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <Link
                to={`products/${product._id}`}
                className="text-blue-600 mt-2 rounded-md hover:text-black"
              >
                View Details
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-flow-row border-2 relative rounded-md p-3 bg-white h-full">
            <div className="absolute right-5 top-5 w-10 h-10 border-2 rounded-md flex items-center justify-center bg-white shadow-sm">
              <img
                src="/icon.png"
                alt="product"
                className="cursor-pointer hover:bg-slate-100 w-6 object-contain"
              />
            </div>

            <img
              src={product.imageUri}
              alt="product"
              className="min-w-1/4  flex-wrap sm:h-48 overflow-hidden object-contain justify-self-center"
            />
            <div className="flex flex-col sm:w-3/4 p-3">
              <h4 className="text-lg font-medium">{product.title}</h4>
              <span className="text-black mt-3 text-2xl font-medium">
                ${product.price}
              </span>

              <div className="flex flex-col gap-1">
                <p>
                  {"⭐".repeat(product.rating || "5")} {"(5 reviews)"}
                </p>
                <div className="flex flex-col gap-1 pl-4">
                  <li className="text-green-300 text-lg">Free shipping</li>
                </div>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <Link
                to={`products/${product._id}`}
                className="text-blue-600 mt-2 rounded-md hover:text-black"
              >
                View Details
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };
  const URL = "http://localhost:5000";
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/products/getProducts`)
      .then((response) => {
        setProducts(response.data || []);
        setAllProducts(response.data || []);
        setFetchedItems((response.data || []).length);
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

  return (
    <div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-10/12 flex flex-row">
          <div className="w-1/5 xl:flex hidden flex-col mt-2 mb-5 overflow-y-scroll h-screen">
            <CategoriesFiltersList heading={"Select Category"} />
            <BrandsFiltersList heading={"Select Brand"} />
            <FeaturesFiltersList heading={"Select Feature"} />
            <div>
              {/* Price range */}
              <div className="flex flex-col border-t-2 justify-start">
                <p
                  className="text-[16px] font-semibold mb-2 hover:cursor-pointer p-3"
                  onClick={() => setShowPriceDiv((prev) => !prev)}
                >
                  Set price range
                </p>
                {ShowPriceDiv && (
                  <div className="p-3 justify-center flex flex-col gap-4">
                    <div className="relative">
                      <input
                        type="range"
                        min={0}
                        max={10000}
                        value={minVal}
                        onChange={(e) => setMinVal(e.target.value)}
                        className="w-full accent-blue-500"
                      />
                      <input
                        type="range"
                        min={min}
                        max={1000000}
                        value={maxVal}
                        onChange={(e) => setMaxVal(e.target.value)}
                        className="w-full accent-red-500"
                      />
                    </div>
                    <div className="flex flex-row gap-2 pr-2">
                      <div className="flex flex-col gap-2 w-1/2">
                        <label>Min</label>
                        <input
                          type="number"
                          placeholder="0"
                          value={minVal}
                          onChange={(e) => setMinVal(e.target.value)}
                          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-1/2">
                        <label>Max</label>
                        <input
                          type="number"
                          value={maxVal}
                          placeholder="9999999"
                          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                          onChange={(e) => setMaxVal(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="bg-blue-500 w-full text-white p-2 rounded-md hover:bg-blue-600">
                      Apply
                    </button>
                  </div>
                )}
              </div>
              <ConditionFiltersList heading={"Select Condition"} />
              <div className="flex flex-col justify-center">
                <RatingsFiltersList heading={"Select Ratings"} />
              </div>
            </div>
          </div>
          <div className="w-full px-2 overflow-y-scroll h-screen">
            <div className="flex rounded-md px-3 py-3  lg:justify-between md:justify-center bg-white justify-around border-2">
              <div className="lg:flex hidden justify-center gap-1 items-center">
                <p>{fetchedItems + " items in "}</p>
                <span className="font-semibold text-lg">Mobiles accessory</span>
              </div>
              <div className="flex items-center lg:justify-start lg:w-auto w-full sm:justify-center justify-between gap-3">
                <input
                  readOnly
                  type="checkbox"
                  checked
                  className="p-1 md:block hidden"
                />
                <label className="text-lg md:block hidden">Verified only</label>
                <div className="lg:hidden flex flex-row gap-3 items-center border-2 sm:text-lg text-sm sm:py-2 py-1 sm:px-5 px-2  rounded">
                  <img
                    src="/icon.png"
                    alt="icon"
                    className="sm:w-4 w-2 sm:h-4 h-2"
                  />
                  <p className="">Filter</p>
                </div>
                <select
                  name="choice"
                  className="sm:py-3 py-1 pl-2 pr-6 bg-transparent rounded-md border-2 sm:text-lg text-sm"
                >
                  <option value={"featured"}>Featured</option>
                  <option value={"local"}>Local</option>
                </select>

                <div className="rounded-md border-2">
                  <button
                    className="p-[9px] border-r-2 h-full active:bg-slate-100 "
                    onClick={(e) => {
                      e.preventDefault();
                      setFileFlow(true);
                    }}
                  >
                    <img
                      src="/inFileForm.png"
                      alt="icon"
                      className="sm:w-6 w-4 h-full object-cover"
                    />
                  </button>
                  <button
                    className="p-[9px] active:bg-slate-100 h-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setFileFlow(false);
                    }}
                  >
                    <img
                      src="/inGridForm.png"
                      alt="icon"
                      className="sm:w-6 w-4 h-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Products grid */}
            <div>
              {fileFlow ? (
                <div className="grid grid-cols-1 gap-4 mt-4 hover:cursor-pointer">
                  {(querySearch === "" ? allProducts : products).map(
                    (pro, idx) => (
                      <Products key={idx} product={pro} />
                    )
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 hover:cursor-pointer">
                  {(querySearch === "" ? allProducts : products).map(
                    (pro, idx) => (
                      <Products key={idx} product={pro} />
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
