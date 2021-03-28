import React from 'react';

import AdminNavbar from "components/Navbars/AdminNavbar.js";

import PendingAuctionTable from "./PendingAuctionTable.js";

const PendingAuctions = () =>{
    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
                <h4 style={{color:"white",fontWeight:'bold'}}>Upcoming Auctions</h4>
            </div>
          </div>
        </div>
      </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <PendingAuctionTable />
                </div>
            </div>
        </>
    )
}


export default PendingAuctions;