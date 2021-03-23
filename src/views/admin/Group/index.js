import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CustomHeaderStats from "components/Headers/CustomHeaderStats.js";

import GroupTable from './GroupTable';
// components


export default function Group() {
  return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CustomHeaderStats widgets={[
          {"name":"Total Groups",value:5,icon:"far fa-chart-bar",color:"bg-red-500"},
          {"name":"Total Members",value:"200/250",icon:"fas fa-users",color:"bg-orange-500"},
          {"name":"Total Due",value:"2,00,00",icon:"fas fa-chart-pie",color:"bg-pink-500"},
          {"name":"Prized",value:"150/200",icon:"fas fa-percent",color:"bg-pink-500"},

        ]
        }/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <GroupContent />
        </div>
      </div>
      
    </>
    
  );
}

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


  