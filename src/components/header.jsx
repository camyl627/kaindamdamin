import { Menu } from 'lucide-react';
import './header.css';

export default function Header({ onToggleDrawer }) {
  return (
    <header className="app-header">
      <button className="drawer-toggle" onClick={onToggleDrawer}>
        <Menu size={24} />
      </button>
      <h1 className="app-title">Kain Damdamin</h1>
      <div className="profile-section">
        <img
          src="/default-profile.png" // replace with real profile if needed
          alt="Profile"
          className="profile-image"
        />
      </div>
    </header>
  );
}
