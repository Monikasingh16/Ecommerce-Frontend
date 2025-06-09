
import  { useEffect, useState } from "react";
import React from "react";
// import ProductList from "./ProductList";
//Import AboutPage
const AboutPage = lazy(() => import("./AboutPage")); 
import ServerList from "./ServerList";
import ErrorBoundary from "./ErrorBoundary";
import  { lazy, Suspense } from "react";



import ProblematicComponent from "./ProblematicComponent";


import './index.css';

function App() {
  const [calendarVisible, setCalendarVisible] = useState(false)
  return (
    <div style={styles.container}>
      {/* Sidebar Navbar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.navTitle}>Categories</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Links</li>
          <li style={styles.navItem}>Servers</li>
          <li style={styles.navItem}>DCK </li>
          <li style={styles.navItem}>Store </li>
          <li style={styles.navItem}>CMDB</li>
        </ul>
      </nav>

      {/* Main Content */}
      
      <div style={styles.mainContent}>

        {/* Header */}

        <header style={styles.header}>

          <img 
            src="https://logos-world.net/wp-content/uploads/2021/08/Home-Depot-Symbol.png" 
            alt="Home Depot Logo" 
            style={styles.logo} 
          />
          <h1 style={styles.title}>The Home Depot</h1>
        </header>


        

        {/* <ServerList /> */}
        <ServerList
        calendarVisible={calendarVisible}
        setCalendarVisible={setCalendarVisible}
      />

<ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>



   

      <div>
      <h1>Welcome to the Home Page</h1>

      <Suspense fallback={<p>Loading About Page...</p>}>
        <AboutPage />
      </Suspense>

  
    </div>


      </div>
    </div>
  );
  
}

// Styles


const styles = {
  container: {
    display: "flex",
    height: "173vh",
  },
  sidebar: {
    width: "150px",
    backgroundColor: "black",
    padding: "20px",
    color: "black",
  },
  navTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  navItem: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#d46419",
    padding: "10px 0",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
  },
  header: {
    backgroundColor: "black",
    padding: "0px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  
  logo: {
    width: "90px",
    height: "50px",
    marginRight: "10px",
  },

  
  title: {
    color: "#d46419",
    fontSize: "30px",
    fontWeight: "bold",
  },



};

export default App;
