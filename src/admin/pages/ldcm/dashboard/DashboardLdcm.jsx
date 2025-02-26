import React, { useState } from "react";
import { MdOutlineCancel, MdPaid } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import ApexCharts from "react-apexcharts";
import { FaUserGraduate } from "react-icons/fa";

const DashboardLdcm = () => {
  const [activeTab, setActiveTab] = useState("all-time");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const CARD_TODAY = [
    { title: "Total Sign Up", count: "15" },
    { title: "Pending", count: "5" },
    { title: "Expired", count: "3" },
    { title: "Paid", count: "7" },
  ];

  const CARD_YTD = [
    {
      icon: <FaUserGraduate className="text-white" style={{ fontSize: "28px" }} />,
      title: "Total Sign Up",
      count: "70",
      bgColor: "bg-primary",
    }, 
    {
      icon: <LuClock3 className="text-white" style={{ fontSize: "28px" }} />,
      title: "Pending",
      count: "20",
      bgColor: "bg-warning",
    }, 
    {
      icon: <MdOutlineCancel className="text-white" style={{ fontSize: "28px" }} />,
      title: "Expired",
      count: "30",
      bgColor: "bg-danger",
    }, 
    {
      icon: <MdPaid className="text-white" style={{ fontSize: "28px" }} />,
      title: "Paid",
      count: "20",
      bgColor: "bg-success",
    }, 
  ];   

  const CardYtd = ({ card }) => (
    <div className="col">
      <div className={`card text-center shadow-sm text-white ${card.bgColor}`} >
        <div className="card-body">
          <div className="mb-2">{card.icon}</div>
          <h6 className="card-title mb-1">{card.title}</h6>
          <p className="card-text fs-5 fw-bold text-white">{card.count}</p>
        </div>
      </div>
    </div>
  );  

  const CardToday = ({ title, count }) => (
    <div className="col-auto">
      <div
        className="card shadow-sm"
        style={{ width: "200px", height: "50px" }}
      >
        <div className="card-body d-flex justify-content-between align-items-center p-2">
          <h6 className="card-title mb-0">{title}</h6>
          <h6 className="card-text fs-5 fw-bold">{count}</h6>
        </div>
      </div>
    </div>
  );

  const chartatas = {
    series: [
      {
        name: "STUDENT COUNT",
        data: [5, 12, 20], // Data dummy
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      labels: ["Nov", "Dec", "Jan"], // Label dummy
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  const chartbawah = {
    series: [
      {
        name: "PAYMENT COUNT",
        data: [20000000, 48000000, 58000000], // Data dummy
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      labels: ["Nov", "Dec", "Jan"], // Label dummy
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: true,
        labels: {
          formatter: function (value) {
            return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    // Today
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row g-2">
        <div className="row g-3">
          <div className="h4 font-weight-bold text-dark">LEAD CAMP</div>
        </div>
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark">TODAY</div>
          {CARD_TODAY.map((card, index) => (
            <CardToday key={index} title={card.title} count={card.count} />
          ))}
        </div>

        {/* YTD */}
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark mb-4">YTD</div>
          {CARD_YTD.map((card) => (
            <CardYtd key={card.id} card={card} />
          ))}
        </div>

        <div className="row g-3">
          {/* Total Student */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div className="card mb-2" style={{ height: "790px" }}>
              <div className="card-header d-flex justify-content-between py-2">
                <div className="card-title mb-0">
                  <h5 className="mb-3 mt-3 fs-5 fw-bold">TOTAL STUDENT (YTD)</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="text-center">
                      <tr>
                        <th>No</th>
                        <th>Program</th>
                        <th>Student</th>
                        <th>Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>1</td>
                        <td>LdCm-Jkt</td>
                        <td>5</td>
                        <td>Rp 20.000.000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LdCm-Srby</td>
                        <td>1</td>
                        <td>Rp 4.000.000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>LdCm-Bndng</td>
                        <td>1</td>
                        <td>Rp 4.000.000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>LdCm-Mdn</td>
                        <td>1</td>
                        <td>Rp 4.000.000</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>LdCm-Mkssr</td>
                        <td>1</td>
                        <td>Rp 4.000.000</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LdCm-Blkppn</td>
                        <td>1</td>
                        <td>Rp 4.000.000</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>LdCm-Sol</td>
                        <td>0</td>
                        <td>Rp -</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>LdCm-Mlng</td>
                        <td>0</td>
                        <td>Rp -</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>LdCm-Smrng</td>
                        <td>0</td>
                        <td>Rp -</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>LdCm-Plmbng</td>
                        <td>0</td>
                        <td>Rp -</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>LdCm-RA</td>
                        <td>10</td>
                        <td>Rp 18.000.000</td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <strong>TOTAL</strong>
                        </td>
                        <td></td>
                        <td>
                        <strong>20</strong>
                        </td>
                        <td><strong>Rp 58.000.000</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-6">
            <div className="card" style={{ height: "350px" }}>
              <div className="card-header d-flex justify-content-center py-2">
                <div className="card-title mb-0">
                  <h5 className="mb-3 mt-3 fs-5 fw-bold mb-4">TOTAL REVENUE</h5>
                  <ul className="nav nav-pills mb-4" role="tablist">
                    <li className="nav-item">
                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === "all-time" ? "active" : ""
                        }`}
                        role="tab"
                        onClick={() => handleTabClick("all-time")}
                      >
                        Yearly
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === "monthly" ? "active" : ""
                        }`}
                        role="tab"
                        onClick={() => handleTabClick("monthly")}
                      >
                        Monthly
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center align-items-center mb-6">
                  <div className="d-flex flex-column align-items-center gap-1">
                    <h3 className="mb-1">
                      Rp 58.000.000
                    </h3>
                    <br />
                    <small>Total Revenue</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grafik Student */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div className="card mb-2" style={{ height: "300px" }}>
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">GRAFIK STUDENT</h5>
                <div id="chartatas">
                  <ApexCharts
                    options={chartatas.options}
                    series={chartatas.series}
                    type="area"
                    height={225}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grafik Revenue */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div className="card" style={{ height: "300px" }}>
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">GRAFIK REVENUE</h5>
                <div id="chartbawah">
                  <ApexCharts
                    options={chartbawah.options}
                    series={chartbawah.series}
                    type="area"
                    height={225}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Source */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div
              className="card"
              style={{ height: "510px", display: "flex", flexDirection: "column", }}
            >

              <div className="card-header d-flex justify-content-between py-2">
                <h5 className="mb-3 mt-3 fs-5 fw-bold">SOURCE</h5>
              </div>

              <div className="card-body" style={{ flex: 1, overflowY: "auto" }}>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="text-center">
                      <tr>
                        <th rowSpan="2" className="align-middle text-center">Source</th>
                        <th colSpan="2" className="text-center">Jumlah</th>
                        <th rowSpan="2" className="align-middle text-center">Total</th>
                      </tr>
                      <tr>
                        <th>Prospect</th>
                        <th>Customer</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>AD</td>
                        <td>15</td>
                        <td>5</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>SocMed</td>
                        <td>10</td>
                        <td>6</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>Referral</td>
                        <td>10</td>
                        <td>1</td>
                        <td>11</td>
                      </tr>
                      <tr>
                        <td>Web</td>
                        <td>5</td>
                        <td>3</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>WAB</td>
                        <td>5</td>
                        <td>2</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>5</td>
                        <td>3</td>
                        <td>8</td>
                      </tr>
                      <br />
                      <tr>
                        <th><strong>TOTAL</strong></th>
                        <td><strong>50</strong></td>
                        <td><strong>20</strong></td>
                        <td><strong>70</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLdcm;
