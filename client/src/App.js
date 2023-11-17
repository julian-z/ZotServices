import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
import CreatePage from "./pages/CreatePage";
import AboutPage from "./pages/AboutPage";
// import FavoritesPage from "./pages/FavoritesPage";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";
import { CookiesProvider } from 'react-cookie';



function App() {

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/service/:sid" element={<ServicePage />} />
          <Route path="/profile/:uid" element={<ProfilePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}
export default App;
