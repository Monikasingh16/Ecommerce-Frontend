import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={styles.container}>
      <ul style={styles.productGrid}>
        {products.map(product => (
          <li key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "20px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
    gap: "20px",
    listStyle: "none",
    padding: 0,
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
};

export default ProductList;
