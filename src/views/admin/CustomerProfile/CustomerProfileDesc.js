import React from "react";

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

// components

export default view(()=>{
  return (  
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              
              <div className="flex justify-center py-3 lg:pt-0 pt-3">
                <div className="mr-4 p-3 text-center">
                  <span className="text-sm text-blueGray-400">Customer ID</span>
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {custProfileStore.customer_data===null?"NKCPL":custProfileStore.customer_data.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {custProfileStore.customer_data===null?"NandaKiran Chits":custProfileStore.customer_data.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {custProfileStore.customer_data===null?"Mangalore,Karnataka,India":custProfileStore.customer_data.address}
            </div>
            <div className="mb-2 text-blueGray-600 mt-5">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              {custProfileStore.customer_data===null?"Unavailable":custProfileStore.customer_data.phone} / {custProfileStore.customer_data===null?"":custProfileStore.customer_data.phone2}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
              {custProfileStore.customer_data===null?"contact@nandakiranchits.com":custProfileStore.customer_data.email}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-male mr-2 text-lg text-blueGray-400"></i>
                Father/Husband : {custProfileStore.customer_data===null?"MD , NKCPL":custProfileStore.customer_data.father_husband_name}
            </div>
          </div>
          <div className="text-center border-t mt-5 p-5">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Nominee
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
              {custProfileStore.customer_data===null?"":custProfileStore.customer_data.nominee_name}
            </div>
            <div className="mb-2 text-blueGray-600 mt-5">
              <i className="fas fa-users mr-2 text-lg text-blueGray-400"></i>
              {custProfileStore.customer_data===null?"":custProfileStore.customer_data.nominee_relationship}
            </div>
            <div className="mb-2 text-blueGray-600 mt-5">
              <i className="fas fa-users mr-2 text-lg text-blueGray-400"></i>
              {custProfileStore.customer_data===null?"":custProfileStore.customer_data.nominee_phone}
            </div>

          </div>
          <div className="text-center border-t mt-5 p-5">
            <button onClick={()=>{}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
               Generate Intimation Letter
            </button>
          </div>
        </div>
      </div>
    </>
  );
})
