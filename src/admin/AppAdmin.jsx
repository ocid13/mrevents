import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/vendor/fonts/boxicons.css";
import "../assets/vendor/css/core.css";
import "../assets/vendor/css/theme-default.css";
import "../assets/css/demo.css";
import "../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../assets/vendor/libs/apex-charts/apex-charts.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import DashboardLcm from "./pages/lcm/dashboard/DashboardLcm.jsx";
import DaftarProspectLcm from "./pages/lcm/sign-up/DaftarProspectLcm.jsx";
import DaftarCustomerLcm from "./pages/lcm/sign-up/DaftarCustomerLcm.jsx";
import StudentLcm from "./pages/lcm/data_student/StudentLcm.jsx";
import EditLcm from "./pages/lcm/data_student/EditLcm.jsx";

import DashboardLdcm from "./pages/ldcm/dashboard/DashboardLdcm.jsx";
import DaftarProspectLdcm from "./pages/ldcm/sign-up/DaftarProspectLdcm.jsx";
import DaftarCustomerLdcm from "./pages/ldcm/sign-up/DaftarCustomerLdcm.jsx";
import StudentLdcm from "./pages/ldcm/data_student/StudentLdcm.jsx";
import EditLdcm from "./pages/ldcm/data_student/EditLdcm.jsx";

import Dashboard from "./pages/Dashboard.jsx";

const SCRIPTS = [
  { src: "/assets/vendor/js/helpers.js", id: "helpers-js" },
  { src: "/assets/js/config.js", id: "config-js" },
  { src: "/assets/vendor/libs/jquery/jquery.js", id: "jquery-js" },
  { src: "/assets/vendor/libs/popper/popper.js", id: "popper-js" },
  { src: "/assets/vendor/js/bootstrap.js", id: "bootstrap-js" },
  { src: "/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js", id: "perfect-scrollbar-js" },
  { src: "/assets/vendor/js/menu.js", id: "menu-js" },
  { src: "/assets/vendor/libs/apex-charts/apexcharts.js", id: "apexcharts-js" },
  { src: "/assets/js/main.js", id: "main-js" },
  { src: "/assets/js/dashboards-analytics.js", id: "dashboards-analytics-js" },
  { src: "https://buttons.github.io/buttons.js", id: "github-buttons-js", isExternal: true },
];

function AdminApp() {
  useEffect(() => {
    const loadScript = async ({ src, id, isExternal }) => {
      if (document.getElementById(id)) return;

      const script = document.createElement("script");
      script.id = id;
      script.src = isExternal ? src : process.env.PUBLIC_URL + src;
      script.async = true;

      return new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        await Promise.all(SCRIPTS.map(loadScript));
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadAllScripts();
  }, []);

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/main-dashboard" element={<Dashboard />} />

              <Route path="/dashboard-lcm" element={<DashboardLcm />} />
              <Route path="/daftar-prospect-lcm" element={<DaftarProspectLcm />} />
              <Route path="/daftar-customer-lcm" element={<DaftarCustomerLcm />} />
              <Route path="/student-lcm" element={<StudentLcm />} />
              <Route path="/edit-lcm" element={<EditLcm />} />
              
              <Route path="/dashboard-ldcm" element={<DashboardLdcm />} />
              <Route path="/daftar-prospect-ldcm" element={<DaftarProspectLdcm />} />
              <Route path="/daftar-customer-ldcm" element={<DaftarCustomerLdcm />} />
              <Route path="/student-ldcm" element={<StudentLdcm />} />
              <Route path="/edit-ldcm" element={<EditLdcm />} />
            </Routes>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminApp;
