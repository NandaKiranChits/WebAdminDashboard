import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';


import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{
    let values = [];

    custProfileStore.installments_data.forEach((doc)=>{
      values.push(
        [
          doc.group_id,
          doc.ticket_no,
          doc.auction_no,
          doc.status.toUpperCase(),
          doc.due_date.toDate().toLocaleDateString(),
          doc.installment_value,
          doc.dividend,
          doc.interest,
          doc.other_charges,
          doc.installment_value-doc.dividend+doc.interest,
          doc.total_paid - doc.accepted_from_other,
          doc.accepted_from_other,
          doc.advance_paid,
          doc.donated,
          doc.comments,
          <DropDown />
        ]
      )
    })
    return (
        <CustomTable 
            color={"light"}
            tableName = "Installments"
            rows ={["Sl.No","Ticket","Inst No.","Status","Due Date","Inst Value","Dividend","Interest", "Other Charges" ,"Total","Total Paid","Adusted From Other Inst","Excess Paid","Used in Other Inst","Comments",""]}
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
  
