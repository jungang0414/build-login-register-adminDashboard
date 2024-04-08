import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// import React router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Dashboard />
      <Login />
      <Register />
    </>
  );
}

export default App;
