import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About/About";
import Approved from "./Pages/Approved/Approved";
import Contact from "./Pages/Contact/Contact/Contact";
import Dentist from "./Pages/Dentist/Denitst/Dentist";
import Footer from "./Pages/Home/Footer/Footer.jsx";
import Header from "./Pages/Home/Header/Header.jsx";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Service from "./Pages/Services/Service/Service";
import Conditions from "./Pages/Home/Conditions/Conditions.jsx";
import Piles from "./Pages/Home/Conditions/Proctology/Piles.js";
import AnalFissure from "./Pages/Home/Conditions/Proctology/AnalFissure";
import AnalFistula from "./Pages/Home/Conditions/Proctology/AnalFistula";
import PerianalAbscess from "./Pages/Home/Conditions/Proctology/PerianalAbscess";
import PilonidalSinus from "./Pages/Home/Conditions/Proctology/PilonidalSinus";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Conditions />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/piles" element={<Piles />} />
            <Route path="/analfissure" element={<AnalFissure />} />
            <Route path="/analfistula" element={<AnalFistula />} />
            <Route path="/perianalabscess" element={<PerianalAbscess />} />
            <Route path="/pilonidalsinus" element={<PilonidalSinus />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/dentist" element={<Dentist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
