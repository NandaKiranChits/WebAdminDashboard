import React from 'react';
import {view} from '@risingstack/react-easy-state';
import groupListStore from './store';

export default view(({onChange,value})=>{
    if(groupListStore.group_list.length===0){
        groupListStore.getGroupData();
    }
    return (
    
          
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
       
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <i class="fas fa-users"></i>
        </span>
        
        <select value={value} onChange={(e)=>onChange(e.target.value)} class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
            {
                (groupListStore.isLoading) &&
                <option>Loading...</option>
            }
            <option value="">Select</option>
            {
                (!groupListStore.isLoading) &&
                
                groupListStore.group_list.map((doc)=>{
                    
                    return <option value={doc.group_name}>{doc.group_name}</option>
                })

            }
        </select>
      </div>
    )
})