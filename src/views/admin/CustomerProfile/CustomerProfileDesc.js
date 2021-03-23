import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              
              <div className="flex justify-center py-3 lg:pt-0 pt-3">
                <div className="mr-4 p-3 text-center">
                  <span className="text-sm text-blueGray-400">Customer ID</span>
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    CUST-001
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Bangalore India
            </div>
            <div className="mb-2 text-blueGray-600 mt-5">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              9109301344 / 9108205639
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                vinayrasal7@gmail.com
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-male mr-2 text-lg text-blueGray-400"></i>
                Father/Husband : James Idiot
            </div>
          </div>
          <div className="text-center border-t mt-5 p-5">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Nominee
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
                Elizabeth
            </div>
            <div className="mb-2 text-blueGray-600 mt-5">
              <i className="fas fa-users mr-2 text-lg text-blueGray-400"></i>
                Daughter
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
