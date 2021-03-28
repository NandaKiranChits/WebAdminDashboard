

import CustomTable from '../../CustomTable';

import {view} from '@risingstack/react-easy-state';
import groupViewStore from './store/GroupViewStore';

export default view(()=>{
    var values = [];
    groupViewStore.auction_data.forEach((auction)=>{
      values.push(
        [
          auction["auction_no"] +  (auction.company_auction ? " (No Auction)" : "") ,
          auction.date_and_time.toDate().toUTCString(),
          auction.bidding_details.bid_amount,
          auction.bidding_details.dividend,
          auction.bidder_details.ticket_id,
          auction.chit_value - auction.bidding_details.bid_amount,
          auction.status,
          //<DropDown />
        ]
      )
    })
    return (
      <>
        <CustomTable 
            tableName = {"Auction Details"}
            color= {"light"}
            rows = {["Auct No.","Date","Bid Amount","Dividend","Ticket No.","Prize Money","Status"]}
            values = {values}
        />
      </>
    );
})



  