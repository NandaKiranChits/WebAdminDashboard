
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

export default function PaymentDetailsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Payment Details"}
            color= {"light"}
            rows = {["Receipt no/MR No","Ticket No.","Name","Date","Inst No.","Amount","Phone","Payment Method","Status",""]}
            values = {
              [["1/23","12","Vinay P","12/12/12","1","4,000","9019301344","CASH","Success",<DropDown />]]
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
  


  