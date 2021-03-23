
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

export default function GroupMembersTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"PSO/CC Details"}
            color= {"light"}
            rows = {["PSO NO.","PSO Date","Comments","CC No","CC Date",""]}
            values = {
              [["DD34V5672M","14,000","12/21/23","121jnjas","12/3/2021",<DropDown />]]
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
  


  