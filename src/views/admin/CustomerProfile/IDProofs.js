import React from 'react';
import CustomTable from '../../CustomTable';

import {view} from '@risingstack/react-easy-state';
import custProfileStore from './store/index';

export default view(()=>{

    let values = [];

    if(custProfileStore.customer_data!==null){
      values.push(
        [
          custProfileStore.customer_data.aadhar_no,
          custProfileStore.customer_data.pan_no,
          custProfileStore.customer_data.gst,
          custProfileStore.customer_data.income_pa
        ]
      )
    }

    

    return (
        <CustomTable 
            color={"light"}
            tableName = "Identity Proofs"
            rows ={["Aadhar No","PAN No","GST","Income (PA)",]}
            values = {values }

        />
    )
})