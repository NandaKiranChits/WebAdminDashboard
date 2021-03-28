import React from "react";
import LoginStore from 'views/auth/LoginStore';
import {view} from '@risingstack/react-easy-state';

export default view(()=>{
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            III TECH
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
            
              <button
                onClick={()=>{LoginStore.signout()}}
                className="bg-white text-indigo active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Logout
              </button>
            </div>
          </form>
          {/* User */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
})
