import React from "react";

// components

export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New Group</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Group Information
            </h6>
            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Group Name"} labelName={"Group Name"} type="text" />
              <GroupFormInput placeholder={"Start Date"} labelName={"Start Date"} type="date" />
              <GroupFormInput placeholder={"End Date"} labelName={"End Date"} type="date" />
              <GroupFormInput placeholder={"No. of Months"} labelName={"No. of Months"} type="number" />
              <GroupFormInput placeholder={"Monthly Subscription"} labelName={"Monthly Subscription"} type="number" />
              <GroupFormInput placeholder={"Group Value"} labelName={"Group Value"} type="number" />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Auction Policy
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"First Auction Date"} labelName={"First Auction Date"} type="date" />
              <GroupFormInput placeholder={"Min Bid (%)"} labelName={"Min Bid (%)"} type="number" />
              <GroupFormInput placeholder={"Max Bid (%)"} labelName={"Max Bid (%) "} type="number" />
              <GroupFormInput placeholder={"Foreman Comission (%)"} labelName={"Foreman Comission (%)"} type="number" />
              <SelectYesNo labelName = {"Company Chit Exists"} />
              <GroupFormInput placeholder={"Company Chit No."} labelName={"Company Chit No."} type="number" />
              <SelectYesNo labelName={"First Auction is Company Auction"} />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Interest Rates
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Prized Interest Rate (%)"} labelName={"Prized Interest Rate (%)"} type="number" />
              <GroupFormInput placeholder={"Non-Prized Interest Rate (%)"} labelName={"Non-Prized Interest Rate (%)"} type="number" />
              <GroupFormInput placeholder={"Days"} labelName={"Interest Starts After These many days after auction "} type="number" />
            </div>


            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                PSO Details
            </h6>


            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"PSO No."} labelName={"PSO No."} type="text" />
              <GroupFormInput placeholder={"PSO Date"} labelName={"PSO Date"} type="date" />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                CC Details
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"CC No."} labelName={"CC No."} type="text" />
              <GroupFormInput placeholder={"CC Date"} labelName={"CC Date"} type="date" />
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Deposit Details
            </h6>

            <div className="flex flex-wrap">
              <GroupFormInput placeholder={"Deposit Certificate No."} labelName={"Deposit Certificate No."} type="text" />
              <GroupFormInput placeholder={"Deposit Amount"} labelName={"Deposit Amount"} type="number" />
              <GroupFormInput placeholder={"Deposit Date"} labelName={"Deposit Date"} type="date" />
              <GroupFormInput placeholder={"Deposit Bank"} labelName={"Deposit Bank"} type="text" />
              <GroupFormInput placeholder={"Deposit Rate of Interest"} labelName={"Rate of Interest"} type="number" />
            </div>

            <div className="flex flex-wrap p-4">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Group
                </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}


const GroupFormInput = ({labelName,placeholder,type}) =>{
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

const SelectYesNo = ({labelName,}) =>{
    return (
        <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {labelName}
                </label>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                        <option>Yes</option>
                        <option>No</option>
                </select>
                </div>
        </div>
    )
}