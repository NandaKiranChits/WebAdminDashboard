import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import CustomerProfileDesc from "./CustomerProfileDesc.js";

import BankDetails from './BankDetails';
import CustomerTickets from './CustomerTickets';
import Installments from './Installments';
import AuctionDetails from './AuctionDetails';
import PaymentDetails from './PaymentDetails';
import Vouchers from './Vouchers';

export default function CustomerProfile(){
    return (
        <>  
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                    {"name":"Total Tickets",value:3,icon:"far fa-chart-bar",color:"bg-red-500"},
                    {"name":"Total Prized",value:"1/3",icon:"fas fa-users",color:"bg-orange-500"},
                    {"name":"Total Due",value:"30,00,00",icon:"fas fa-chart-pie",color:"bg-pink-500"},
                    {"name":"Completed",value:"1/3",icon:"fas fa-percent",color:"bg-pink-500"},
                ]}/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <ProfileContent />
                </div>
            </div>
        </>
    )
} 

const ProfileContent = () =>{
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-2">
                  <SelectGroupId />
              </div>
              <div className="w-full lg:w-6/12 px-2">
                <EnterTicket />
              </div>
            </div>
            <CustomerTickets />
            <BankDetails />
            <SelectGroup />
            <AuctionDetails />
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <CustomerProfileDesc />
          </div>

          <div className="w-full lg:w-12/12 px-4">
            <Installments />
            <PaymentDetails />
            <Vouchers />
          </div>
        </div>
      </>
    );
  }

const SelectGroupId = () => {
  return (
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <select class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
        <option>GRS401</option>
      </select>
    </div>
  )
}


const EnterTicket = () =>{
    return (
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input type="text" placeholder="Ticket No." class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
        
      </div>
    )
  }


const SelectGroup = () =>{
  return (
    <div className="w-full lg:w-4/12 px-0">
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <i class="fas fa-users"></i>
      </span>
      <select class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
        <option>GRS401</option>
      </select>
    </div>
    </div>
  )
}

