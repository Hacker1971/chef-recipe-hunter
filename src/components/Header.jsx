import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "./provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              {user ? (
                <li>
                  <button onClick={handleLogout} className="btn btn-warning">
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="btn btn-warning">
                    Login
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <p>{user.displayName}</p>
                </li>
              )}
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-10 h-10 rounded-xl mx-2"
            src="https://png.pngtree.com/element_our/png/20180918/chef-cooking-fried-chicken-and-delicious-sign-png_103460.jpg"
            alt=""
          />
          RECIPE HUNTER
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li tabIndex={0}>
            <Link className="justify-between" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            {user ? (
              <li>
                <button onClick={handleLogout} className="btn btn-warning">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="btn btn-warning">
                  Login
                </Link>
              </li>
            )}
            {user && (
              <li>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        className="rounded-full"
                        src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwImtn3CCss38xBhuzmmkIDJas4Mc2xghPxVL2Xqr6cxVYP_-MdwT07DR1HAomtia2Z_c&usqp=CAU" }
                        alt=""
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        <p>{user.displayName}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
