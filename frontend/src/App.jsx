import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Primaryschool from "./primary/Primaryschool";
import See from "./tosee/See";
import Neb from "./neb/Neb";
import Diploma from "./diploma/Diploma";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primary" element={<Primaryschool />} />
        <Route path="/ble&see" element={<See />} />
        <Route path="/slc" element={<Neb />} />
        <Route path="/diploma" element={<Diploma />} />
      </Routes>
    </>
  );
}

export default App;
