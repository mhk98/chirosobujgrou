import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./About/AboutUs";
import CompanyBackground from "./About/CompanyBackground";
import Mission from "./About/Mission";
import Vission from "./About/Vission";
import ChairmanMessage from "./About/ChairmanMessage";
import ManagingDirectorMessage from "./About/ManagingDirectorMessage";
import BoardDirector from "./About/BoardDirector";
import BoardAdvisior from "./About/BoardAdvisior";
import OurManagement from "./About/OurManagement";
import NoticeBoard from "./About/NoticeBoard";
import UpComing from "./Projects/UpComing";
import OnGoing from "./Projects/OnGoing";
import HandOver from "./Projects/HandOver";
import LandWanted from "./Query/LandWanted";
import Buyers from "./Query/Buyers";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/why-cs-group" element={<AboutUs />}></Route>
        <Route
          path="/company-background"
          element={<CompanyBackground />}
        ></Route>
        <Route path="/our-mission" element={<Mission />}></Route>
        <Route path="/our-vission" element={<Vission />}></Route>
        <Route path="/chairman-message" element={<ChairmanMessage />}></Route>
        <Route
          path="/managing-director-message"
          element={<ManagingDirectorMessage />}
        ></Route>
        <Route path="/board-director" element={<BoardDirector />}></Route>
        <Route path="/board-advisor" element={<BoardAdvisior />}></Route>
        <Route path="/our-management" element={<OurManagement />}></Route>
        <Route path="/notice-board" element={<NoticeBoard />}></Route>
        <Route path="/upcoming" element={<UpComing />}></Route>
        <Route path="/ongoing" element={<OnGoing />}></Route>
        <Route path="/handover" element={<HandOver />}></Route>
        <Route path="/land-wanted" element={<LandWanted />}></Route>
        <Route path="/buyers" element={<Buyers />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
