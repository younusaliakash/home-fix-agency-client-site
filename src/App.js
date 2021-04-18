import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import Blogs from "./Components/Blogs/Blogs";
import ContactUsPage from "./Components/ContactUsPage/ContactUsPage";
import LogIn from "./Components/LogIn/LogIn";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrder from "./Components/Dashboard/ManageOrder/ManageOrder";
import ReviewForm from "./Components/Dashboard/ReviewForm/ReviewForm";
import Booking from "./Components/Dashboard/Booking/Booking";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/servicesPage">
            <ServicesPage/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/contact">
            <ContactUsPage/>
          </Route>
          <Route path="/logIn">
            <LogIn/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList/>
          </Route>
          <Route path="/reviewForm">
            <ReviewForm/>
          </Route>
          <Route path="/orderList">
            <OrderList/>
          </Route>
          <Route path="/addServices">
            <AddServices/>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="/manageOrders">
            <ManageOrder/>
          </Route>
          <PrivateRoute path="/booking/:_id">
            <Booking/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
