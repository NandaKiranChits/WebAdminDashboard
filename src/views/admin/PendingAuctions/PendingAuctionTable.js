import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

export default function PendingAuctionTable({ color }) {
    return (
      <>
        <CustomTable 
            tableName = {"Upcoming Auctions"}
            color= {"light"}
            rows = {["Group ID","Auct. No.","Create Date","Auction Date and Timings",""]}
            values = {
              [["GRS101",
                "1",
            "12/10/2020","30-12-2020 10:45 AM",<DropDown />],]
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
