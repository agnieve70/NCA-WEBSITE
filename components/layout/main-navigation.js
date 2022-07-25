/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    {
      link: "/",
      title: "HOME",
    },
    {
      link: "/services",
      title: "SERVICES",
    },
    {
      link: "/about",
      title: "ABOUT US",
    },
    {
      link: "/contact",
      title: "CONTACT US",
    },
  ];

  const nav1 = [
    {
      link: "/prices",
      title: "PRICES",
    },
    {
      link: "/get-started",
      title: "GET STARTED",
    },
  ];
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-primary-1 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image className="pt-2" src={`/nca.png`} alt='logo' width={70} height={70} />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {nav.length > 0 && nav.map((e, index) => <a key={index}
                    href={`${e.link}`}
                    className="text-white hover:bg-primary-2 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {e.title}
                  </a>)}
                </div>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-primary-2 inline-flex items-center
                justify-center p-2 rounded-md
                text-white hover:text-white
                hover:bg-primary-2 focus:outline-none
                focus:ring-2 focus:ring-offset-2
                focus:ring-offset-primary-3 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {nav.length > 0 && nav.map((e, index) => <a key={index}
                  href={`${e.link}`}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {e.title}
                </a>)}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default MainNavigation;
