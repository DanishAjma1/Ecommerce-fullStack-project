// components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="w-10/12 px-3 justify-start">
        <nav className="text-[16px] text-gray-500 my-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <span key={routeTo}>
                {" > "}
                {isLast ? (
                  <span className="font-semibold">
                    {decodeURIComponent(name)}
                  </span>
                ) : (
                  <Link to={routeTo} className="text-blue-600 hover:underline">
                    {decodeURIComponent(name)}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
