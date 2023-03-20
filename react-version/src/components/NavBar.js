import React, { useState } from "react";

const NavBar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        id="nav"
        className="translate-y-auto sticky top-0 z-40 h-max w-full flex-1 justify-center bg-primary p-6 transition duration-500 lg:p-4"
      >
        <div className="mx-auto max-w-6xl flex-col flex-wrap items-center justify-between text-primary">
          <div className="flex flex-1 flex-wrap items-center font-open-sans">
            {/* <!-- Nav Title --> */}
            <button
              id="navLogo"
              type="button"
              className="z-50 inline-flex flex-1 gap-2 text-xl font-bold"
            >
              <div className="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">
                Peter LIoyd
              </div>
            </button>
            {/* <!-- End Nav Title --> */}

            {/* <!-- Nav Menu --> */}
            <div
              id="navMove"
              className="invisible fixed inset-0 z-40 flex-none basis-full translate-x-full bg-primary text-lg transition duration-500 lg:visible lg:relative lg:top-0 lg:basis-auto lg:translate-x-0 lg:transition-none"
            >
              <div className="flex h-full flex-col flex-nowrap items-center justify-center space-x-0 space-y-8 p-6 lg:flex lg:flex-row lg:justify-end lg:space-x-14 lg:space-y-0 lg:p-0">
                <button className="navMenuAbout text-xl hover:text-secondary lg:text-base">
                  About Me
                </button>
                <button
                  id="navMenuPortfolio"
                  className="text-xl hover:text-secondary lg:text-base"
                >
                  My Portofolio
                </button>
                <button
                  id="navMenuContact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-primary px-8 py-4 hover:border-transparent hover:bg-senary hover:font-semibold hover:text-senary"
                >
                  GET IN TOUCH
                  {/* <!-- Arrow top left --> */}
                  <svg
                    className="h-6 w-6 fill-primary group-hover:fill-tertiary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z" />
                  </svg>
                  {/* <!-- End Arror Top Left --> */}
                </button>
              </div>
            </div>
            {/* <!-- End Nav Menu --> */}

            {/* <!-- Nav Icon --> */}
            <div className="z-50 flex-none">
              <div className="flex justify-end lg:hidden">
                <button
                  id="navButton"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary"
                >
                  {/* <!-- Open Icon --> */}
                  <svg
                    className="navMenuIcon block w-8 fill-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z" />
                  </svg>
                  {/* <!-- End Open Icon --> */}

                  {/* <!-- Close Icon --> */}
                  <svg
                    className="navMenuIcon hidden w-8 fill-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" />
                  </svg>
                  {/* <!-- End Close Icon --> */}
                </button>
              </div>
            </div>

            {/* <!-- End Nav Icon --> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
