import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoriesForm from "./pages/CategoriesForm";
import LoginPage from "./pages/LoginPage";
import StickyNavbar from "./components/NavbarSticky";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      {/* <StickyNavbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roles" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cat/create" element={<CategoriesForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
