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

import Certification from "./Components/Certification";
import HelpFund from "./Components/helpFund/HelpFund";
import PhotoGallery from "./Components/media/PhotoGallery";
import Contact from "./Components/contact/Contact";
import OnGoingDetails from "./Projects/OnGoingDetails";
import Asset1 from "./property/Asset1";
import Asset3 from "./property/Asset3";
import Asset2 from "./property/Asset2";

import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/all.min.css";
import "./assets/css/animate.min.css";
import "./assets/webfonts/flaticon/flaticon.css";
import "./assets/css/owl.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/layerslider.css";
import "./assets/css/template.css";
import "./assets/css/style.css";
import "./assets/css/colors/color.css";
// import "./assets/css/loader.css";

function App() {
  return (
    <div className="">
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
        <Route path="/ongoing-details/:id" element={<OnGoingDetails />}></Route>
        <Route path="/handover" element={<HandOver />}></Route>
        <Route path="/land-wanted" element={<LandWanted />}></Route>
        <Route path="/buyers" element={<Buyers />}></Route>
        <Route path="/asset1" element={<Asset1 />}></Route>
        <Route path="/asset2" element={<Asset2 />}></Route>
        <Route path="/asset3" element={<Asset3 />}></Route>
        <Route path="/certification" element={<Certification />}></Route>
        <Route path="/help-fund" element={<HelpFund />}></Route>
        <Route path="/photo-gallery" element={<PhotoGallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
