// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/products")
//       .then(response => setProducts(response.data))
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div style={styles.container}>
//       <ul style={styles.productGrid}>
//         {products.map(product => (
//           <li key={product.id} style={styles.productCard}>
//             <img src={product.image} alt={product.name} style={styles.image} />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     padding: "20px",
//   },
//   productGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
//     gap: "20px",
//     listStyle: "none",
//     padding: 0,
//   },
//   productCard: {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "15px",
//     textAlign: "center",
//     backgroundColor: "#fff",
//     boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
//   },
//   image: {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",
//   },
// };

// export default ProductList;

// Code for ServerList

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ServerList = () => {
//   const [servers, setServers] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");

// //   useEffect(() => {
// //     axios.get("http://localhost:5000/servers")
// //       .then(res => setServers(res.data))
// //       .catch(err => console.error("Error fetching servers:", err));
// //   }, []);

// useEffect(() => {
//     axios.get("http://localhost:5000/servers?limit=10")
//       .then(res => setServers(res.data))
//       .catch(err => console.error("Error fetching servers:", err));
//   }, []);

//   return (
//     <div style={styles.container}>
//       <div style={styles.buttonGroup}>
//         <button
//           style={{
//             ...styles.button,
//             backgroundColor: activeTab === "all" ? "orange" : "#ccc",
//           }}
//           onClick={() => setActiveTab("all")}
//         >
//           All Servers
//         </button>
//         <button
//           style={{
//             ...styles.button,
//             backgroundColor: activeTab === "datacenters" ? "orange" : "#ccc",
//           }}
//           onClick={() => setActiveTab("datacenters")}
//         >
//           Data Centers
//         </button>
//       </div>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Server Name</th>
//             <th>IP Address</th>
//             <th>Status</th>
//             <th>Data Center</th>
//           </tr>
//         </thead>
//         <tbody>
//           {servers.map((server) => (
//             <tr key={server.id}>
//               <td>{server.Server_Sys_ID}</td>
//               <td>{server.Host_Name}</td>
//               <td>{server.Server_OperatingSystem}</td>
//               <td>{server.Patch_Month}</td>
//               <td>{server.Patch_Notes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//   },
//   buttonGroup: {
//     display: "flex",
//     marginBottom: "20px",
//     gap: "10px",
//   },
//   button: {
//     padding: "10px 20px",
//     border: "none",
//     color: "white",
//     cursor: "pointer",
//     fontWeight: "bold",
//     borderRadius: "5px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   th: {
//     backgroundColor: "#f5f5f5",
//     padding: "10px",
//     textAlign: "left",
//     borderBottom: "2px solid #ddd",
//   },
//   td: {
//     padding: "10px",
//     borderBottom: "1px solid #ddd",
//   },
// };

// export default ServerList;

//  using antd

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Calendar, Modal, Input } from "antd";
import "antd/dist/reset.css";
import "./App.css";


  

