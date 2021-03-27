import React from 'react';
import addPaymentStore from './AddNewPaymentStore';
import {view} from '@risingstack/react-easy-state';


export default view(({value,onChange}) =>{
    return (
      <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Installment
                  </label>
                  <select
                      value = {value}
                      onChange = {(e)=>onChange(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                      {
                          addPaymentStore.installment_data.map((val,index)=>{
                              return <option key={index+val.auction_no} value={val.auction_no}>{val.auction_no}</option>
                          })
                      }
                  </select>
              </div>
          </div>
    )
  })