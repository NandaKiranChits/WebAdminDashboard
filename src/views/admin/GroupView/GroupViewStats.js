import React from "react";

// components

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';
import isEmpty from '../util/isEmpty';

import CardStats from "components/Cards/CardStats.js";

export default view(()=>{

  var total_due = 0;

  var dupData = {
    group_id : isEmpty(groupViewStore.group_id) ? "" : groupViewStore.group_id,
    occupied_members : isEmpty(groupViewStore.group_data) ? 0 : groupViewStore.group_data.occupied_members,
    total_members : isEmpty(groupViewStore.group_data) ? 0 : groupViewStore.group_data.total_members,
    no_of_months : isEmpty(groupViewStore.group_data) ? 0 : groupViewStore.group_data.no_of_months,
    no_of_auctions_completed : isEmpty(groupViewStore.group_data) ? 0 : groupViewStore.group_data.no_of_auctions_completed,
  };

  groupViewStore.group_members.forEach((doc)=>{
    total_due += doc.account_balance < 0 ? Math.abs(doc.account_balance) : 0;
  })

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Group ID"
                  statTitle={dupData.group_id}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DUE"
                  statTitle={total_due}
                 
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MEMBERS"
                  statTitle={`${dupData.occupied_members} / ${dupData.total_members}`}
                  
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Progress"
                  statTitle={(dupData.no_of_auctions_completed/dupData.no_of_months)*100 + "%"}
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
})
