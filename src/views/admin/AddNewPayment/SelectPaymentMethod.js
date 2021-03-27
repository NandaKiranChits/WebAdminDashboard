import React from 'react';
import {view} from '@risingstack/react-easy-state';


export default view(({value,onChange}) =>{
    return (
      <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Payment Method
                  </label>
                  <select
                      value = {value}
                      onChange = {(e)=>onChange(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                      <option value={""}>Select</option>
                      <option value={"CASH"}>CASH</option>
                      <option value={"CHEQUE"}>CHEQUE</option>
                      <option value={"NEFT"}>NEFT</option>
                  </select>
              </div>
          </div>
    )
  })