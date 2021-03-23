import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";

import HeaderStats from "components/Headers/HeaderStats.js";

// components

import MapExample from "components/Maps/MapExample.js";

export default function Maps() {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      
          </div>
        </div>
      </div>
      
    </>
  );
}

