import Aboutus from "./components/Aboutus/Aboutus";
import BuyingDashboard from "./components/BuyingDashboard/BuyingDashboard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buyingDashboard" element={<BuyingDashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
