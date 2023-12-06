import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Business from "./Pages/Business/Business";
import AllProducts from "./Pages/AllProducts/AllProducts";
import NewsArticles from "./Pages/NewsArticles/NewsArticles";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClassicTextile-Business" element={<Business />} />
        <Route path="/ClassicTextile-AllProducts" element={<AllProducts />} />
        {/* <Route path="/ClassicTextile-NewsArticles" element={<NewsArticles />} /> */}
        <Route path="/ClassicTextile-ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
