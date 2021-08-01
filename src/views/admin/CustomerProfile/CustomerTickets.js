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
          <DownloadIntimationLetter />,
          doc.group_id,
          doc.ticket_no,
          doc.account_balance,
          doc.total_amount_paid,
          0,
          doc.stage,
          <DropDown />
        ]
      )
    })

    return (
        <CustomTable 
            color={"light"}
            tableName = "Customer Tickets"
            rows ={["Intimation Letter","Group ID","Ticket No.","Account Balance","Total Paid","Total Due","Stage",""]}
            values = {customerTickets}

        />
    )
})

function DownloadIntimationLetter(){
  return (
    <button onClick={()=>{}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
      Generate Intimation Letter
    </button>
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
  
