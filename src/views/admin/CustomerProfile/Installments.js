import React from 'react';
import CustomTable from '../../CustomTable';
import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';
import {Link} from 'react-router-dom';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{
    let values = [];

    custProfileStore.view_installments_data.forEach((doc)=>{
      values.push(
        [
          doc.group_id,
          doc.ticket_no,
          doc.auction_no,
          doc.status.toUpperCase(),
          doc.due_date.toDate().toLocaleDateString(),
          doc.installment_value.toLocaleString(),
          doc.dividend.toLocaleString(),
          doc.interest.toLocaleString(),
          doc.waived_interest.toLocaleString(),
          doc.other_charges.toLocaleString(),
          (doc.installment_value-doc.dividend+(doc.interest-doc.waived_interest)).toLocaleString(),
          (doc.total_paid - doc.accepted_from_other).toLocaleString(),
          doc.accepted_from_other.toLocaleString(),
          doc.advance_paid.toLocaleString(),
          doc.donated.toLocaleString(),
          doc.comments,
          <DropDown group_id={doc.group_id} ticket_no={doc.ticket_no} inst_no={doc.auction_no} interest={doc.interest-doc.waived_interest}/>
        ]
      )
    })
    return (
        <CustomTable 
            color={"light"}
            tableName = "Installments"
            rows ={["Sl.No","Ticket","Inst No.","Status","Due Date","Inst Value","Dividend","Interest","Waived Interest","Other Charges" ,"Total","Total Paid","Adusted From Other Inst","Excess Paid","Used in Other Inst","Comments",""]}
            values = {values}

        />
    )
})

function DropDown({group_id,ticket_no,inst_no,interest}){

    let temp = [];

    if(interest>0){
      temp.push(
        <OnClickWidget name="Waive Interest" route={`/admin/waiveInterest?group_id=${group_id}&ticket_id=${ticket_no}&inst_no=${inst_no}`}/>,
      )
    }

    temp.push(
      <OnClickWidget name="View" route={"/admin/pendingAuction"}/>
    )

    return (
        <CustomDropDownChildWidget 
            dropDownItems={temp}
        />
      
    )
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
  
  
