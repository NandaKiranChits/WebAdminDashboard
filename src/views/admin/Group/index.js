import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import GroupTable from './GroupTable';
// components


import {view} from '@risingstack/react-easy-state';
import groupListStore from './GroupListStore';



export default view(()=> {

  var total_groups = 0 , total_members = 0,occupied_members = 0,completed = 0;

  groupListStore.groupData.forEach((doc)=>{
    total_groups += 1;
    total_members += doc.total_members;
    occupied_members += doc.occupied_members;
    completed += (doc.no_of_months===doc.no_of_auctions_completed) ? 1:0;
  })




  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CustomHeaderStats widgets={[
          {"name":"Total Groups",value:total_groups,icon:"far fa-chart-bar",color:"bg-red-500"},
          {"name":"Members",value:total_members,icon:"fas fa-users",color:"bg-orange-500"},
          {"name":"Vacant",value:total_members-occupied_members,icon:"fas fa-chart-pie",color:"bg-pink-500"},
          {"name":"Completed",value:completed,icon:"fas fa-percent",color:"bg-pink-500"},
        ]
        }/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <GroupContent />
        </div>
      </div>
      
    </>
    
  );
})

const GroupContent = () =>{

    return (
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-12/12 px-4">
          
          <div className="flex flex-wrap">
              <GroupTable color="light"/>
          </div>
        </div>
      </div>
    )

    /*return (<div className="flex flex-wrap mt-4">
    <div className="w-full mb-12 px-4">
      <GroupTable color="light"/>
    </div>
  </div>);*/
}


  