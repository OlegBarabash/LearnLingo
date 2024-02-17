import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teachers } from "./pages/Teachers";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./components/Layout/Layout";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
