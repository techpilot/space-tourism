import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DesScreen from "./screens/DesScreen";
import CrewScreen from "./screens/CrewScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/destinations" element={<DesScreen />} />
          <Route path="/crew" element={<CrewScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
