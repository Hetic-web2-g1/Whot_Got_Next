import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Evenement from "./pages/evenement";
import JoinGroup from "./pages/joingroup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="evenement" element={<Evenement />} />
      <Route path="joingroup" element={<JoinGroup />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
