import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables() {
  return (
    <>
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <TableContent />
      </div>
    </div>
    
  </>
  );
}


const TableContent = () =>{
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <CardTable />
      </div>
      <div className="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div>
    </div>
  </>
  )
}
