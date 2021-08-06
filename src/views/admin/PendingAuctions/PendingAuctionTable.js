import CustomDropDownChildWidget from '../../CustomDropDownChildWidget';

import CustomTable from '../../CustomTable';
import {Link} from 'react-router-dom';

import {view} from '@risingstack/react-easy-state';
import pendingAuctionStore from './PendingAuctionStore';


export default view(()=>{

   pendingAuctionStore.getPendingAuctionData();

   var values = [];

   pendingAuctionStore.pendingData.forEach((doc)=>{
     values.push(
       [
         doc.group_id,
         doc.auction_no-1,
         doc.create_date.toDate().toLocaleDateString(),
         doc.date_and_time.toDate().toString(),
         <DropDown group_id={doc.group_id} auct_no={doc.auction_no}/>
       ]
     )
   })

    return (
      <>
        <CustomTable 
            tableName = {"Upcoming Auctions"}
            color= {"light"}
            rows = {["Group ID","Auct. No.","Create Date","Auction Date and Timings",""]}
            values = {values}
        />
      </>
    );
})


  function DropDown({group_id,auct_no}){
    return (
      <CustomDropDownChildWidget 
          dropDownItems={
            [
              <OnClickWidget name="Approve" route={`/admin/approveAuction?group_id=${group_id}&auction_no=${auct_no}`}/>,
            
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
