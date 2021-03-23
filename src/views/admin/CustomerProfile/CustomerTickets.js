import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function BankDetails(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Customer Tickets"
            rows ={["Group ID","Ticket No.","Account Balance","Total Paid","Total Due","Stage",""]}
            values = {
                [
                    ["GRS501","12","50,000","34,000","16,000","Non-Prized",<DropDown />],
                    ["GRS502","11","50,000","34,000","16,000","Non-Prized",<DropDown />]
                ]
            }

        />
    )
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
  
