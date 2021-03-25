import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";
import SelectDates from './SelectDates';
import SearchInput from "./SearchInput";

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
      <SelectDates />
      <div className="w-full lg:w-4/12 px-4">
        <SearchInput/>
      </div>
      <div className="w-full mb-12 px-4">
        <CustomerListTable />
      </div>
  </div>);
}





  