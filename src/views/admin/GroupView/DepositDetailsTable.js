
import CustomTable from '../../CustomTable';

import CustomDropDown from '../../CustomDropdown';

export default function GroupMembersTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Deposit Details"}
            color= {"light"}
            rows = {["DEPOSIT CERT NO.","DEPOSIT AMOUNT","DEPOSIT DATE","DEPOSIT BANK","DEPOSIT RATE OF INTEREST",""]}
            values = {
              [["11212121","123000","12/23/23","SBI","10.0",<DropDown />]]
            }
        />
      </>
    );
  }

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


  