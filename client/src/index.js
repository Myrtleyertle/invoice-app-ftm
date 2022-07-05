import ReactDOM from "react-dom/client";
import App from "./App";
import { DataState } from "./data/state/DataState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invoice } from "./pages/invoices/Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Invoice/:id" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  </DataState>
);
