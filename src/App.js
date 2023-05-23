import Aboutus from "./components/Aboutus/Aboutus";
import BuyingDashboard from "./components/BuyingDashboard/BuyingDashboard";
import MainLoginPage from "./components/LoginSignUpPages/MainPage/MainLoginPage";
import BuyerSignUp from "./components/LoginSignUpPages/BuyerPage/SignUp/BuyerSignUp";
import BuyerLogin from "./components/LoginSignUpPages/BuyerPage/Login/BuyerLogin";
import SellerSignUp from "./components/LoginSignUpPages/SellerPage/SignUp/SellerSignUp";
import SellerLogin from "./components/LoginSignUpPages/SellerPage/Login/SellerLogin";
import PostTour from "./components/PostTourPage/PostTour";
import BuyerProfile from "./components/ProfilePages/Buyer/BuyerProfile";
import SellerProfile from "./components/ProfilePages/Seller/SellerProfile";
import TourDetail from "./components/TourDetail/TourDetail";
import ContactUs from "./components/ContactUS/ContactUs";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import NotificationsDetials from "./components/NotificationsDetails/NotificationsDetails";
import SellerProfileDetail from "./components/sellerProfileDetail/sellerProfileDetail";
import PaymentFrom from "./components/PaymentForm/PaymentForm";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/buyerSignUp" element={<BuyerSignUp />} />
        <Route path="/buyerLogin" element={<BuyerLogin />} />
        <Route path="/sellerSignUp" element={<SellerSignUp />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/postTour" element={<PostTour />} />
        <Route path="/buyingDashboard" element={<BuyingDashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/buyerProfile" element={<BuyerProfile />} />
        <Route path="/sellerProfile" element={<SellerProfile />} />
        <Route path="/tourDetail/:id" element={<TourDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/notifications/:id" element={<NotificationsDetials />} />
        <Route
          path="/sellerProfileDetail/:email"
          element={<SellerProfileDetail />}
        />
        <Route path="/paymentForm/:id" element={<PaymentFrom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
