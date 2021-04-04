import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";
import SearchInput from "./SearchInput";

// components

import CustomerListTable from "./CustomerListTable";


import {view} from '@risingstack/react-easy-state';
import customerStore from './customerStore';


export default view(()=>{
  var total = 0 , non_assigned = 0,viewing = 0,total_tickets = 0;

  customerStore.customerData.forEach((doc)=>{
    total = total + 1;
    if(doc.no_of_tickets===0){
      non_assigned = non_assigned + 1;
    }
    total_tickets += doc.no_of_tickets;
  })

  customerStore.view_data.forEach((doc)=>{
    viewing += 1;
  })


  
  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CustomHeaderStats widgets={[
          {"name":"Customers",value:total,icon:"far fa-chart-bar",color:"bg-red-500"},
          {"name":"Filtered",value:viewing,icon:"fas fa-chart-pie",color:"bg-pink-500"},
          {"name":"Non Assigned",value:non_assigned,icon:"fas fa-users",color:"bg-orange-500"},
          {"name":"Total Tickets",value:total_tickets+"/"+total,icon:"fas fa-percent",color:"bg-pink-500"},

        ]
        }/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <CustomerListContent />
        </div>
      </div>
      
    </>
    
  );
})



const CustomerListContent = () =>{
    return (<div className="flex flex-wrap mt-4">
      <div className="w-full lg:w-4/12 px-4">
        <SearchInput/>
      </div>
      <div className="w-full mb-12 px-4">
        <CustomerListTable />
      </div>
  </div>);
}





  