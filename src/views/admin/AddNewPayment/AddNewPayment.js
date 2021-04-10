import React from 'react';
import GroupList from '../util/GroupList/index';
import addPaymentStore from './AddNewPaymentStore';
import {view} from '@risingstack/react-easy-state';
import SelectInstallment from './SelectInstallment';
import SelectPaymentMethod from './SelectPaymentMethod';

export default view(()=>{
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Payment</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (addPaymentStore.isLoading) &&
              <p>Loading..</p>
            }
            {
              (!addPaymentStore.isLoading) &&
            <div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                Note : 
              </h6>
              <div className="flex flex-wrap">
                  <p style={{fontSize:14,color:'red'}}>Please Provide 1 min time space between adding payments for same ticket</p>
              </div>

              <div className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Member Info
              </h6>
              <div className="flex flex-wrap">
                <SelectGroup value={addPaymentStore.group_id} onChange={(val)=>{addPaymentStore.setGroupId(val)}}/>
                <GroupFormInput placeholder={"Ticket No"} labelName={"Ticket No"} type="number" value={addPaymentStore.ticket_no} onChange={addPaymentStore.setTicketNo}/>
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" isDisabled={true} value={addPaymentStore.groupCustData===null?"":addPaymentStore.groupCustData.name}/>
                <GroupFormInput placeholder={"Account Balance"} labelName={"Account Balance"} type="text" isDisabled={true} value={addPaymentStore.groupCustData===null?"":addPaymentStore.groupCustData.account_balance}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Installment Details
              </h6>
              <div className="flex flex-wrap">
                <SelectInstallment onChange={(val)=>{addPaymentStore.setInstallmentID(val)}} value={addPaymentStore.inst_id}/>
                {
                  (addPaymentStore.inst_stats!==null) &&
                  <>
                    <GroupFormInput placeholder={"Installment Value"} labelName={"Installment Value"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.installment_value}/>
                    <GroupFormInput placeholder={"Dividend"} labelName={"Dividend (-)"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.dividend}/>
                    <GroupFormInput placeholder={"Other Charges"} labelName={"Other Charges (+)"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.other_charges}/>
                    <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid (-)"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.total_paid - addPaymentStore.inst_stats.accepted_from_other}/>
                    <GroupFormInput placeholder={"Adjusted"} labelName={"Adjusted From Other Installment(-)"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.accepted_from_other}/>
                    <GroupFormInput placeholder={"Sub Total"} labelName={"Sub Total"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.total_without_interest }/>
                    <GroupFormInput placeholder={"Total Interest"} labelName={"Total Interest"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.interest - addPaymentStore.inst_stats.waived_interest}/>
                    <GroupFormInput placeholder={"Grand Total"} labelName={"Grand Total"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.total - addPaymentStore.inst_stats.waived_interest}/>
                    <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" isDisabled={true} value={addPaymentStore.inst_stats.status.toUpperCase()}/>
                  </> 
                }
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Payment Details
              </h6>

              <div className="flex flex-wrap">
                  <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid"} type="number" value={addPaymentStore.total_paid} onChange={(val)=>{addPaymentStore.total_paid = parseFloat(val);}}/>
                  <SelectPaymentMethod onChange={(val)=>{addPaymentStore.payment_method=val;}} value={addPaymentStore.payment_method} />
              </div>

             

              {
                (addPaymentStore.payment_method==="CHEQUE") &&
                <>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Cheque Details
                </h6>
                <div className="flex flex-wrap">
                  <GroupFormInput placeholder={"Cheque No"} labelName={"Cheque No"} type="text" onChange={(val)=>{addPaymentStore.cheque_no=val;}} value={addPaymentStore.cheque_no}/>
                  <GroupFormInput placeholder={"Cheque Date"} labelName={"Cheque Date"} type="date" onChange={(val)=>{addPaymentStore.cheque_date = val;}} value={addPaymentStore.cheque_date}/>
                  <SelectStatus value={addPaymentStore.cheque_status} onChange={(val)=>{addPaymentStore.cheque_status=val;}} />
                </div>
               </>
              }
              {
                (addPaymentStore.payment_method==="NEFT") &&
                  <>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    NEFT Details
                 </h6>
                  <div className="flex flex-wrap">
                    <GroupFormInput placeholder={"NEFT No."} labelName={"NEFT No."} type="text" onChange={(val)=>{addPaymentStore.neft_no=val;}}/>
                    <GroupFormInput placeholder={"NEFT Details"} labelName={"NEFT Details"} type="text" onChange={(val)=>{addPaymentStore.neft_details=val;}}/>
                  </div>
                </> 
              }
               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Manual Receipt Details
              </h6>

              <div className="flex flex-wrap">
                  <GroupFormInput placeholder={"Manual Receipt No."} labelName={"Manual Receipt No."} type="number" value={addPaymentStore.manual_receipt_no} onChange={(val)=>{addPaymentStore.manual_receipt_no = val;}}/>
                  <GroupFormInput placeholder={"Manual Receipt Date"} labelName={"Manual Receipt Date"} type="date" value={addPaymentStore.manual_receipt_date} onChange={(val)=>{addPaymentStore.manual_receipt_date = val;}}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Comments
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Comments"} labelName={"Comments"} type="text" onChange={(val)=>{addPaymentStore.comments = val;}} value={addPaymentStore.comments} />
              </div>
              <div className="flex flex-wrap p-4">
                <button onClick={addPaymentStore.addPayment} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Payment
                </button>
            </div>
              
            </div>
            }
        </div>
        </div>
        </>
    )
})


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

const SelectStatus  = ({value,onChange}) =>{
  return (
    <div className="w-full lg:w-4/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >Select Status</label>
       <select value={value} onChange={(e)=>onChange(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  > 

                      <option value={""}>Select</option>
                      <option value={"success"}>Success</option>
                      <option value={"failed"}>Failed</option>
                      <option value={"pending"}>Pending</option>
              </select>
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

