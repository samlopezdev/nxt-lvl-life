import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Panel from "./pages/Panel";


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/panel" element={<Panel />}></Route>
        </Route>

      </Routes>
      
    </BrowserRouter>
  );
}
