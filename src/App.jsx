import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import DashBoard from '../src/pages/DashBoard';
import './App.css';
import Leads from '../src/pages/Leads';
import Teachers from '../src/pages/Teachers';
import Setting from '../src/pages/Setting';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidde">
          <Navbar />
          <div className="flex flex-1 overflow-hidden ">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-bg-light-gray p-4">
              <Routes>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/attendance" element={<Leads />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/courses" element={<Courses />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
