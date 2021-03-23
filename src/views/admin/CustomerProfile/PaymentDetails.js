import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function BankDetails(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Payment"
            rows ={["Payment No./MR No.","Ticket","Inst No.","Online Date/Mr Date","Paid","Payment Method",""]}
            values = {
                [
                    ["22121/121","12","3","1-3-2021/1-4-2021","16,000","CASH",<DropDown />],
                    ["222121/121","11","4", "1-4-2022/1-5-2022","34,000","CASH",<DropDown />]
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
  
