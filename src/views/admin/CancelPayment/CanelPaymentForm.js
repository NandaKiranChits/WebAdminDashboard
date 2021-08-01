import React from 'react';
import {view} from '@risingstack/react-easy-state';
import isEmpty from '../util/isEmpty';
import cancelPaymentStore from './cancelPaymentStore';

export default view(()=>{
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Cancel Payment</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (cancelPaymentStore.isLoading) &&
              <p>Loading..</p>
            }
            {
                (!cancelPaymentStore.isLoading) &&
                <div>
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Payment ID 
                    </h6>

                    <div className="flex flex-wrap">
                        <GroupFormInput placeholder={"Payment ID"} 
                                        labelName={"Payment ID"} 
                                        type="number" 
                                        value={cancelPaymentStore.payment_id} 
                                        onChange={(val)=>cancelPaymentStore.setPaymentId(val)}/>
                    </div>
                </div>
            }
            {
            ((!cancelPaymentStore.isLoading) &&  (cancelPaymentStore.payment_data!==null)) &&
            <div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                Note : 
              </h6>
              <div className="flex flex-wrap">
                  <p style={{fontSize:14,color:'red'}}>Please Provide 1 min time space between canelling payments for same ticket</p>
              </div>

              <div className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Customer Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.cust_details.name}/>
                <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.cust_details.phone}/>
              </div>


              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Payment Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Inst No."} labelName={"Inst No."} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.inst_details.inst_no}/>
                <GroupFormInput placeholder={"Payment Method"} labelName={"Payment Method"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.payment_details.payment_method}/>
                <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.payment_details.total_paid}/>
                <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.date.toDate().toLocaleDateString()}/>
                <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.status.toUpperCase()}/>
              </div>
              {
                (!isEmpty(cancelPaymentStore.payment_data.mr_details.mr_no)) &&
                <>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  MR Details
                </h6>
                <div className="flex flex-wrap">
                  <GroupFormInput placeholder={"MR No."} labelName={"MR No."} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.mr_details.mr_no}/>
                  <GroupFormInput placeholder={"MR Date"} labelName={"MR Date"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.mr_details.mr_date===null?"":cancelPaymentStore.payment_data.mr_details.mr_date.toDate().toLocaleDateString()}/>
                </div>
                </>
            }
            {
              (!isEmpty(cancelPaymentStore.payment_data.neft_details.neft_no)) &&
              <>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                NEFT Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"NEFT Details"} labelName={"NEFT Details"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.neft_details.neft_details}/>
                <GroupFormInput placeholder={"NEFT No."} labelName={"NEFT No."} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.neft_details.neft_no}/>
              </div>
              </>
          }

            {
              (!isEmpty(cancelPaymentStore.payment_data.cheque_details.cheque_no)) &&
              <>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                CHEQUE Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Cheque Date"} labelName={"Cheque Date"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.cheque_details.cheque_date===null?"":cancelPaymentStore.payment_data.cheque_details.cheque_date.toDate().toLocaleDateString()}/>
                <GroupFormInput placeholder={"Cheque No."} labelName={"Cheque No."} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.cheque_details.cheque_no}/>
                <GroupFormInput placeholder={"Cheque Status"} labelName={"Cheque Status"} type="text" isDisabled={true} value={cancelPaymentStore.payment_data.cheque_details.cheque_status}/>
              </div>
              </>
          }

          {
            (cancelPaymentStore.payment_data!==null && (cancelPaymentStore.payment_data["status"]==="failure")) &&
            <>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                Note : 
              </h6>
              <div className="flex flex-wrap">
                  <p style={{fontSize:14,color:'red'}}>The payment is Already Cancelled</p>
              </div>
            </>
          }
              
            

              <div className="flex flex-wrap p-4">
                <button onClick={()=>{cancelPaymentStore.cancelPayment()}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Cancel Payment
                </button>
            </div>
              
            </div>
            }
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

