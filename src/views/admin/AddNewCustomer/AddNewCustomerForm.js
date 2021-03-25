import React from 'react';
import {view} from '@risingstack/react-easy-state';
import addCustomerStore from './AddCustomerStore';


export default view(()=>{
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add New Customer</h6>
              
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              (addCustomerStore.isLoading) &&
              <p>Loading</p>
            }
            {
              (!addCustomerStore.isLoading) &&
            <div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Personal Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Name"} labelName={"Name"} type="text" value={addCustomerStore.name} onChange={(val)=>{addCustomerStore.name = val;}}/>
                <GroupFormInput placeholder={"Father/Husband Name"} labelName={"Father/Husband Name"} type="text" value={addCustomerStore.father_husband_name} onChange={(val)=>{addCustomerStore.father_husband_name = val;}}/>
                <GroupFormInput placeholder={"DOB"} labelName={"DOB"} type="date" value={addCustomerStore.dob} onChange={(val)=>{addCustomerStore.dob=val;}}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Phone"} labelName={"Phone"} type="number" value={addCustomerStore.phone} onChange={(val)=>{addCustomerStore.phone=val;}}/>
                <GroupFormInput placeholder={"Phone2"} labelName={"Phone2"} type="number" value={addCustomerStore.phone2} onChange={(val)=>{addCustomerStore.phone2=val;}}/>
                <GroupFormInput placeholder={"Email"} labelName={"Email"} type="email" value={addCustomerStore.email} onChange={(val)=>{addCustomerStore.email=val;}}/>
                <GroupFormInput placeholder={"Address"} labelName={"Address"} type="text" value={addCustomerStore.address} onChange={(val)=>{addCustomerStore.address=val;}}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Nominee Information
              </h6>
              <div className="flex flex-wrap">
                <GroupFormInput placeholder={"Nominee Name"} labelName={"Name"} type="text" value={addCustomerStore.nominee_name} onChange={(val)=>{addCustomerStore.nominee_name=val;}}/>
                <GroupFormInput placeholder={"Nominee Relationship"} labelName={"Relationship"} type="text" value={addCustomerStore.nominee_relationship} onChange={(val)=>{addCustomerStore.nominee_relationship=val;}}/>
                <GroupFormInput placeholder={"Nominee Phone"} labelName={"Nominee Phone"} type="text" value={addCustomerStore.nominee_phone} onChange={(val)=>{addCustomerStore.nominee_phone=val;}}/>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Bank Account Details
              </h6>
              <div className="flex flex-wrap">
                 <GroupFormInput placeholder={"Bank Name"} labelName={"Name"} type="text" value={addCustomerStore.bank_name} onChange={(val)=>{addCustomerStore.bank_name=val;}}/>
                 <GroupFormInput placeholder={"IFSC Code"} labelName={"IFSC"} type="text" value={addCustomerStore.ifsc} onChange={(val)=>{addCustomerStore.ifsc=val;}}/>
                 <GroupFormInput placeholder={"Account No"} labelName={"Account No."} type="text" value={addCustomerStore.account_no} onChange={(val)=>{addCustomerStore.account_no=val;}}/>
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Identity Proofs
              </h6>
              <div className="flex flex-wrap">
                 <GroupFormInput placeholder={"Aadhar No"} labelName={"Aadhar No."} type="text" value={addCustomerStore.aadhar_no} onChange={(val)=>{addCustomerStore.aadhar_no=val;}} />
                 <GroupFormInput placeholder={"PAN No"} labelName={"PAN No."} type="text" value={addCustomerStore.pan_no} onChange={(val)=>{addCustomerStore.pan_no=val;}}/>
                 <GroupFormInput placeholder={"GST"} labelName={"GST"} type="text" value={addCustomerStore.gst} onChange={(val)=>{addCustomerStore.gst=val;}}/>
                 <GroupFormInput placeholder={"Income (pa)"} labelName={"Income (pa)"} type="text" value={addCustomerStore.income_pa} onChange={(val)=>{addCustomerStore.income_pa=val;}}/>
              </div>

              <div className="flex flex-wrap p-4">
                <button onClick={()=>addCustomerStore.addCustomer()} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Add New Customer
                </button>
            </div>
              
            </div>
            }
        </div>
        </div>
        </>
    )
})



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
    type : "text"
}
