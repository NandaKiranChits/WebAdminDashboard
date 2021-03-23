import React from 'react';


export default function AddNewPayment() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Payment</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Member Info
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Group ID"} labelName={"Group ID"} type="text" />
                <GroupFormInput placeholder={"Ticket No"} labelName={"Ticket No"} type="text" />
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" isDisabled={true} />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Payment Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Installment No."} labelName={"Installment No"} type="text" />
                <GroupFormInput placeholder={"Payment Method"} labelName={"Payment Method"} type="text" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Cheque Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Cheque No"} labelName={"Cheque No"} type="text" />
                <GroupFormInput placeholder={"Cheque Date"} labelName={"Cheque Date"} type="text" />
                <GroupFormInput placeholder={"Status"} labelName={"Status"} type="text" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                NEFT Details
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"NEFT No."} labelName={"NEFT No."} type="text" />
                <GroupFormInput placeholder={"NEFT Details"} labelName={"NEFT Details"} type="text" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Comments
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Comments"} labelName={"Comments"} type="text" />
              </div>
              <div className="flex flex-wrap p-4">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Payment
                </button>
            </div>
              
            </form>
        </div>
        </div>
        </>
    )
}



const GroupFormInput = ({labelName,placeholder,type,isDisabled}) =>{
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
