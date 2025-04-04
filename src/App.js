

import React from "react";
// import ProductList from "./ProductList";

function App() {
  return (
    <div style={styles.container}>
      {/* Sidebar Navbar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.navTitle}>Categories</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Grocery</li>
          <li style={styles.navItem}>Hardware</li>
          <li style={styles.navItem}>Plants</li>
          <li style={styles.navItem}>Products</li>
          <li style={styles.navItem}>Decor Items</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <img 
            src="" 
            alt="Home Depot Logo" 
            style={styles.logo} 
          />
          <h1 style={styles.title}>The Home </h1>
        </header>

        {/* Product List */}
        {/* <ProductList /> */}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "180px",
    backgroundColor: "#d46419",
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
    color: "black",
    padding: "10px 0",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
  },
  header: {
    backgroundColor: "#d46419",
    padding: "0px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },

  
  title: {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
  },
};

export default App;
