import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function AuctionDetails(){
    return (
        <CustomTable 
            color={"light"}
            tableName = "Auction"
            rows ={["Sl No.","Group ID", "Auct No.","Auct Date","Bid Amount","Prize Money","Settled Amount",""]}
            values = {
                [
                    [1,"GRS501","12", "12/2/2020", "50,000","34,000","16,000",<DropDown />],
                    [2,"GRS502","11","12/2/2020","50,000","34,000","16,000",<DropDown />]
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
  
