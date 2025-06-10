import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/sidebar.jsx';
import Header from '../../../components/header.jsx';
import './appLayout.css';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header onToggleDrawer={toggleSidebar} />

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="app-layout-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
