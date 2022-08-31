import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./views/Register";
import Login from "./views/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
