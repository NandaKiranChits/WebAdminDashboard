import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';
import {view} from '@risingstack/react-easy-state';
import voucherStore from './VoucherStore';

export default view(()=>{

    let values = [];

    voucherStore.view_data.forEach((doc)=>{
        values.push(
          [
            doc.voucher_no,
            doc.date.toDate().toLocaleDateString(),
            doc.group_id,
            doc.ticket_no,
            doc.name,
            doc.amount,
            doc.type,
            doc.comments,
            <DropDown />
          ]
        )
    })  


    return (
      <>
        <CustomTable 
            tableName = {"Vouchers Table"}
            color= {"light"}
            rows = {["Voucher ID","Date","Group ID","Ticket ID","Name","Amount","Type","Comments",""]}
            values = {values}
        />
      </>
    );
})


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
