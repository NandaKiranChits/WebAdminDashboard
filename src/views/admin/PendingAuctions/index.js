import React from 'react';

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import PendingAuctionTable from "./PendingAuctionTable.js";

const PendingAuctions = () =>{
    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                    {"name":"Auctions",value:5,icon:"far fa-chart-bar",color:"bg-red-500"},
                    {"name":"Eligible Bidders",value:"45",icon:"fas fa-users",color:"bg-orange-500"},
                    {"name":"Total Value",value:"2,00,00",icon:"fas fa-chart-pie",color:"bg-pink-500"},
                    {"name":"Total Due",value:"3,00,000",icon:"fas fa-percent",color:"bg-pink-500"},
                ]
                }/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <PendingAuctionTable />
                </div>
            </div>
        </>
    )
}


export default PendingAuctions;