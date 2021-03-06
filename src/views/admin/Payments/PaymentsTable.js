import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';
import {view} from '@risingstack/react-easy-state';
import paymentsStore from './paymentsStore';

export default view(()=>{
    paymentsStore.getTodaysData();

    var values = [];

    paymentsStore.view_data.forEach((doc)=>{
      console.log("doc = ",doc);
      values.push(
        [
          `${doc.payment_id===null?"Not Assigned Yet":doc.payment_id}/${doc.mr_details.mr_no===null?"":doc.mr_details.mr_no}`,
          `${doc.date.replaceAll("/","-")} / ${doc.mr_details.mr_date===null?"":doc.mr_details.mr_date.replaceAll("/","-")}`,
          doc.ticket_no,
          doc.cust_details.name,
          doc.inst_details.inst_no,
          doc.payment_details.total_paid,
          doc.payment_details.payment_method,
          doc.status,
          <DropDown receipt_data={doc}/>
        ]
      )
    })

    return (
      <>
        <CustomTable 
            tableName = {"Payments"}
            color= {"light"}
            rows = {["Receipt ID/MR No.","Receipt Date/MR Date","Ticket","Name","Inst No","Total Paid","Payment Method","Status",""]}
            values = {values}
        />
      </>
    );
  })


function DropDown({receipt_data}){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <div className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={()=>{printReceipt(receipt_data)}}
              >
                Print
              </div>
                ,
              <OnClickWidget name="View" route="/admin/groupView"/>,
              <OnClickWidget name="Add Ticket" route="/admin/groupView"/>
            ] 
          }
      />
    )
}

function printReceipt(receipt_data){
  console.log("receipt data = ",receipt_data);

  window.open(`https://us-central1-chitstorm-d6bd1.cloudfunctions.net/printPaymentReceipt?payment_id=${receipt_data["payment_id"]}`);
}
  

const OnClickWidget =({name,route}) =>{
  return (<Link 
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            to={route}
          >
            {name}  
          </Link>
          );
}
