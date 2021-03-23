import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

// components

import CustomerListTable from "./CustomerListTable";


export default function CustomerList() {
  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CustomHeaderStats widgets={[
          {"name":"Customers",value:2332,icon:"far fa-chart-bar",color:"bg-red-500"},
          {"name":"Non Assigned",value:"20",icon:"fas fa-users",color:"bg-orange-500"},
          {"name":"Total Due",value:"2,00,00",icon:"fas fa-chart-pie",color:"bg-pink-500"},
          {"name":"Total Tickets",value:"150/200",icon:"fas fa-percent",color:"bg-pink-500"},

        ]
        }/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <CustomerListContent />
        </div>
      </div>
      
    </>
    
  );
}

const CustomerListContent = () =>{
    return (<div className="flex flex-wrap mt-4">
       <div className="w-full lg:w-4/12 px-4">
              <SelectDate placeholder="Start date" onchange={(val)=>{console.log(val)}}/>
      </div>
      <div className="w-full lg:w-4/12 px-2">
        <SelectDate placeholder="End date" onchange={(val)=>{console.log(val)}}/>
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <SearchInput/>
      </div>
      <div className="w-full mb-12 px-4">
        <CustomerListTable />
      </div>
  </div>);
}

const SearchInput = () =>{
  return (
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <input type="text" placeholder="Search" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <i class="fas fa-search"></i>
      </span>
    </div>
  )
}

const SelectDate = ({placeholder,onchange}) =>{

  return (
    <div class="mb-3 pt-0">
      <input placeholder={placeholder} type="text" onChange={(e)=>(onchange(e.target.value))} onFocus={(e)=>e.target.type='date'}  class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
    </div>
  )
}


  