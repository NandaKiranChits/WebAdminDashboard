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
        <CustomHeaderStats widgets={[]}/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <AddNewCustomer />
        </div>
      </div>
      
    </>
    
  );
}

