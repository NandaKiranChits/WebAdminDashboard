import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function Installments(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Installments"
            rows ={["Sl.No","Ticket","Inst No.","Due Date","Inst Value","Dividend","Adjustments","Interest", "Other Charges" ,"Total","Total Paid","Excess Paid", ""]}
            values = {
                [
                    ["GRS501","12","1","21/12/1999", "50,000","34,000","2,000","4000","3,000","0","0",<DropDown />],
                    ["GRS501","12","1","21/12/1999", "50,000","34,000","2,000","4000","3,000","0","0",<DropDown />],
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
  
