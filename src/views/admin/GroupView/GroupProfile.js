import React from "react";

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

// components

export default view(()=>{
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-3">
        <div className="px-4">
          <div className="flex flex-wrap justify-center">
            
            <div className="w-full px-2 text-center mt-5">
              <div className="flex justify-center py-4 lg:pt-0 pt-2">
                <div className="mr-4 p-5 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {groupViewStore.group_data!==null?groupViewStore.group_data.group_name : null}
                  </span>
                  <span className="text-sm text-blueGray-400">GROUP ID</span>
                </div>
                <div className="mr-4 p-5 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  ₹ {groupViewStore.group_data!==null?groupViewStore.group_data.group_value : null}
                  </span>
                  <span className="text-sm text-blueGray-400">GROUP VALUE</span>
                </div>
                <div className="mr-4 p-5 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  ₹ {groupViewStore.group_data!==null?groupViewStore.group_data.monthly_subscription : null}
                  </span>
                  <span className="text-sm text-blueGray-400">Monthly Subscription</span>
                </div>
                <div className="mr-4 p-5 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {groupViewStore.group_data!==null?groupViewStore.group_data.no_of_auctions_completed : null}/{groupViewStore.group_data!==null?groupViewStore.group_data.no_of_months : null}
                  </span>
                  <span className="text-sm text-blueGray-400">Months</span>
                </div>
                <div className="lg:mr-4 p-5  text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                   3/10/2021
                  </span>
                  <span className="text-sm text-blueGray-400">Next Auction</span>
                </div>
                
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
})
