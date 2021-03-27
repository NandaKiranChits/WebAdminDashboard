import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';
import React from "react";
import {view} from '@risingstack/react-easy-state';
import collectionStore from './DailyCollectionStore';


export default view(()=>{

    var values = [];
    var index = 1;
    collectionStore.data.forEach((data)=>{
        values.push(
            [index,
            data.date,
            data.cash,
            data.cheque,
            data.neft,
            data.cash+data.cheque+data.neft,
            <DropDown />]
        )
    })

    return (
      <>
        <CustomTable 
            tableName = {"Daily Collection Table"}
            color= {"light"}
            rows = {["#","Date","Cash","Cheque","NEFT","Total",""]}
            values = {values}
        />
      </>
    );
})


  function DropDown(){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="View" route="/admin/groupView"/>,
              <OnClickWidget name="Add Ticket" route="/admin/groupView"/>
            ] 
          }
      />
    )
  }
  

const OnClickWidget =({name,route}) =>{
  return (<Link 
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            to={route}
          >
            {name}  
          </Link>
          );
}
