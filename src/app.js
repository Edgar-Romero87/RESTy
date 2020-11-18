import React from "react";

import Header from "./header/header.js";
import Form from "./form/form.js";
import Footer from "./footer/footer.js";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
