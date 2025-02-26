import React, { useState } from "react";
import { MdOutlineCancel, MdPaid } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all-time");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Today LCm
  const CARD_TODAY_LCM = [
    { title: "Total Sign Up", count: "10" },
    { title: "Pending", count: "2" },
    { title: "Expired", count: "3" },
    { title: "Paid", count: "5" },
  ];

  // YTD LCm
  const CARD_YTD_LCM = [
    {
      icon: <FaUserGraduate className="text-white" style={{ fontSize: "28px" }} />,
      title: "Total Sign Up",
      count: "50",
      bgColor: "bg-primary",
    }, 
    {
      icon: <LuClock3 className="text-white" style={{ fontSize: "28px" }} />,
      title: "Pending",
      count: "10",
      bgColor: "bg-warning",
    }, 
    {
      icon: <MdOutlineCancel className="text-white" style={{ fontSize: "28px" }} />,
      title: "Expired",
      count: "15",
      bgColor: "bg-danger",
    }, 
    {
      icon: <MdPaid className="text-white" style={{ fontSize: "28px" }} />,
      title: "Paid",
      count: "25",
      bgColor: "bg-success",
    }, 
  ];   

  const CardYtdLcm = ({ card }) => (
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

  const CardTodayLcm = ({ title, count }) => (
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

  // Today LdCm
  const CARD_TODAY_LDCM = [
    { title: "Total Sign Up", count: "15" },
    { title: "Pending", count: "5" },
    { title: "Expired", count: "3" },
    { title: "Paid", count: "7" },
  ];

  // YTD LdCm
  const CARD_YTD_LDCM = [
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

  const CardYtdLdcm = ({ card }) => (
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

  const CardTodayLdcm = ({ title, count }) => (
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

  // Grafik Student
  const optionsStudent = {
    chart: {
      type: "bar",
      height: 300,
      stacked: true,
      toolbar: { show: true },
      zoom: { enabled: true },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      categories: [
        "Nov 2024",
        "Dec 2024",
        "Jan 2025",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };
  
  const seriesStudent = [
    { name: "LCm", data: [10, 20, 25] },
    { name: "LdCm", data: [5, 12, 20] },
  ];


  // Grafik Revenue
  const optionRevenue = {
    chart: {
      type: "bar",
      height: 300,
      stacked: true,
      toolbar: { show: true },
      zoom: { enabled: true },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      categories: ["Nov 2024", "Des 2024", "Jan 2025"],
    },
    yaxis: {
      labels: {
        formatter: (value) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value),
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };  
  
  const seriesRevenue = [
    { name: "LCm", data: [170000000, 340000000, 365000000] },
    { name: "LdCm", data: [20000000, 48000000, 58000000] },
  ];
  

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row g-2">
        {/* Today LCm */}
        <div className="row g-3">
          <div className="h4 font-weight-bold text-dark">LIFE CAMP</div>
        </div>
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark">TODAY</div>
          {CARD_TODAY_LCM.map((card, index) => (
            <CardTodayLcm key={index} title={card.title} count={card.count} />
          ))}
        </div>

        {/* YTD LCm */}
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark mb-4">YTD</div>
          {CARD_YTD_LCM.map((card) => (
            <CardYtdLcm key={card.id} card={card} />
          ))}
        </div>

        {/* Today LdCm */}
        <div className="row g-3">
          <div className="h4 font-weight-bold text-dark">LEAD CAMP</div>
        </div>
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark">TODAY</div>
          {CARD_TODAY_LDCM.map((card, index) => (
            <CardTodayLdcm key={index} title={card.title} count={card.count} />
          ))}
        </div>

        {/* YTD LdCm */}
        <div className="row g-3">
          <div className="h5 font-weight-bold text-dark mb-4">YTD</div>
          {CARD_YTD_LDCM.map((card) => (
            <CardYtdLdcm key={card.id} card={card} />
          ))}
        </div>

        <div className="row g-3">
          {/* Total Student */}
          <div className="col-md-6 col-lg-4 col-xl-7 order-0 mb-4">
            <div className="card mb-2" style={{ height: "300px" }}>
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
                        <td>LCm</td>
                        <td>25</td>
                        <td>Rp 365.000.000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LdCm</td>
                        <td>20</td>
                        <td>Rp 58.000.000</td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <strong>TOTAL</strong>
                        </td>
                        <td></td>
                        <td>
                        <strong>45</strong>
                        </td>
                        <td><strong>Rp 423.000.000</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grafik Student */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div className="card mb-2" >
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">GRAFIK STUDENT</h5>
                <div id="chartatas">
                  <Chart options={optionsStudent} series={seriesStudent} type="bar" height={300} />
                </div>
              </div>
            </div>
          </div>

          {/* Grafik Revenue */}
          <div className="col-md-6 col-lg-4 col-xl-6 order-0 mb-4">
            <div className="card mb-2" >
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">GRAFIK REVENUE</h5>
                <div id="chartatas">
                  <Chart options={optionRevenue} series={seriesRevenue} type="bar" height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
