
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

export default function AuctionDetailsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Auction Details"}
            color= {"light"}
            rows = {["Auct No.","Date","Bid Amount","Dividend","Ticket No.","Name","Phone","Status",""]}
            values = {
              [["1","12/21/23","30,000","2,000","12","Vinay P","9019301344","Pending",<DropDown />]]
            }
        />
      </>
    );
  }

  function DropDown(){
    return (
      <CustomDropDown 
          dropDownItems={
            [
              {"name":"Edit",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Cancel",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Re-Auction",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Pay",callFunction:()=>{console.log("Do nothing");}},
            ]
          }
      />
    )
  }
  


  