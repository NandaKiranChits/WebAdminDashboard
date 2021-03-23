
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

export default function GroupSettingsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Group Settings"}
            color= {"light"}
            rows = {["Priced Interest(%)","Non Priced(%)","Foreman Commission(%)","Min Bid(%)","Max Bid(%)",""]}
            values = {
              [["3%","4%","5%","5%","30%",<DropDown />]]
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
  


  