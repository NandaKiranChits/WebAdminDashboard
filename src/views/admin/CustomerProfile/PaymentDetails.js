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
         doc.payment_details.total_paid.toLocaleString(),
         doc.payment_details.payment_method,
         doc.status,  
         <DropDown receipt_data={doc}/>
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

function printReceipt(receipt_data){
  console.log("receipt data = ",receipt_data);
  window.open(`http://nandakiranchits.com/payments.html?`+
                         `group_id=${receipt_data["group_id"]}&` +
                         `ticket_no=${receipt_data["ticket_no"]}&` +
                         `payment_id=${receipt_data["payment_id"]}&` +
                         `payment_method=${receipt_data["payment_details"]["payment_method"]}&` +
                         `payment_date=${receipt_data["date"].toDate().toLocaleDateString()}&` +
                         `inst_no=${receipt_data["inst_details"]["inst_no"]}&` + 
                         `cust_name=${receipt_data["cust_details"]["name"]}&` +
                         `cust_phone=${receipt_data["cust_details"]["phone"]}&` +
                         `amount=${receipt_data["payment_details"]["total_paid"]}`,"_blank");
}

function DropDown({receipt_data}){
    return (
      <CustomDropDown 
          dropDownItems={
            [
              {"name":"Print",callFunction:()=>{printReceipt(receipt_data);}},
              {"name":"Cancel",callFunction:()=>{console.log("Do nothing");}},
            ]
          }
      />
    )
  }
  
