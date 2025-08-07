import React from "react";

export default function BrandIdentification() {
  return (
    <div className="flex flex-row">
      <img src="/icon.png" alt="icon" className="md:w-10 w-8" />
      <h1 className="flex font-extrabold md:text-3xl sm:text-2xl text-xl items-center pl-2">
        The Brand
      </h1>
    </div>
  );
}
