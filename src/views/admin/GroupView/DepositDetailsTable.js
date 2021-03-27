
import CustomTable from '../../CustomTable';

import CustomDropDown from '../../CustomDropdown';
import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var value = [];
    if(groupViewStore.group_data!==null){
      value.push(
        [
          groupViewStore.group_data.deposit_cert_no,
          groupViewStore.group_data.deposit_amount,
          groupViewStore.group_data.deposit_date.toDate().toLocaleDateString(),
          groupViewStore.group_data.rate_of_interest,
          <DropDown />
        ]
      )
    }
    return (
      <>
        <CustomTable 
            tableName = {"Deposit Details"}
            color= {"light"}
            rows = {["DEPOSIT CERT NO.","DEPOSIT AMOUNT","DEPOSIT DATE","DEPOSIT BANK","DEPOSIT RATE OF INTEREST",""]}
            values = {value
            }
        />
      </>
    );
  })

function DropDown(){
  return (
    <CustomDropDown 
        dropDownItems={
          [
            {"name":"Edit",callFunction:()=>{console.log("Do nothing");}}
          ]
        }
    />
  )
}


  