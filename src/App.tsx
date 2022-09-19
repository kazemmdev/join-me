import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello guyes!</div>} />
        <Route
          path="talks"
          element={
            <div>
              <h1>Hi</h1>
              <Outlet />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
