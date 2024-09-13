import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/authendication/Login";
import Register from "./pages/authendication/Register";
import HomeLayout from "./pages/home/HomeLayout";
import Home from "./pages/home/Home";
import { useState } from "react";

function App() {
  // Auth state
  const [isAuthendicated, setIsAuthendicated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isAuthendicated ? (
            <Route path="/" element={<Home />}>
              <Route index element={<HomeLayout />} />
            </Route>
          ) : (
            <Route path="/" element={<Register />} />
            
          )}

          {/* Register page should be outside the ternary */}
         
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
