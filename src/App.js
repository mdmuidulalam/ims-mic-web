import React from "react";
import Products from "./components/backboneComponents/products/products";
import styles from "./App.sass";

function App() {
  return (
    <>
      <div>
        <span className={`${styles["app-text"]}`}>
          {" "}
          This is the App component
        </span>
      </div>
      <div>
        <Products />
      </div>
    </>
  );
}

export default App;