const ServerList = ({ calendarVisible, setCalendarVisible }) => {
    
        const [selectedDate, setSelectedDate] = useState(null);
      
        const handleDateSelect = (value) => {
          setSelectedDate(value.format("YYYY-MM-DD HH:mm:ss")
        ); // Save date in desired format
        };
  const [servers, setServers] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
//   const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedHost, setSelectedHost] = useState("");
  //    new usestate
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  //    for searching through the server name..

  const [searchText, setSearchText] = useState("");

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert("Please select a date first.");
      return;
    }


    try {
        await axios.post(" http://localhost:5000/api/submit-date", {
          date: selectedDate,
          Server_Sys_ID:selectedRowKeys,
   
         
        });
     
  
        alert("Date submitted successfully!");
        setCalendarVisible(false); // close modal
        
       
      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to submit date.");
      }
    };

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/servers?limit=10")
      .then((res) => setServers(res.data))
      .catch((err) => console.error("Error fetching servers:", err));
  }, []);

  const showCalendar = (hostName) => {
    setSelectedHost(hostName);
    setCalendarVisible(true);
  };

  //    tables

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
      console.log("Selected rows: ", newSelectedRowKeys);
    },
  };


  const columns = [
    {
      title: <span style={{ color: "black", fontWeight: "bold" }}>Server_Sys_ID</span>,
      dataIndex: "Server_Sys_ID",
      key: "Server_Sys_ID",
    },

    {
      title: (
        <span style={{ color: "black", fontWeight: "bold" }}>Server Name</span>
      ),
      dataIndex: "Host_Name",
      key: "host",


    //   render: (text) => (
    //     <Button
    //       type="link"
    //       onClick={() => showCalendar(text)}
    //       style={{ color: "#d46419" }}
    //     >
    //       {text}
    //     </Button>
    //   ),

    },

    {
      title: (
        <span style={{ color: "black", fontWeight: "bold" }}>
          Server_OperatingSystem
        </span>
      ),
      dataIndex: "Server_OperatingSystem",
      key: "ip",
    },

    

    {
      title: (
        <span style={{ color: "black", fontWeight: "bold" }}>Patch_Month</span>
      ),
      dataIndex: "Patch_Month",
      key: "status",
    },



    {
      title: (
        <span style={{ color: "black", fontWeight: "bold" }}>Patch_Notes</span>
      ),
      dataIndex: "Patch_Notes",
      key: "datacenter",
    },

    {
      title: (
        <span style={{ color: "black", fontWeight: "bold" }}>Patch_Status</span>
      ),
      dataIndex: "Patch_Status",
      key: "Status",
      render: (text) => (
        <span style={{ color: "green", fontWeight: "bold" }}>{text}</span>
      ),
    },


    {
        title: (
          <span style={{ color: "black", fontWeight: "bold" }}>Schedule Time</span>
        ),
        dataIndex: "time",
        key: "datacenter"
      },
  
    
  ];

  return (

    <div style={{ padding: "30px" }}>
      <div style={{ display: "flex", marginBottom: "20px", gap: "60px" }}>
        <Button
          style={{
            backgroundColor: activeTab === "all" ? "#d46419" : "#ccc",
            color: "white",
            border: "none",
          }}
          onClick={() => setActiveTab("all")}
        >
          All Servers
        </Button>

        <Button
          style={{
            backgroundColor: activeTab === "datacenters" ? "#d46419" : "#ccc",
            color: "white",
            border: "none",
          }}
          onClick={() => setActiveTab("datacenters")}
        >
          Data Centers
        </Button>

        {/*  for the search bar */}

        <Input.Search
          placeholder="Search by Server Name"
          allowClear
          enterButton={
            <Button
              style={{
                backgroundColor: "#d46419",
                color: "black",
                border: "none",
              }}
            >
              Search
            </Button>
          }
          style={{ marginBottom: 20, width: 300 }}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/*  for scheduling the button we use */}

        {/* <Button
          style={{
            backgroundColor: "#d46419",
            color: "white",
            border: "none",
          }}
        //   onClick={() => setActiveTab("Schedule")}
        >
          Schedule
        </Button> */}


{selectedRowKeys.length > 0 && (
  <Button
    style={{
      backgroundColor: "#d46419",
      color: "black",
      border: "none",
      marginBottom: "20px",
    }}
    // onClick={() => setActiveTab("Schedule")} // optional functionality
    onClick={() => showCalendar()}
   
  >
    Schedule
  </Button>
)}

      </div>

      {/*  user should able to select select  */}

      <Table
        columns={columns}
        // dataSource={servers}
        dataSource={servers.filter((server) =>
          server.Host_Name.toLowerCase().includes(searchText.toLowerCase())
        )}
        rowKey={(record) => record.Server_Sys_ID}
        bordered
        pagination={false}
        className="custom-ant-table"
        rowSelection={rowSelection}
      />

      {/* <Modal
        title={`Select Date for ${selectedHost}`}
        visible={calendarVisible}
        onCancel={() => setCalendarVisible(false)}
        footer={null}
      >
        <Calendar fullscreen={false} />
      </Modal> */}

      {/* <Modal
        title={
          <span style={{ color: "#d46419" }}>

            Select Date for 
          </span>
       
        }
        visible={calendarVisible}
        onCancel={() => setCalendarVisible(false)}
        footer={null}
        bodyStyle={{ backgroundColor: "#1e1e1e" }} 
      >

        <Calendar
          fullscreen={false}
          style={{
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            borderRadius: "10px",
            padding: "10px",
          }}
          className="custom-calendar"
         

        />
      </Modal> */}



      <Modal
      title={
        <span style={{ color: "#d46419" }}>
          Select Date
        </span>
      }
      visible={calendarVisible}
      onCancel={() => setCalendarVisible(false)}
      footer={null}
      bodyStyle={{ backgroundColor: "#1e1e1e" }}
    >
      <Calendar
        fullscreen={false}
        onSelect={handleDateSelect}
        style={{
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          borderRadius: "10px",
          padding: "10px",
        }}
        className="custom-calendar"
      />

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#d46419",
            borderColor: "#d46419",
            borderRadius: "5px",
          }}
        >
          Submit
        </Button>
      </div>
    </Modal>

    </div>
  );
};

export default ServerList;
