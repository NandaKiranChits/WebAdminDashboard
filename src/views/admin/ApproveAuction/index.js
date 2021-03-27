import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";
import ApproveAuctionForm from "./ApproveAuctionForm";
import {view} from  '@risingstack/react-easy-state';
import approveAuctionStore from './ApproveAuctionStore';


export default view(()=>{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var group_id = url.searchParams.get("group_id");
    var auction_no = url.searchParams.get("auction_no");

    if(approveAuctionStore.group_id!==group_id || approveAuctionStore.auct_no!==auction_no){
      approveAuctionStore.setGroupID(group_id);
      approveAuctionStore.setAuctNo(auction_no);
    }

    
    console.log("Group id = ",group_id);
    console.log("Auction no = ",auction_no);
    
    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <CustomHeaderStats widgets={[ ]}/>
          
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <ApproveAuctionForm />
          </div>
        </div>
      </>
    );
})

  