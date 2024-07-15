import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Primaryschool from "./primary/Primaryschool";

import Neb from "./neb/Neb";
import Diploma from "./diploma/Diploma";
import Faculty from "./faculty/Faculty";
import Contact from "./contact/Contact";
import Apply from "./apply/Apply";
import Convert from "./Convert";
import Login from "./upload/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primary" element={<Primaryschool />} />

        <Route path="/slc" element={<Neb />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/staff" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
