
import CustomDropDown from '../../CustomDropdown';

import CustomTable from '../../CustomTable';

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var values = [];
    groupViewStore.auction_data.forEach((auction)=>{
      values.push(
        [
          auction["auction_no"],
          auction.date_and_time.toDate().toUTCString(),
          auction.bidding_details.bid_amount,
          auction.bidding_details.dividend,
          auction.bidder_details.ticket_id,
          auction.chit_value - auction.bidding_details.bid_amount,
          auction.company_auction.toString(),
          auction.status,
          <DropDown />
        ]
      )
    })
    return (
      <>
        <CustomTable 
            tableName = {"Auction Details"}
            color= {"light"}
            rows = {["Auct No.","Date","Bid Amount","Dividend","Ticket No.","Prize Money","isCompanyAuction","Status",""]}
            values = {values}
        />
      </>
    );
})

  function DropDown(){
    return (
      <CustomDropDown 
          dropDownItems={
            [
              {"name":"Edit",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Cancel",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Re-Auction",callFunction:()=>{console.log("Do nothing");}},
              {"name":"Pay",callFunction:()=>{console.log("Do nothing");}},
            ]
          }
      />
    )
  }
  


  