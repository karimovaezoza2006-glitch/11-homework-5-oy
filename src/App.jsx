import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import HomeDetail from "./pages/Home/Detail";
import AboutDetail from "./pages/About/Detail";
import BlogDetail from "./pages/Blog/Detail";
import ServicesDetail from "./pages/Services/Detail";
import ContactDetail from "./pages/Contact/Detail";

export default function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<Services />} />

        {/* DETAIL ROUTES */}
        <Route path="detail/:id" element={<HomeDetail />} />
        <Route path="about/:id" element={<AboutDetail />} />
        <Route path="contact/:id" element={<ContactDetail />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="services/:id" element={<ServicesDetail />} />
      </Route>
    </Routes>
  );
}
