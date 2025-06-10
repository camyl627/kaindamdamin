import { NavLink } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <>
      <h2 className="sidebar-title">Kain Damdamin</h2>
      <ul className="sidebar-list">
        <li>
          <NavLink
            to="/kaindamdamin/chatbot"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            Chatbot
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kaindamdamin/meals"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            Meals
          </NavLink>
        </li>
      </ul>
    </>
  );
}
