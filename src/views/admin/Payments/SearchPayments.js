import React from 'react';
import {view} from '@risingstack/react-easy-state';
import paymentsData from './paymentsStore';


export default view(()=>{
    return (
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <input type="text" value={paymentsData.searchValue} onChange={(e)=>{paymentsData.searchValue=e.target.value;paymentsData.searchData(paymentsData.searchValue);}} placeholder="Search" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-search"></i>
                </span>
        </div>
    )
})