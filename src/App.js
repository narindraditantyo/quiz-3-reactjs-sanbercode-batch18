import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./Assets/css/font.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "./Utils/Context";
import Routes from "./Utils/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Header />
          <Routes />
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
