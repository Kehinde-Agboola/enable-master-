import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { SchoolMonie } from "./pages/SchoolMoni";
import { WhatWeDo } from "./pages/WhatWeDo";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/schoolmoni" element={<SchoolMonie />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
