
import CustomTable from '../../CustomTable';
import CustomDropDown from '../../CustomDropdown';

export default function GroupMembersTable({ color }) {
    return (
      <>
        <CustomTable 
          color={"light"}
          tableName={"Group Members"}
          rows = {
            ["Ticket No","Name","Customer ID","Phone","Stage","Due",""]
          }
          values = {
            [
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
              ["1","Vinay P","CUST-001","9019301344","Due","20,000",<DropDownCustom />],
            ]
          }
        />
      </>
    );
  }


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

  