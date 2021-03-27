
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';


import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var value = [];

    if(groupViewStore.group_data!==null){
      value.push(
        [
          groupViewStore.group_data.prizedInterestRate,
          groupViewStore.group_data.nonPrizedInterestRate,
          groupViewStore.group_data.foreman_commission,
          groupViewStore.group_data.min_bid ,
          groupViewStore.group_data.max_bid,
          <DropDown />

        ]
      )
    }
    return (
      <>
        <CustomTable 
            tableName = {"Group Settings"}
            color= {"light"}
            rows = {["Priced Interest(%)","Non Priced(%)","Foreman Commission(%)","Min Bid(%)","Max Bid(%)",""]}
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
  


  