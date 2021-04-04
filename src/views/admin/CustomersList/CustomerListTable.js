import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';
import {view} from '@risingstack/react-easy-state';
import customerStore from './customerStore';

export default view(()=> {
    var customerData = [];


    if(customerStore.customerData.length===0){
        customerStore.getCustomer();
    }

    customerStore.view_data.forEach((cust)=>{
      customerData.push([
          cust.phone,
          cust.name,
          cust.phone2,
          cust.email,
          cust.no_of_tickets,
          <DropDown />
      ]);
    })
    return (
      <>
      {
        customerStore.isLoading &&
        <p>Loading...</p>
      }
      {
          (!customerStore.isLoading) &&
          <CustomTable 
            tableName = {"Customer List"}
            color= {"light"}
            rows = {["Cust ID","Name","Phone2","Email","No of Tickets",""]}
            values = {customerData}
          />
        }
      </>
    );
  })


  function DropDown(){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="View" route="/admin/groupView"/>,
              <OnClickWidget name="Add Ticket" route="/admin/addNewMemberToGroup"/>
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