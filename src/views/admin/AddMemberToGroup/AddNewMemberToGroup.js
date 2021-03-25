import React from 'react';

import {view} from '@risingstack/react-easy-state';
import addMemberStore from './addMemberStore';


export default view(()=>{
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Member</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Customer Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Customer ID"} labelName={"Customer ID"} type="text" value={addMemberStore.customer_id} onChange={(val)=>addMemberStore.setCustomerID(val)}/>
              </div>

              <div class="flex flex-wrap">
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" isDisabled={true} value={addMemberStore.name} onChange={(val)=>addMemberStore.name=val}/>
                <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="text" isDisabled={true} value={addMemberStore.phone} onChange={(val)=>addMemberStore.phone=val} />
                <GroupFormInput placeholder={"Email"} labelName={"Email"} type="text" isDisabled={true} value={addMemberStore.email} onChange={(val)=>addMemberStore.email=val} />
                <GroupFormInput placeholder={"No. of Tickets"} labelName={"No. of Tickets"} type="text" isDisabled={true} value={addMemberStore.no_of_tickets} onChange={(val)=>addMemberStore.no_of_tickets=val}/>
              </div>


              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Enter Ticket Details
              </h6>

              <div class="flex flex-wrap mt-5">
                <GroupFormInput placeholder={"Group ID"} labelName={"Group ID"} type="text" value={addMemberStore.group_id} onChange={(val)=>addMemberStore.group_id=val}/>
                <GroupFormInput placeholder={"Ticket No."} labelName={"Ticket No."} type="number" value={addMemberStore.ticket_no} onChange={(val)=>addMemberStore.ticket_no=val}/>
              </div>

              <div className="flex flex-wrap p-4">
                <button onClick={()=>addMemberStore.addMemberToGroup()} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add Member
                </button>
            </div>
              
            </form>
        </div>
        </div>
        </>
    )
})



const GroupFormInput = ({labelName,placeholder,type,isDisabled,value,onChange}) =>{
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
                    value = {value}
                    disabled = {isDisabled}
                    onChange = {(e)=>onChange(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

GroupFormInput.defaultPops = {
    type : "text",
    isDisabled : false,
}
