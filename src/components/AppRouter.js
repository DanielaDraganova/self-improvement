import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Goals from "./Goals/Goals";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/goals" element={<Goals />} />
        <Route path="/users" />
        <Route path="/home" />
      </Routes>
    </Router>
  );
};

export default AppRouter;
