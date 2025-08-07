import { Link } from "react-router-dom";

export default function ShowmenuPopup() {
    return (
      <div className="fixed left-0 pb-5 top-0 md:w-4/12 w-8/12 bg-white border transition text-black border-gray-300 rounded-md shadow-lg z-50">
        <div className="py-3 px-2 rounded-lg shadow-lg mr-4 gap-4 flex flex-col w-fit m-2">
          <img src="/menuIcon.png" alt="icon" className="min-w-6 w-6" />
        </div>
        <div className="p-3 mt-5 h-28 bg-slate-200 justify-center flex flex-col gap-2">
          <div className="bg-white w-fit p-2 rounded-full items-center flex justify-center">
            <img src="/profile.png" alt="icon" className="min-w-8 w-8" />
          </div>
          <p className="">Signin | Register</p>
        </div>
        <ul className="py-1">
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/cart.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/cartitems" className="hover:text-gray-300">Cart Items</Link>
          </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/products" className="hover:text-gray-300">Products</Link>
            </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My orders
            </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              English | USD
            </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Contact us
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            About
          </li>
          </div>
          <div className="flex flex-row items-center px-3 border-t-2">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            User agreement
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Partenership
          </li>
          </div>
          <div className="flex flex-row items-center px-3">
            <img src="/icon.png" alt="icon" className="min-w-4 w-4" />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Privacy Policy
          </li>
          </div>
        </ul>
      </div>
    );
  };