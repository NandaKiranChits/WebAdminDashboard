
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var values = [];

    groupViewStore.group_members.forEach((cust)=>{
      values.push(
        [
          cust.ticket_no,
          cust.name,
          cust.cust_id,
          cust.phone,
          cust.status +" "+(cust.prizedInstallment===null?"":cust.prizedInstallment),
          cust.account_balance,
          cust.lean_details.isLean.toString(),
          <DropDownCustom />
        ]
      )
    })
    return (
      <>
        <CustomTable 
          color={"light"}
          tableName={"Group Members"}
          rows = {
            ["Ticket No","Name","Customer ID","Phone","Stage","Account Balance","isLean", ""]
          }
          values = {values}
        />
      </>
    );
  })


  function DropDownCustom(){
    return (
      <CustomDropDown
        dropDownItems = {
          [
            {"name":"View","callFunction":()=>{console.log("do nothing");}}
          ]
        } 
      />
    )
  }

  