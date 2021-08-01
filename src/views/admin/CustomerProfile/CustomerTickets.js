import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{

    let customerTickets = [];

    custProfileStore.groupCustomerData.forEach((doc)=>{
      customerTickets.push(
        [
          doc.group_id,
          doc.ticket_no,
          doc.account_balance,
          doc.total_amount_paid,
          0,
          doc.stage,
          <DropDown 
          cust_id={doc["cust_id"]}
          group_id={doc["group_id"]}
          ticket_no = {doc["ticket_no"]}
          />
        ]
      )
    })

    return (
        <CustomTable 
            color={"light"}
            tableName = "Customer Tickets"
            rows ={["Group ID","Ticket No.","Account Balance","Total Paid","Total Due","Stage",""]}
            values = {customerTickets}

        />
    )
})



function DropDown({cust_id,group_id,ticket_no}){
    return (
      <CustomDropDown 
          dropDownItems={
            [
              {"name":"Generate Intimation Letter",callFunction:()=>{custProfileStore.generateIntimationLetter(cust_id,group_id,ticket_no)}},
              {"name":"Edit",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Cancel",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Re-Auction",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Pay",callFunction:()=>{console.log("Do nothing");}},
            ]
          }
      />
    )
  }
  
