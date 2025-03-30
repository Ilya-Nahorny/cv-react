// React and external libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import { store } from "./redux/store";

// Internationalization
import "./i18n";

// Components
import App from "./App";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    
    <Provider store={store}>
      <App />
    </Provider>
  
  </BrowserRouter>
);