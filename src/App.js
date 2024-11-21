// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import EmployeeList from "./pages/EmployeeList";
// import CreateEmployee from "./pages/CreateEmployee";
// import EditEmployee from "./pages/EditEmployee";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/employees" element={<EmployeeList />} />
//         <Route path="/create-employee" element={<CreateEmployee />} />
//         <Route path="/edit-employee/:id" element={<EditEmployee />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import EmployeeList from "./pages/EmployeeList";
// import CreateEmployee from "./pages/CreateEmployee";
// import EditEmployee from "./pages/EditEmployee";
// import Login from "./pages/Login";

// const App = () => {
//   const isAuthenticated = true; // Replace with actual authentication logic

//   return (
//     <Router>
//       {isAuthenticated && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/home"
//           element={isAuthenticated ? <Home /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/employees"
//           element={isAuthenticated ? <EmployeeList /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/create-employee"
//           element={isAuthenticated ? <CreateEmployee /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/edit-employee/:id"
//           element={isAuthenticated ? <EditEmployee /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user details

  return (
    <Router>
      {isAuthenticated && <Navbar user={user} setAuth={setIsAuthenticated} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login setAuth={setIsAuthenticated} setUser={setUser} />
            )
          }
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/employees"
          element={isAuthenticated ? <EmployeeList /> : <Navigate to="/" />}
        />
        <Route
          path="/create-employee"
          element={isAuthenticated ? <CreateEmployee /> : <Navigate to="/" />}
        />
        <Route
          path="/edit-employee/:id"
          element={isAuthenticated ? <EditEmployee /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

