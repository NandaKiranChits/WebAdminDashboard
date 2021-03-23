import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function VouchersTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Vouchers Table"}
            color= {"light"}
            rows = {["Voucher ID","Date","Ticket ID","Name","Amount","Type","Comments",""]}
            values = {
              [[1,
                "21/12/1999",
              "GRS501/12","Vinay P","12,000","CREDIT","NO Comments",<DropDown />],
             
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
