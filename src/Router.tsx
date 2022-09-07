import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Index from "./layouts/DefaultLayouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
