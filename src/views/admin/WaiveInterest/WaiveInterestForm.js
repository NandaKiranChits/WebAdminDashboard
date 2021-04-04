import React from 'react';
import {view} from '@risingstack/react-easy-state';
import WaiveInterestStore from './WaiveInterestStore';



export default view(()=>{

    var url_string = window.location.href;
    var url = new URL(url_string);
    var group_id = url.searchParams.get("group_id");
    var ticket_id = url.searchParams.get("ticket_id");
    var installment_no = url.searchParams.get("inst_no");
  
    if(WaiveInterestStore.group_id!==group_id || WaiveInterestStore.ticket_id!==ticket_id || WaiveInterestStore.installment_no!==installment_no){
      WaiveInterestStore.group_id = group_id;
      WaiveInterestStore.installment_no = installment_no;
      WaiveInterestStore.ticket_id = ticket_id;
      WaiveInterestStore.getData();
    }

    let installment_data = WaiveInterestStore.installment_data;
    let ticket_data = WaiveInterestStore.ticket_data;
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Waive Interest</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (WaiveInterestStore.isLoading) &&
              <p>Loading</p>
            }
            {
              (!WaiveInterestStore.isLoading) &&
            <div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Group And Ticket
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Group ID"} labelName={"Group ID"} type="text" value={WaiveInterestStore.group_id} isDisabled={true}/>
                <GroupFormInput placeholder={"Ticket No."} labelName={"Ticket No."} type="text" value={WaiveInterestStore.ticket_id} isDisabled={true}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Ticket Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"name"} labelName={"Name"} type="text" value={ticket_data===null?"":ticket_data.name} isDisabled={true}/>
                <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="text" value={ticket_data===null?"":ticket_data.phone} isDisabled={true}/>
                <GroupFormInput placeholder={"Email"} labelName={"Email"} type="text" value={ticket_data===null?"":ticket_data.email} isDisabled={true}/>
                <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" value={ticket_data===null?"":ticket_data.status} isDisabled={true}/>
                <GroupFormInput placeholder={"Account Balance"} labelName={"Account Balance"} type="text" value={ticket_data===null?"":ticket_data.account_balance} isDisabled={true}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Installment Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Installment No."} labelName={"Installment No."} type="text" value={WaiveInterestStore.installment_no} isDisabled={true}/>
                <GroupFormInput placeholder={"Installment Value"} labelName={"Installment Value"} type="text" value={installment_data===null?"":installment_data.installment_value-installment_data.dividend-installment_data.accepted_from_other} isDisabled={true}/>
                <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid"} type="text" value={installment_data===null?"":installment_data.total_paid} isDisabled={true} />
                <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" value={installment_data===null?"":installment_data.status.toUpperCase()} isDisabled={true} />
                <GroupFormInput placeholder={"Interest"} labelName={"Interest"} type="text" value={installment_data===null?"":installment_data.interest-installment_data.waived_interest} isDisabled={true}/>
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Interest
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Interest To Waive"} labelName={"Interest To Waive"} type="number" value={WaiveInterestStore.interestToWaive} onChange={(val)=>{WaiveInterestStore.interestToWaive = val;}}/>
              </div>

              <div className="flex flex-wrap p-4">
                <button onClick={()=>{WaiveInterestStore.waiveInterest()}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Waive Interest
                </button>
            </div>
              
            </div>
            }
        </div>
        </div>
        </>
    )
})



const GroupFormInput = ({labelName,placeholder,type,value,onChange,isDisabled}) =>{
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
                    disabled={isDisabled}
                    type={type}
                    value = {value}
                    onChange = {(e)=>{onChange(e.target.value);}}
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
