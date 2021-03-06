import React from 'react';

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import SelectDate from './SelectDate';
import SearchVoucher from './SearchVoucher';



import VouchersTable from "./VouchersTable";


const Payments = () =>{
    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                    {"name":"Today",value:"50,000",icon:"far fa-chart-bar",color:"bg-red-500"},
                    {"name":"Today CASH",value:"5,000",icon:"fas fa-users",color:"bg-orange-500"},
                    {"name":"Today NEFT",value:"40,000",icon:"fas fa-chart-pie",color:"bg-pink-500"},
                    {"name":"Today CHEQUE",value:"5,000",icon:"fas fa-percent",color:"bg-pink-500"},
                ]
                }/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <div className="flex flex-wrap mt-4">
                    <SelectDate />
                    <div className="w-full lg:w-4/12 px-2">
                        <SearchVoucher/>
                    </div>
                    <div className="w-full mb-12 px-4">
                        <VouchersTable />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}


export default Payments;