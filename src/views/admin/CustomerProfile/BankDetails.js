import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function BankDetails(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Bank Account Details"
            rows ={["Sl No.","Bank Name","Account No","IFSC Code",""]}
            values = {
                [
                    ["1","SBI","63632311","SBIN0011819",<DropDown />],
                    ["2","SBI","63632311","SBIN0011819",<DropDown />]
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
  
