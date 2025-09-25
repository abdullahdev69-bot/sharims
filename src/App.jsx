import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayouts";
import Loader from "./components/Loader";
import 'leaflet/dist/leaflet.css';
import ScrollToTop from "./components/ScrollToTop";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const SocialMedia = lazy(() => import("./pages/SocialMediaManagment"));
const WebDev = lazy(() => import("./pages/Services/WebDevelopment")); 
const DigitalMarketing = lazy(() => import("./pages/Services/DigitalMarketing"));
const CyberSecurity = lazy(() => import("./pages/Services/Cybersecurity"));
const Sale = lazy(() => import("./pages/Services/SaleSolutions"));
const Monitoring = lazy(() => import("./pages/Services/MonitoringServices"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/services/webdevelopment" element={<MainLayout><WebDev /></MainLayout>} />
          <Route path="/services/digitalmarketing" element={<MainLayout><DigitalMarketing /></MainLayout>} />
          <Route path="/services/cybersecurity" element={<MainLayout><CyberSecurity /></MainLayout>} />
          <Route path="/services/salesolution" element={<MainLayout><Sale /></MainLayout>} />
          <Route path="/services/monitoringservices" element={<MainLayout><Monitoring /></MainLayout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
