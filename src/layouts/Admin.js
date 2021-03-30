import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

import Group from "views/admin/Group/index.js";
import GroupView from "views/admin/GroupView/index.js";
import CustomerProfile from "views/admin/CustomerProfile/index.js";
import CustomerList from "views/admin/CustomersList/index.js";
import PendingAuctions from "views/admin/PendingAuctions/index.js";
import Payments from "views/admin/Payments/index.js";
import Vouchers from "views/admin/Vouchers/index.js";
import DailyCollection from "views/admin/DailyCollection/index.js";
import AddGroup from "views/admin/AddGroup/index.js";
import AddNewCustomer from "views/admin/AddNewCustomer/index.js";
import AddNewMemberToGroup from "views/admin/AddMemberToGroup/index.js";
import AddNewPayment from "views/admin/AddNewPayment/index.js";
import ApproveAuction from 'views/admin/ApproveAuction/index.js';
import CancelPayment from "views/admin/CancelPayment/index.js";

import WaiveInterest from 'views/admin/WaiveInterest/index';

import { useHistory } from "react-router-dom";
import {view} from '@risingstack/react-easy-state';
import LoginStore from 'views/auth/LoginStore';


export default view(()=>{
  const history = useHistory();
  if(!LoginStore.isLoggedIn){
    history.push("/auth/login");
  }
  return (
    <>
      <Sidebar />
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/group" exact component={Group} />
            <Route path="/admin/addGroup" exact component={AddGroup} />
            <Route path="/admin/groupView" exact component={GroupView} />
            <Route path="/admin/customerProfile" exact component={CustomerProfile} />
            <Route path="/admin/customerList" exact component={CustomerList} />
            <Route path="/admin/addNewCustomer" exact component={AddNewCustomer} />
            <Route path="/admin/pendingAuction" exact component={PendingAuctions} />
            <Route path="/admin/payments" exact component={Payments} />
            <Route path="/admin/vouchers" exact component={Vouchers} />
            <Route path="/admin/dailyCollection" exact component={DailyCollection} />
            <Route path="/admin/addNewMemberToGroup" exact component={AddNewMemberToGroup} />
            <Route path="/admin/addNewPayment" exact component={AddNewPayment} />
            <Route path="/admin/approveAuction" exact component={ApproveAuction} />
            <Route path="/admin/waiveInterest" exact component={WaiveInterest} />
            <Route path="/admin/cancelPayment" exact component={CancelPayment} />
            <Redirect from="/admin" to="/admin/group" />
          </Switch>
          <FooterAdmin />
    </>
  );
})
