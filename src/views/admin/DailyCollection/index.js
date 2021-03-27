import React from 'react';

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";


import DailyCollectionTable from "./DailyCollectionTable";
import SelectDates from './SelectDates';

import {view} from '@risingstack/react-easy-state';
import collectionStore from './DailyCollectionStore';

export default view(() =>{
    collectionStore.getTodaysData();
    return (
        <>
        <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <CustomHeaderStats widgets={[
                    {"name":"Today",value:`${collectionStore.todays_data.cash+collectionStore.todays_data.cheque+collectionStore.todays_data.neft}`,icon:"far fa-chart-bar",color:"bg-red-500"},
                    {"name":"Today CASH",value:`${collectionStore.todays_data.cash}`,icon:"fas fa-users",color:"bg-orange-500"},
                    {"name":"Today NEFT",value:`${collectionStore.todays_data.neft}`,icon:"fas fa-chart-pie",color:"bg-pink-500"},
                    {"name":"Today CHEQUE",value:`${collectionStore.todays_data.cheque}`,icon:"fas fa-percent",color:"bg-pink-500"},
                ]
                }/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Content />
                </div>
            </div>
        </>
    )
})

const Content = () =>{
    return (
    <div className="flex flex-wrap mt-4">
      <SelectDates />
      <div className="w-full mb-12 px-4">
        <DailyCollectionTable />
      </div>
  </div>)
}

