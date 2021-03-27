
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';


import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var value = [];
    if(groupViewStore.group_data!==null){
      value.push(
        [
          groupViewStore.group_data.pso_no,
          groupViewStore.group_data.pso_date.toDate().toLocaleDateString(),
          groupViewStore.group_data.cc_no,
          groupViewStore.group_data.cc_date.toDate().toLocaleDateString(),
          <DropDown />
        ]
      )
    }
    return (
      <>
        <CustomTable 
            tableName = {"PSO/CC Details"}
            color= {"light"}
            rows = {["PSO NO.","PSO Date","CC No","CC Date",""]}
            values = {value}
        />
      </>
    );
})

  function DropDown(){
    return (
      <CustomDropDown 
          dropDownItems={
            [
              {"name":"Edit",callFunction:()=>{console.log("Do nothing");}}
            ]
          }
      />
    )
  }
  


  