import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const links = [
    { text: "HOME", id: "home", href: "/" },
    { text: "PROJECTS", id: "projects", href: "/projects" },
    { text: "CONTACT", id: "contact", href: "/contact" },
  ];

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?cs=srgb&dl=pexels-pixabay-39284.jpg&fm=jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <nav>
          <div className="mx-auto max-w-5xl px-2 py-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {links.map((link, index) => (
                      <Link
                        to={{
                          pathname: link.href,
                        }}
                        key={index}
                        className={`mx-4 px-3 py-6 text-base font-bold text-white hover:text-red-600 ${
                          pathname === link.href &&
                          "border-b-4 border-solid border-[#FF0000]"
                        }`}
                        aria-current={
                          link.text === "About Me" ? "page" : undefined
                        }
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-semibold text-white hover:text-red-700"
                  aria-current={link.ariaCurrent || undefined}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Layout;
