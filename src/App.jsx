import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { HelmetProvider } from "react-helmet-async";
import {MainProvider} from "./context/MainContext";

function App() {
  return (
      <MainProvider>
        <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </MainProvider>
  );
}

export default App;
