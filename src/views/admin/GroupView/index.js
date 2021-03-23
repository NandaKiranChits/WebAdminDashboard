import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";

import GroupViewStats from "./GroupViewStats.js";
import GroupProfile from './GroupProfile';
import GroupMembersTable from "./GroupMembersTable";
import DepositDetailsTable from './DepositDetailsTable';
import PSOCCDetailsTable from './PSOCCDetails';
import GroupSettingsTable from './GroupSettingsTable';
import AuctionDetailsTable from './AuctionDetailsTable';
import VoucherDetails from './Vouchers';
import PaymentDetails from './Payments';


export default function Group() {
  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <GroupViewStats />
        <div className="px-4 md:px-4 mx-auto w-full -m-24">
              <GroupViewContent />
        </div>
      </div>
      
    </>
    
  );
}

const GroupViewContent  = () =>{
  
    return (<div className="flex flex-wrap mt-4">
    <div className="w-full mb-12 px-4">
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <GroupProfile />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <DepositDetailsTable color={"light"}/>
        </div>
       
        <div className="w-full lg:w-6/12 px-4">
          <PSOCCDetailsTable color={"light"}/>
        </div>

        <div className="w-full lg:w-6/12 px-4">
          <GroupSettingsTable color={"light"}/>
        </div>

        

      </div>
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-12/12 px-4">
          <GroupMembersTable color={"light"}/>
        </div>

        <div className="w-full lg:w-12/12 px-4">
          <AuctionDetailsTable color={"light"}/>
        </div>

        <div className="w-full lg:w-12/12 px-4">
          <VoucherDetails color={"light"}/>
        </div>

        <div className="w-full lg:w-12/12 px-4">
          <PaymentDetails color={"light"}/>
        </div>
        
        
        
      </div>
     
    </>
    </div>
  </div>);
  
}

