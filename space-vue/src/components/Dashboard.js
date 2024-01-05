import React, { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((res) => {
        console.log(res);
        setRowData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleLogout = () => {
    navigate("/");
  };
  const columnDefs = [
    { headerName: "Mission Name", field: "mission" },
    { headerName: "Launch Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Launch Date", field: "date" },
    { headerName: "Rocket Type", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Mission Outcome", field: "successful" },
  ];
  return (
    <>
      <div>
        <div className="p-3 mb-2 bg-info text-dark text-center d-flex justify-content-around">
          <h2>SpaceVue Dashboard</h2>
          <button
            type="button"
            onClick={handleLogout}
            className="border border-primary rounded"
          >
            Logout
          </button>
        </div>
        <div className="ag-theme-alpine" style={{ height: 550, width: "100%" }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={true}
            paginationPageSize={10}
          />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
