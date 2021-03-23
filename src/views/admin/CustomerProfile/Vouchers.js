import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function Installments(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Vouchers"
            rows ={["Voucher No","Date","Ticket","Amount","Type","Comment", ""]}
            values = {
                [
                    [1,"12-2-2020","12","14,000","CREDIT","No Comments",<DropDown />],
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
  
