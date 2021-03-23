
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

export default function VouchersDetailsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Voucher Details"}
            color= {"light"}
            rows = {["Voucher No.","Date","Ticket No.","Amount","Type","Comment",""]}
            values = {
              [["1","12/21/23","1","2,000","CRedit","Nothing Happened",<DropDown />]]
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
              {"name":"Edit",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Cancel",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Re-Auction",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Pay",callFunction:()=>{console.log("Do nothing");}},
            ]
          }
      />
    )
  }
  


  