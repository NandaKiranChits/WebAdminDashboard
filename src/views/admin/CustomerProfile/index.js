import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import MainContent from './MainContent';


import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{

    var total_prized =0;
    var total_due = 0;
    var completed = 0;

    custProfileStore.groupCustomerData.forEach((groupCustomer)=>{
      if(groupCustomer.status==="Prized"){
          total_prized = total_prized + 1;
      }
      if(groupCustomer.status==="completed"){
        completed = completed + 1;
      }
    });

    custProfileStore.installments_data.forEach((inst)=>{
        if(inst.status==="due"){
          total_due = total_due + (inst.installment_value-inst.dividend+inst.interest-inst.waived_interest-inst.total_paid);
        }
    })

    const url = window.location.href;
    if(url.includes("phone")){
        const params = (new URL(url)).searchParams;
    
        const phone = params.get("phone");

        if((phone!==null) || (phone!==undefined)){
            custProfileStore.getDataUsingCustomerID(phone);
        }
    }

    return (
        <>  
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                    {"name":"Total Tickets",value:custProfileStore.groupCustomerData.length,icon:"far fa-chart-bar",color:"bg-red-500"},
                    {"name":"Total Prized",value:`${total_prized}/${custProfileStore.groupCustomerData.length}`,icon:"fas fa-users",color:"bg-orange-500"},
                    {"name":"Total Due",value:total_due,icon:"fas fa-chart-pie",color:"bg-pink-500"},
                    {"name":"Completed",value:`${completed}/${custProfileStore.groupCustomerData.length}`,icon:"fas fa-percent",color:"bg-pink-500"},
                ]}/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <MainContent />
                </div>
            </div>
        </>
    )
}) 
