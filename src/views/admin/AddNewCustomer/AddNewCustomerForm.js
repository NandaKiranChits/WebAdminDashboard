import React from 'react';


export default function AddNewCustomerForm() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Customer</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Personal Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" />
                <GroupFormInput placeholder={"Father/Husband Name"} labelName={"Father/Husband Name"} type="text" />
                <GroupFormInput placeholder={"DOB"} labelName={"DOB"} type="date" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="number" />
                <GroupFormInput placeholder={"Phone2"} labelName={"Phone2"} type="number" />
                <GroupFormInput placeholder={"Email"} labelName={"Email"} type="email" />
                <GroupFormInput placeholder={"Address"} labelName={"Address"} type="text" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Nominee Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Nominee Name"} labelName={"Name"} type="text" />
                <GroupFormInput placeholder={"Nominee Relationship"} labelName={"Relationship"} type="text" />
                <GroupFormInput placeholder={"Nominee Phone"} labelName={"Nominee Phone"} type="text" />
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Bank Account Details
              </h6>
              <div className="flex flex-wrap">
                 <GroupFormInput placeholder={"Bank Name"} labelName={"Name"} type="text" />
                 <GroupFormInput placeholder={"IFSC Code"} labelName={"IFSC"} type="text" />
                 <GroupFormInput placeholder={"Account No"} labelName={"Accoun No."} type="text" />
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Identity Proofs
              </h6>
              <div className="flex flex-wrap">
                 <GroupFormInput placeholder={"Aadhar No"} labelName={"Aadhar No."} type="text" />
                 <GroupFormInput placeholder={"PAN No"} labelName={"PAN No."} type="text" />
                 <GroupFormInput placeholder={"GST"} labelName={"GST"} type="text" />
                 <GroupFormInput placeholder={"Income (pa)"} labelName={"Income (pa)"} type="text" />
              </div>

              <div className="flex flex-wrap p-4">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Customer
                </button>
            </div>
              
            </form>
        </div>
        </div>
        </>
    )
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
