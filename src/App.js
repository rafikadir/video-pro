import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import MakeOrder from './Components/Dashboard/MakeOrder/MakeOrder';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import ClientReview from './Components/Dashboard/Review/ClientReview';
import Login from './Components/Home/Login/Login';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Services from './Components/Home/Services/Services';
import Addadmin from './Components/Dashboard/addAdmin/Addadmin';
import AddService from './Components/Dashboard/AddService/AddService';


export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
         <PrivateRoute path="/dashboard">
            <OrderList></OrderList>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orderlist">
            <OrderList></OrderList>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/clientreview">
            <ClientReview></ClientReview>
          </Route>
          <PrivateRoute path="/service/:serviceid">
            <MakeOrder></MakeOrder>
          </PrivateRoute>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/addadmin">
            <Addadmin></Addadmin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  )}

export default App;
