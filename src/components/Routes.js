import { Routes, Route } from "react-router-dom";
import Champions from "./champions";
import Home from "./home";
import Items from "./items";
import { RealtimeData } from "./firebasedatabase";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/champions" element={<Champions />} />
      <Route path="/items" element={<Items />} />
      <Route path="/tierlist" element={<RealtimeData/>}/>
    </Routes>
  );
};

export default Routing;
