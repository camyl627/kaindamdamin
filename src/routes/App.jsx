// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../pages/app/layout/appLayout';
import Chatbot from '../pages/app/chatbot/chatbot';
import Meals from '../pages/app/meals/meals';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/kaindamdamin" element={<AppLayout />}>
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="meals" element={<Meals />} />
      </Route>
    </Routes>
  );
}
