
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=> {
    let values = [];

    groupViewStore.payments_data.forEach((doc)=>{
      values.push(
        [
          `${doc.payment_id} ${doc.mr_details.mr_no===""?"":"/"+doc.mr_details.mr_no}`,
          doc.ticket_no,
          doc.cust_details.name,
          doc.date.toDate().toLocaleDateString(),
          doc.inst_details.inst_no,
          doc.payment_details.total_paid,
          doc.cust_details.phone,
          doc.payment_details.payment_method,
          doc.status,
          <DropDown />
        ]
      )
    })
    return (
      <>
        <CustomTable 
            tableName = {"Payment Details"}
            color= {"light"}
            rows = {["Receipt no/MR No","Ticket No.","Name","Date","Inst No.","Amount","Phone","Payment Method","Status",""]}
            values = {values}
        />
      </>
    );
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
  


  