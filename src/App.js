import Aboutus from "./components/Aboutus/Aboutus";
import BuyingDashboard from "./components/BuyingDashboard/BuyingDashboard";
import MainLoginPage from "./components/LoginSignUpPages/MainPage/MainLoginPage";
import BuyerSignUp from "./components/LoginSignUpPages/BuyerPage/SignUp/BuyerSignUp";
import BuyerLogin from "./components/LoginSignUpPages/BuyerPage/Login/BuyerLogin";
import SellerSignUp from "./components/LoginSignUpPages/SellerPage/SignUp/SellerSignUp";
import SellerLogin from "./components/LoginSignUpPages/SellerPage/Login/SellerLogin";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/buyerSignUp" element={<BuyerSignUp />} />
        <Route path="/buyerLogin" element={<BuyerLogin />} />
        <Route path="/sellerSignUp" element={<SellerSignUp />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/buyingDashboard" element={<BuyingDashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
