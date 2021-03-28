import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{

    let values = [];
    let index = 1;
    custProfileStore.auction_data.forEach((doc)=>{
      values.push(
        [
          index,
          doc.group_id,
          doc.auction_no,
          doc.date_and_time.toDate().toISOString(),
          doc.status==="pending"?"":doc.bidding_details.bid_amount,
          doc.status==="pending"?"":(doc.chit_value-doc.bidding_details.bid_amount),
          doc.status==="pending"?"":(doc.payment_details.amount_disbursed),
          <DropDown />
        ]
      );
      index = index + 1;
    })

    return (
        <CustomTable 
            color={"light"}
            tableName = "Auction"
            rows ={["Sl No.","Group ID", "Auct No.","Auct Date","Bid Amount","Prize Money","Settled Amount",""]}
            values = {values}

        />
    )
})

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
  
