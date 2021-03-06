import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';
import {view} from '@risingstack/react-easy-state';
import groupListStore from './GroupListStore';

export default view(()=>
  <PaymentDetailsTable 
      isLoading = {groupListStore.isLoading}
      groupData = {groupListStore.groupData}
      isError = {groupListStore.isError}
      errorMessage = {groupListStore.errorMessage}
  />
)
 
function PaymentDetailsTable({ isLoading,groupData,isError,errorMessage }) {
    var values = [];

    if(groupData.length===0){
        groupListStore.getGroupData();
    }

    groupData.forEach((data)=>{
      values.push([
                  <GetGroupName groupName={data.group_name} />,
                  data.group_value,
                  `${data.total_members}`,
                  data.total_members-data.occupied_members,
                  <CompletedPercentage percentage={parseFloat(data.no_of_auctions_completed/data.no_of_months)*100} />,
                  <DropDown group_id={data.group_name}/>
                ]);
    })
    return (
      <>
      {
        (isLoading) &&
        <p>Loading</p>
      }
      {
        ((!isLoading) && (isError)) &&
        <p>{errorMessage}</p>
      }
      {
        (!isLoading) &&
        <CustomTable 
            tableName = {"Groups"}
            color= {"light"}
            rows = {["Group ID","Value","Total Members","Vacant","Completed",""]}
            values = {values}
        />
          }
      </>
    );
  }

  function GetGroupName({groupName}){
    return (
      <span
      className={
        "ml-3 font-bold " +
        +("text-blueGray-600")
      }
    >
      {groupName}
    </span>);
    
  }

  function CompletedPercentage({percentage}){
    return  <div className="flex items-center">
    <span className="mr-2">{percentage}%</span>
    <div className="relative w-full">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
        ></div>
      </div>
    </div>
  </div>
  }

  function DropDown({group_id}){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="View" route={`/admin/groupView?group_id=${group_id}`}/>
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
