import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
// import FavoritesPage from "./pages/FavoritesPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/profile/:uid" element={<ProfilePage />} />
        <Route path="/service/:sid" element={<ServicePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
