import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

// components
import AddNewCustomer from "./AddNewCustomerForm";


export default function AddCustomer() {
  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CustomHeaderStats widgets={[
          {"name":"Total Groups",value:5,icon:"far fa-chart-bar",color:"bg-red-500"},
          {"name":"Total Members",value:"200/250",icon:"fas fa-users",color:"bg-orange-500"},
          {"name":"Total Due",value:"2,00,00",icon:"fas fa-chart-pie",color:"bg-pink-500"},
          {"name":"Prized",value:"150/200",icon:"fas fa-percent",color:"bg-pink-500"},

        ]
        }/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <AddNewCustomer />
        </div>
      </div>
      
    </>
    
  );
}

