import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Primaryschool from "./primary/Primaryschool";

import Neb from "./neb/Neb";
import Diploma from "./diploma/Diploma";
import Faculty from "./faculty/Faculty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primary" element={<Primaryschool />} />

        <Route path="/slc" element={<Neb />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </>
  );
}

export default App;
