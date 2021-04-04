import React from 'react';

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import SearchPayments from './SearchPayments';

import PaymentsTable from "./PaymentsTable";
import SelectDate from './SelectDate';

import {view} from '@risingstack/react-easy-state';
import paymentStore from './paymentsStore';

export default view(()=>{

  let total = 0,cash=0,neft=0,cheque =  0;

  paymentStore.view_data.forEach((payment)=>{
    let {payment_method,total_paid} = payment.payment_details;
    if(payment_method==="CASH"){
        cash += total_paid;
    }
    else if(payment_method==="NEFT"){
        neft += total_paid;
    }
    else{
      cheque += total_paid;
    }
    total += total_paid;
  })


    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                        {"name":"Total",value:total,icon:"far fa-chart-bar",color:"bg-red-500"},
                        {"name":"CASH",value:cash,icon:"fas fa-users",color:"bg-orange-500"},
                        {"name":"NEFT",value:neft,icon:"fas fa-chart-pie",color:"bg-pink-500"},
                        {"name":"CHEQUE",value:cheque,icon:"fas fa-percent",color:"bg-pink-500"},
                    ]
                }/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <PaymentsContent />
                </div>
            </div>
        </>
    )
})

const PaymentsContent = () =>{
    return (<div className="flex flex-wrap mt-4">
      <SelectDate />
      <div className="w-full lg:w-4/12 px-2">
        <SearchPayments/>
      </div>
      <div className="w-full mb-12 px-4">
        <PaymentsTable />
      </div>
  </div>);
}




