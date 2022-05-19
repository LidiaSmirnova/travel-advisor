import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/things-to-do/SearchPage";
import CountryPage from "./pages/country/CountryPage";
import BuildPlanPage from "./pages/trip-plan/BuildPlanPage";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/things-to-do" element={<SearchPage />} />
            <Route path="/things-to-do/:country" element={<CountryPage />} />
            <Route
              path="/things-to-do/:country/plan"
              element={<BuildPlanPage />}
            />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
