import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';


import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';
import isEmpty from '../util/isEmpty';

export default view(()=>{

   let values = [];

   custProfileStore.view_payments_data.forEach((doc)=>{
     values.push(
       [
         `${doc.payment_id} ${isEmpty(doc.mr_details.mr_no)?"":"/"+doc.mr_details.mr_no}`,
         doc.ticket_no,
         doc.inst_details.inst_no,
         `${doc.date.toDate().toLocaleDateString()} ${isEmpty(doc.mr_details.mr_date)?"":"/ "+doc.mr_details.mr_date.toDate().toLocaleDateString()}`,
         doc.payment_details.total_paid,
         doc.payment_details.payment_method,
         doc.status,
         <DropDown />
       ]
     )
   })

    return (
        <CustomTable 
            color={"light"}
            tableName = "Payment"
            rows ={["Payment No./MR No.","Ticket","Inst No.","Online Date/Mr Date","Paid","Payment Method","Status",""]}
            values = {values}

        />
    )
});

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
  
