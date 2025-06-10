import { Routes, Route } from 'react-router-dom';
import Login from '../pages/authentication/login/login';
import CreateAccount from '../pages/authentication/createAccount/createAccount';

export default function AuthenticationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
}
