import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function PaymentDetailsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Customer List"}
            color= {"light"}
            rows = {["Cust ID","Name","Phone","Email","No of Tickets",""]}
            values = {
              [[121,
                "Vinay P",
              "9019301344","vinayrasal7@gmail.com","1",<DropDown />],
              [121,
                "Vinay P",
              "9019301344","vinayrasal7@gmail.com","1",<DropDown />],
              [121,
                "Vinay P",
              "9019301344","vinayrasal7@gmail.com","1",<DropDown />],
              [121,
                "Vinay P",
              "9019301344","vinayrasal7@gmail.com","1",<DropDown />]
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
