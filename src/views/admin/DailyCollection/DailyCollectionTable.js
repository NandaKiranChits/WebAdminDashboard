import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function DailyCollectionTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Daily Collection Table"}
            color= {"light"}
            rows = {["#","Date","Cash","Cheque","NEFT","Total",""]}
            values = {
              [[1,
                "21/12/2020",
              "40,000","4,000","4,000" ,"1,000,000",<DropDown />],
                ]
            }
        />
      </>
    );
  }


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
