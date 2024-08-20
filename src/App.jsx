import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Learning from './Pages/Learning';
import Projects from './Pages/Projects';
import Tasks from './Pages/Tasks';
import Attendance from './Pages/Attendance';
import People from './Pages/People';
import ManageLeave from './Pages/ManageLeave';
import Settings from './Pages/Settings';
import Sidebar from './SideBar/Sidebar';
import Notification from './Pages/Notification';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
    <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route index element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks/>} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/mange leave" element={<ManageLeave />} />
          <Route path="/people" element={<People />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/rectangle" element={<Settings />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
