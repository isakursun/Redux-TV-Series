import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
