import React from 'react';
import GroupList from '../util/GroupList/index';
import {view} from '@risingstack/react-easy-state';
import addVoucherStore from './AddNewVoucherStore';

export default view(()=>{
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Voucher</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (addVoucherStore.isLoading) &&
              <p className={"py-4"}>Loading...</p>
            }
            {
                
            (!addVoucherStore.isLoading) &&
            <div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                Note : 
              </h6>
              <div className="flex flex-wrap">
                  <p style={{fontSize:14,color:'red'}}>Please Provide 1 min time space between adding vouchers for same ticket</p>
              </div>

              <div className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Enter Ticket
              </h6>
              <div className="flex flex-wrap">
                <SelectGroup value={addVoucherStore.group_id} onChange={addVoucherStore.setGroupId}/>
                <GroupFormInput placeholder={"Ticket No"} labelName={"Ticket No"} type="number" value={addVoucherStore.ticket_no} onChange={addVoucherStore.setTicketNo}/>
              </div>

              {
              (addVoucherStore.ticket_details!==null) &&
              <>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Member Info
                </h6>
                <div className="flex flex-wrap">
                    <GroupFormInput placeholder={"Name"} isDisabled={true} labelName={"Name"} value={addVoucherStore.ticket_details.name}/>
                    <GroupFormInput placeholder={"Phone"} isDisabled={true} labelName="Phone" value={addVoucherStore.ticket_details.phone}/>
                    <GroupFormInput placeholder={"Status"} isDisabled={true} labelName="Status" value={addVoucherStore.ticket_details.status}/>
                    <GroupFormInput placeholder={"Account Balance"} isDisabled={true} labelName="Account Balance" value={addVoucherStore.ticket_details.account_balance}/>
                    <GroupFormInput placeholder={"is Lean"} isDisabled={true} labelName={"is Lean"} value={addVoucherStore.ticket_details.lean_details.isLean}/>
                </div>
              </>
            }

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Voucher Details
              </h6>
              <div className="flex flex-wrap">
                <SelectType onChange={(val)=>addVoucherStore.type=val}/>
                <GroupFormInput placeholder={"Amount"} type={"number"} labelName={"Amount"} onChange={(val)=>addVoucherStore.amount=val}/>
                <GroupFormInput placeholder={"Comments"} type={"text"} labelName={"Comments"} onChange={(val)=>addVoucherStore.comments=val}/>
              </div>

              <div className="flex flex-wrap p-4">
                <button onClick={addVoucherStore.addNewVoucher} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Voucher
                </button>
              </div>
              
            </div>
            }
            
        </div>
        </div>
        </>
    )
})


const SelectType  = ({value,onChange}) =>{
    return (
      <div className="w-full lg:w-6/12 px-4">
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >Select Type</label>
         <select value={value} onChange={(e)=>onChange(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    > 
  
                        <option value={""}>Select</option>
                        <option value={"DEBIT"}>DEBIT</option>
                        <option value={"CREDIT"}>CREDIT</option>
                </select>
      </div>
      </div>
    )
  }

const SelectGroup  = ({value,onChange}) =>{
    return (
      <div className="w-full lg:w-6/12 px-4">
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >Select Group</label>
      <GroupList value={value} onChange={onChange}/>
      </div>
      </div>
    )
}



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
                    onChange = {(e)=>onChange(e.target.value)}
                    disabled = {isDisabled}
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

