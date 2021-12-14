import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import AddApprentice from "./pages/AddApprentice/AddApprentice";

import axios from "axios";
import CheckGroups from "./pages/CheckGroups/CheckGroups";

function App() {
  const [leads, setLeads] = useState([]);
  useEffect(() => {
    axios.get("/api/leads").then((res) => setLeads(res.data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckGroups leads={leads} />} />
        <Route path="/addapprentice" element={<AddApprentice />} />
      </Routes>
    </Router>
  );
}

export default App;
