import HomePage from "./pages/HomePage";
import EmployeesList from "./pages/EmployeesList";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeesList />} />
      </Routes>
  )
}

export default App
