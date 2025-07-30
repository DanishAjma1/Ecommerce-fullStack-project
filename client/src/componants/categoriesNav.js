import React from "react";

export default function CategoriesNav() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 flex flex-row gap-3 p-4 overflow-y-scroll">
        {[...Array(10)].map((_, index) => (
          <div className="flex gap-2 bg-gray-100 px-2 items-center flex-row border-2 text-blue-600 sm:text-md text-sm font-medium rounded-md">
            <span className="flex items-center">
              <img src="/icon.png" alt="icon" className="min-w-3 w-3 h-3" />
            </span>
            <button className="">Tablets</button>
          </div>
        ))}
      </div>
    </div>
  );
}
