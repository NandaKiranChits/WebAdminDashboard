import React from 'react';
import CustomTable from '../../CustomTable';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{

    let values = [];

    if(custProfileStore.customer_data!==null){
      values.push(
        [
          1,
          custProfileStore.customer_data.bank_name,
          custProfileStore.customer_data.account_no,
          custProfileStore.customer_data.ifsc,
        ]
      )
    }

    

    return (
        <CustomTable 
            color={"light"}
            tableName = "Bank Account Details"
            rows ={["Sl No.","Bank Name","Account No","IFSC Code"]}
            values = {values }

        />
    )
})

  
