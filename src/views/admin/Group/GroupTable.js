import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function PaymentDetailsTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Groups"}
            color= {"light"}
            rows = {["Group ID","Value","Total Members","Completed","Due",""]}
            values = {
              [[<span
                className={
                  "ml-3 font-bold " +
                  +(color === "light" ? "text-blueGray-600" : "text-white")
                }
              >
                GRS101
              </span>,
              "10,000","12/50",<CompletedPercentage />,"40,000",<DropDown />]]
            }
        />
      </>
    );
  }

  function CompletedPercentage(){
    return  <div className="flex items-center">
    <span className="mr-2">60%</span>
    <div className="relative w-full">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
        <div
          style={{ width: "60%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
        ></div>
      </div>
    </div>
  </div>
  }

  function DropDown(){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="View" route="/admin/groupView"/>
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
