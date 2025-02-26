import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import logo_sidebar from "../../assets/img/logo-mrevents.png";
import { Nav } from "react-bootstrap";

const MENU_ITEMS = [
  { path: "/admin/main-dashboard", label: "Main Dashboard", icon: <MdDashboard /> },
  {
    label: "Life Camp",
    icon: <FaHome />,
    subItems: [
      { path: "/admin/dashboard-lcm", label: "Dashboard", icon: <FaHome /> },
      {
        label: "Sign Up",
        subItems: [
          { path: "/admin/daftar-prospect-lcm", label: "Daftar Prospect" },
          { path: "/admin/daftar-customer-lcm", label: "Daftar Customer" },
        ],
      },
      { path: "/admin/student-lcm", label: "Student" },
    ],
  },
  {
    label: "Lead Camp",
    icon: <FaHome />,
    subItems: [
      { path: "/admin/dashboard-ldcm", label: "Dashboard", icon: <FaHome /> },
      {
        label: "Sign Up",
        subItems: [
          { path: "/admin/daftar-prospect-ldcm", label: "Daftar Prospect" },
          { path: "/admin/daftar-customer-ldcm", label: "Daftar Customer" },
        ],
      },
      { path: "/admin/student-ldcm", label: "Student" },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isPathActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <img src={logo_sidebar} alt="logo-sidebar" width={150} />
      </div>

      <div
        className="me-xl-0 d-xl-none"
        style={{
          position: "absolute",
          top: "10px", // Jarak dari atas
          right: "10px", // Jarak dari kanan
          zIndex: 1000, // Biar di atas elemen lain
        }}
      >
        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto btn btn-primary shadow rounded-circle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px", // Ukuran tombol
            height: "50px", // Tinggi tombol
          }}
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <Nav className="menu-inner py-3 flex-column">
        {MENU_ITEMS.map((item) => (
          <div key={item.label} className={`menu-item ${isPathActive(item.path) || openMenus[item.label] ? "active open" : ""}`}>
            {item.subItems ? (
              <>
                <a href="#" className="menu-link menu-toggle" onClick={() => toggleMenu(item.label)}>
                  <span className="menu-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
                <div className={`menu-sub ${openMenus[item.label] ? "open" : ""}`}>
                  {item.subItems.map((subItem) => (
                    <div key={subItem.label} className={`menu-item ${isPathActive(subItem.path) || openMenus[subItem.label] ? "active open" : ""}`}>
                      {subItem.subItems ? (
                        <>
                          <a href="#" className="menu-link menu-toggle" onClick={() => toggleMenu(subItem.label)}>
                            <span>{subItem.label}</span>
                          </a>
                          <div className={`menu-sub ${openMenus[subItem.label] ? "open" : ""}`}>
                            {subItem.subItems.map((innerItem) => (
                              <div key={innerItem.path} className={`menu-item ${isPathActive(innerItem.path) ? "active" : ""}`}>
                                <Link to={innerItem.path} className="menu-link">
                                  {innerItem.label}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link to={subItem.path} className="menu-link">
                          {subItem.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Link to={item.path} className="menu-link">
                <span className="menu-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </Nav>
    </aside>
  );
};

export default Sidebar;