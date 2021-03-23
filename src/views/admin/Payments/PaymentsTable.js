import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function PaymentsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Payments"}
            color= {"light"}
            rows = {["Receipt ID/MR No.","Receipt Date/MR Date","Ticket","Name","Inst No","Total Paid","Payment Method",""]}
            values = {
              [["12/11",
                "2-2-2020/3-2-2020",
              "GRS501/10","Vinay P","12","40,000","CASH",<DropDown />],
              
                ]
            }
        />
      </>
    );
  }


  function DropDown(){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="View" route="/admin/groupView"/>,
              <OnClickWidget name="Add Ticket" route="/admin/groupView"/>
            ] 
          }
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
