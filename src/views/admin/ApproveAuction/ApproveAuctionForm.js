import React from 'react';
import approveAuctionStore  from './ApproveAuctionStore';
import {view} from '@risingstack/react-easy-state';
import isEmpty from '../util/isEmpty';


export default view(()=>{
  var auctionData = approveAuctionStore.auctionData;
  var groupCustomerData = isEmpty(approveAuctionStore.groupCustomerData)?null:approveAuctionStore.groupCustomerData;
  console.log("GroupCustomerData = ",groupCustomerData);
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Approve Auction</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (approveAuctionStore.isLoading) &&
              <p>Loading...</p> 
            }
            {
              (!approveAuctionStore.isLoading) &&
            <form>
               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Auction Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Group ID"} labelName={"Group ID"} type="text" isDisabled={true} value={approveAuctionStore.group_id}/>
                <GroupFormInput placeholder={"Auction  No."} labelName={"Auction No."} type="text" isDisabled={true} value={approveAuctionStore.auct_no}/>
                <GroupFormInput placeholder={"Date And Time"} labelName={"Date and Time"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.date_and_time.toDate().toLocaleDateString()}/>
                <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.status}/>
                <GroupFormInput placeholder={"Chit Value"} labelName={"CHIT Value"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.chit_value} />
                <GroupFormInput placeholder={"Foreman Commission"} labelName={"Foreman Commission"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.chit_value*(auctionData.bidding_policy.foreman_comission/100)}/>
                <GroupFormInput placeholder={"Minimum Bid(%)"} labelName={"Minimum Bid"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.chit_value*(auctionData.bidding_policy.min_bid/100)}/>
                <GroupFormInput placeholder={"Maximum Bid(%)"} labelName={"Maximum Bid"} type="text" isDisabled={true} value={auctionData===null?"":auctionData.chit_value*(auctionData.bidding_policy.max_bid/100)}/>
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Winner Ticket
              </h6>

              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Winner Ticket ID"} labelName={"Winner Ticket ID"} type="text" value={approveAuctionStore.ticket_id} onChange={(val)=>approveAuctionStore.setTicketNo(val)}/>
              </div>
              
              {
                (groupCustomerData!==null) &&
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                     Winner Ticket Details
                  </h6>
              }
              {
                  (groupCustomerData!==null && (groupCustomerData.status==="Prized")) &&
                  
                  <h6 style={{fontSize:14 ,color:'red'}} className="text-red-400 text-sm ml-5 mt-3 mb-3 font-bold uppercase">
                      Warning : Customer is Prized
                  </h6>
                } 
                {
                (groupCustomerData!==null) &&
                  <div className="flex flex-wrap">
                    <GroupFormInput placeholder={"Customer ID"} labelName={"Customer ID"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.cust_id}/>
                    <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.name}/>
                    <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.phone} />
                    <GroupFormInput placeholder={"Email"} labelName={"Email"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.email}/>
                    <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.status}/>
                    <GroupFormInput placeholder={"Account Balance"} labelName={"Account Balance"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.account_balance}/>
                    <GroupFormInput placeholder={"Total Paid"} labelName={"Total Paid"} type="text" isDisabled={true} value={groupCustomerData===null?"":groupCustomerData.total_amount_paid}/>
                  </div>
              }


              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Enter Auction Details
              </h6>

              <div class="flex flex-wrap mt-5">
                <GroupFormInput placeholder={"Bid Amount"} labelName={"Bid Amount"} type="text" value={approveAuctionStore.bid_amount} onChange={(val)=>approveAuctionStore.bid_amount=val}/>
                <GroupFormInput placeholder={"Next Auction Date"} labelName={"Next Auction Date"} type="date" value={approveAuctionStore.next_auction_date} onChange={(val)=>approveAuctionStore.next_auction_date=val}/>
              </div>
              
              <div className="flex flex-wrap p-4">
                <button onClick={()=>{approveAuctionStore.submitForApproval();}} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Approve Auction
                </button>
            </div>
              
            </form>
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
