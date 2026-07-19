import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Loader />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
