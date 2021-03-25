import React from "react";

import {view} from '@risingstack/react-easy-state';
import groupStore from './AddGroupStore';
// components



 export default view(()=>(
      <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New Group</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          {
            (groupStore.isLoading) &&
            <p>Loading</p>
          }
          {
            (!groupStore.isLoading) &&
          <div>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Group Information
            </h6>
            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Group Name"} labelName={"Group Name"} type="text" value={groupStore.group_name} onChange={(val)=>{groupStore.group_name = val;}}/>
              <GroupFormInput placeholder={"Start Date"} labelName={"Start Date"} type="date" value={groupStore.start_date} onChange={(val)=>{groupStore.start_date = (val);}}/>
              <GroupFormInput placeholder={"End Date"} labelName={"End Date"} type="date" value={groupStore.end_date} onChange={(val)=>{groupStore.end_date = (val);}}/>
              <GroupFormInput placeholder={"No. of Months"} labelName={"No. of Months"} type="number" value={groupStore.no_of_months} onChange={(val)=>{groupStore.no_of_months = parseInt(val);}}/>
              <GroupFormInput placeholder={"Monthly Subscription"} labelName={"Monthly Subscription"} type="number" value={groupStore.monthly_subscription} onChange={(val)=>groupStore.monthly_subscription=parseInt(val)}/>
              <GroupFormInput placeholder={"Group Value"} labelName={"Group Value"} type="number" value={groupStore.group_value} onChange={(val)=>groupStore.group_value=parseInt(val)} />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Auction Policy
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"First Auction Date"} labelName={"First Auction Date"} type="datetime-local" value={groupStore.first_auction_date} onChange={(val)=>groupStore.first_auction_date=(val)}/>
              <GroupFormInput placeholder={"Min Bid (%)"} labelName={"Min Bid (%)"} type="number" value={groupStore.min_bid} onChange={(val)=>groupStore.min_bid=parseFloat(val)}/>
              <GroupFormInput placeholder={"Max Bid (%)"} labelName={"Max Bid (%) "} type="number" value={groupStore.max_bid} onChange={(val)=>groupStore.max_bid=parseFloat(val)}/>
              <GroupFormInput placeholder={"Foreman Comission (%)"} labelName={"Foreman Comission (%)"} type="number" value={groupStore.foreman_commission} onChange={(val)=>groupStore.foreman_commission=parseFloat(val)}/>
              <SelectYesNo labelName = {"Company Chit Exists"} value={groupStore.company_chit_exists} onChange={(val)=>{groupStore.company_chit_exists=(val==="true"?true:false);}} />
              {
                (groupStore.company_chit_exists)  &&
                <>
                  <GroupFormInput placeholder={"Company Chit No."} labelName={"Company Chit No."} type="number" value={groupStore.company_chit_no} onChange={(val)=>groupStore.company_chit_no=val}/>
                  <SelectYesNo labelName={"First Auction is Company Auction"} value={groupStore.first_auction_is_company_auction} onChange={(val)=>groupStore.first_auction_is_company_auction=(val==="true"?true:false)}/>
                </>
              }
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Interest Rates
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Prized Interest Rate (%)"} labelName={"Prized Interest Rate (%)"} type="number" value={groupStore.prizedInterestRate} onChange={(val)=>groupStore.prizedInterestRate=parseFloat(val)}/>
              <GroupFormInput placeholder={"Non-Prized Interest Rate (%)"} labelName={"Non-Prized Interest Rate (%)"} type="number" value={groupStore.nonPrizedInterestRate} onChange={(val)=>groupStore.nonPrizedInterestRate=parseFloat(val)}/>
              <GroupFormInput placeholder={"Days"} labelName={"Interest Starts After These many days after auction "} type="number" value={groupStore.interestStartsAfterHowManyDays} onChange={(val)=>groupStore.interestStartsAfterHowManyDays=parseInt(val)}/>
            </div>


            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                PSO Details
            </h6>


            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"PSO No."} labelName={"PSO No."} type="text" value={groupStore.pso_no} onChange={(val)=>groupStore.pso_no=(val)}/>
              <GroupFormInput placeholder={"PSO Date"} labelName={"PSO Date"} type="date" value={groupStore.pso_date} onChange={(val)=>groupStore.pso_date=(val)} />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                CC Details
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"CC No."} labelName={"CC No."} type="text" value={groupStore.cc_no} onChange={(val)=>groupStore.cc_no=val}/>
              <GroupFormInput placeholder={"CC Date"} labelName={"CC Date"} type="date" value={groupStore.cc_date} onChange={(val)=>groupStore.cc_date=(val)}/>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Deposit Details
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Deposit Certificate No."} labelName={"Deposit Certificate No."} type="text" value={groupStore.deposit_cert_no} onChange={(val)=>groupStore.deposit_cert_no=val}/>
              <GroupFormInput placeholder={"Deposit Amount"} labelName={"Deposit Amount"} type="number" value={groupStore.deposit_amount} onChange={(val)=>groupStore.deposit_amount=parseFloat(val)}/>
              <GroupFormInput placeholder={"Deposit Date"} labelName={"Deposit Date"} type="date" value={groupStore.deposit_date} onChange={(val)=>groupStore.deposit_date=(val)}/>
              <GroupFormInput placeholder={"Deposit Bank"} labelName={"Deposit Bank"} type="text" value={groupStore.deposit_bank} onChange={(val)=>groupStore.deposit_bank=(val)}/>
              <GroupFormInput placeholder={"Deposit Rate of Interest"} labelName={"Rate of Interest"} type="number" value={groupStore.rate_of_interest} onChange={(val)=>groupStore.rate_of_interest=parseFloat(val)}/>
            </div>

            <div className="flex flex-wrap p-4">
                <button onClick={()=>{groupStore.addNewGroup()}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Group
                </button>
            </div>

          </div>
          }
        </div>
      </div>
    </>
    ))


const GroupFormInput = ({labelName,placeholder,type,value,onChange}) =>{
    return (
        <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {labelName}
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={(e)=>{onChange(e.target.value);}}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

GroupFormInput.defaultPops = {
    type : "text"
}

const SelectYesNo = ({labelName,value,onChange}) =>{
    return (
        <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {labelName}
                </label>
                <select value={value} onChange={(e)=>onChange(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    > 
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                </select>
                </div>
        </div>
    )
}