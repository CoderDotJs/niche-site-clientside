import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOreder from './Components/Place Order/PlaceOreder';
import MyOrders from './Components/MyOrder/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import UpdateStatus from './Components/UpdateStatus/UpdateStatus';
import AddService from './Components/AddService/AddService';
import ContactUs from './Components/ContactUs/ContactUs';
import Apartments from './Components/Apartments/Apartments';
import AboutUs from './Components/AboutUs/AboutUs';
import Pay from './Components/Pay/Pay';
import AdminRoute from './AdminRoute/AdminRoute';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageApartments from './Components/ManageApartments/ManageApartments';
import AddReviewFrom from './Components/AddReview/AddReviewForm/AddReviewFrom';
import Signup from './Components/Signup/Signup';

function App() {
  return (

      // main app 

    <div className="App">

      {/* all router inside auth provider  */}

      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">  {/**for root direcotry */}
            <Home></Home>
          </Route>
          <Route exact path="/home"> {/*for home direcotry*/ }
            <Home></Home>
          </Route>
          <Route exact path="/apartments"> {/*for services direcotry*/ }
            <Apartments></Apartments>
          </Route>
          <Route exact path="/about-us"> {/*for cars direcotry*/ }
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute exact path="/services/place-order/:service_name"> {/*for place order direcotry*/ }
              <PlaceOreder></PlaceOreder>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
                <Pay></Pay>
          </PrivateRoute>
          <Route exact path="/contact-us"> {/*for contact us direcotry*/ }
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/login"> {/*for login direcotry*/ }
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute exact path="/my-orders"> {/* fro manage my orders directory */}
            <MyOrders></MyOrders>
          </PrivateRoute>
          <AdminRoute exact path="/manage-orders"> {/* for manage orders directory */}
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute exact path="/dashboard/add-appartment">
              <AddService></AddService>
          </AdminRoute>
          <PrivateRoute exact path="/dashboard/add-review">
              <AddReviewFrom></AddReviewFrom>
          </PrivateRoute>
          <AdminRoute exact path="/dashboard/manage-apartments">
              <ManageApartments></ManageApartments>
          </AdminRoute>
          <AdminRoute exact path="/dashboard/make-admin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path="/update-status/:id"> {/* for update the status of order */}
            <UpdateStatus></UpdateStatus>
          </AdminRoute>
          <AdminRoute exact path="/add-new-services"> {/* for add new services / package */}
            <AddService></AddService>
          </AdminRoute>
          <Route exact path="/signup"> {/*for signup direcotry*/ }
            <Login></Login>
          </Route>
          <Route exact path="*"> {/*for 404 direcotry*/ }
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
