import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, About, Error, Contact } from "./pages";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Route>
        <Route path="/portfolio/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
