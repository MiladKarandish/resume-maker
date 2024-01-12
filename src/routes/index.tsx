import { Routes, Route } from "react-router-dom";
import Download from "../pages/download";
import Home from "../pages/home/home";

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
};
export default RouteHandler;
