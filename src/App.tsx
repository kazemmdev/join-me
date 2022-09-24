import { Outlet, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
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
