import GetUser from "./components/GetUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetUser />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
