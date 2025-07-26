import React, { useState } from "react";
import { Range } from "react-range";

export default function Products() {
  const categories = [
    "Select Category",
    "Mobile accessory",
    "Electronics",
    "Smartphones",
    "Modern tech",
    "Tools and equipments",
    "Animal and pets",
    "Machinary tools",
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
  const [ShowListOfCategory, setShowListOfCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ShowListOfBrand, setShowListOfBrand] = useState(false);
  const [ShowListOfFeatures, setShowListOfFeatures] = useState(false);
  const [ShowPriceDiv, setShowPriceDiv] = useState(false);
  const [minVal, setMinVal] = useState(10);
  const [maxVal, setMaxVal] = useState(90);

  const min = 0;
  const max = 100;

  const handleSelectedCategories = (cat) => {
    setSelectedCategory(cat);
    setShowListOfCategory(false); // Hide list after selection
  };

  const CategoriesFiltersList = ({ heading }) => {
    return (
      <div className="bg-transparent justify-start flex ">
        <div className="w-3/4 text-[16px] relative">
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
                  className="p-2 hover:bg-slate-800 hover:text-white cursor-pointer"
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
      <div className="bg-transparent justify-start flex ">
        <div className="w-3/4 text-[16px] relative">
          <div
            className="cursor-pointer font-bold  p-3"
            onClick={() => setShowListOfBrand((prev) => !prev)}
          >
            {heading}
          </div>
          {/* List of categories */}
          {ShowListOfBrand && (
            <div className="relative w-full p-2 mt-1 flex flex-col gap-2">
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
      <div className="bg-transparent justify-start flex ">
        <div className="w-3/4 text-[16px] relative">
          <div
            className="p-3 cursor-pointer font-bold"
            onClick={() => setShowListOfFeatures((prev) => !prev)}
          >
            {heading}
          </div>
          {ShowListOfFeatures && (
            <div className="relative w-full mt-1 flex flex-col gap-3 p-2">
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
  return (
    <div>
      <div className="flex justify-center bg-slate-100">
        <div className="w-10/12">
          <div className="w-1/5 flex flex-col">
            <CategoriesFiltersList heading={"Select Category"} />
            <BrandsFiltersList heading={"Select Brand"} />
            <FeaturesFiltersList heading={"Select Feature"} />
            <div>
              <div className="flex flex-col">
                <p
                  className="text-[16px] font-semibold mb-6 p-3"
                  onClick={() => setShowPriceDiv((prev) => !prev)}
                >
                  Set price range
                </p>
                {ShowPriceDiv && (
                  <div className="w-5/6">
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
                    <div className="flex flex-row gap-2 mt-6">
                      <div className="flex flex-col gap-2">
                        <label>Min</label>
                        <input
                          type="number"
                          placeholder="0"
                          value={minVal}
                          onChange={(e) => setMinVal(e.target.value)}
                          className="p-2 w-32"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label>Max</label>
                        <input
                          type="number"
                          value={maxVal}
                          placeholder="9999999"
                          className="p-2 w-32"
                          onChange={(e) => setMaxVal(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
