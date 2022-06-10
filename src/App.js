import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, About, Error } from "./pages";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
