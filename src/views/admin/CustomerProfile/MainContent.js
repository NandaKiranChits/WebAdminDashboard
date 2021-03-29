import React from "react";
import CustomerProfileDesc from "./CustomerProfileDesc.js";

import BankDetails from './BankDetails';
import CustomerTickets from './CustomerTickets';
import Installments from './Installments';
import AuctionDetails from './AuctionDetails';
import PaymentDetails from './PaymentDetails';
import IDProofs from './IDProofs';
//import Vouchers from './Vouchers';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

import GroupList from '../util/GroupList/index';




export default view(() =>{
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-2">
                  <SelectGroup value={custProfileStore.group_id} onChange={custProfileStore.setGroupID}/>
              </div>
              <div className="w-full lg:w-6/12 px-2">
                <EnterTicket value={custProfileStore.ticket_no} onChange={custProfileStore.setTicketNo}/>
              </div>
            </div>
            {
                custProfileStore.isLoading &&
                <p>Loading...</p>
            }
            {
                (!custProfileStore.isLoading) &&
                <>
                    <CustomerTickets />
                    <BankDetails />
                    <IDProofs />
                </>
            }
          </div>
           {
            (!custProfileStore.isLoading) &&
                <>
                    <div className="w-full lg:w-4/12 px-4">
                        <CustomerProfileDesc />
                    </div>
            

                    <div className="w-full lg:w-12/12 px-4">
                        
                        {
                          (custProfileStore.auction_data.length>0) &&
                          <AuctionDetails />
                        }
                        <DataFilter  value={(custProfileStore.selected_group_id===null||custProfileStore.selected_ticket_no===null)?"all":+custProfileStore.selected_group_id+"-"+custProfileStore.selected_ticket_no} 
                                    onChange={(val)=>{
                                      console.log("Selected value = ",val);
                                      if(val==="all"){
                                        custProfileStore.selected_group_id = null;
                                        custProfileStore.selected_ticket_no = null;
                                      }
                                      else{
                                        var splitted = val.split("-");
                                        let group_id = splitted[0];
                                        let ticket_id = splitted[1];
                                        custProfileStore.selected_group_id = group_id;
                                        custProfileStore.selected_ticket_no = ticket_id;
                                      }
                                      custProfileStore.sortData();
                                    }}
                                    />
                        <Installments />
                        <PaymentDetails />
                        {/*<Vouchers />*/}
                    </div>
                </>
            }
        </div>
      </>
    );
})



const EnterTicket = ({value,onChange}) =>{
    return (
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input 
        value={value}
        onChange={(evt)=>onChange(evt.target.value)}
        type="text" placeholder="Ticket No." class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
      </div>
    )
  }


  const SelectGroup  = ({value,onChange}) =>{
    return (
            <div className="relative w-full mb-3">
                <GroupList value={value} onChange={onChange}/>
            </div>
        
    )
  }

  const DataFilter = view(({value,onChange})=>{
      return (
        <div className="w-full lg:w-4/12 px-2">
            <div class="relative flex w-full flex-wrap items-stretch mb-3">
       
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="fas fa-users"></i>
            </span>
       
            <select value={value} onChange={(e)=>onChange(e.target.value)} class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
                {
                  custProfileStore.groupCustomerData.length>1 &&
                  <option value={null}>Select</option>
                }
                {
                    custProfileStore.groupCustomerData.length>1 &&
                    <option value={"all"}>All Ticket</option>
                }
                    {
                        custProfileStore.groupCustomerData.map((val)=>{
                            return <option value={val.group_id+"-"+val.ticket_no}>{val.group_id+"/"+val.ticket_no}</option>
                        })
                    }
            </select>
           </div>
        </div>
      )
  })
