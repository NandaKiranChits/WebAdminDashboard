import React from "react";
import {view} from '@risingstack/react-easy-state';
import paymentsStore from './paymentsStore';

export default view(()=>{
    return (
        <>
            <div className="w-full lg:w-4/12 px-4">
                <SelectDate placeholder="Start date" onchange={(val)=>{paymentsStore.setStartDate(val);}}/>
            </div>
            <div className="w-full lg:w-4/12 px-2">
                <SelectDate placeholder="End date" onchange={(val)=>{paymentsStore.setEndDate(val);}}/>
            </div>
        </>
    )
})

const SelectDate = ({placeholder,onchange,val}) =>{

    return (
      <div class="mb-3 pt-0">
        <input placeholder={placeholder} type="text"  onChange={(e)=>(onchange(e.target.value))} onFocus={(e)=>e.target.type='date'}  class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
      </div>
    )
  }
  