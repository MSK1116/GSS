import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Primaryschool from "./primary/Primaryschool";

import Neb from "./neb/Neb";
import Diploma from "./diploma/Diploma";
import Faculty from "./faculty/Faculty";
import Contact from "./contact/Contact";
import Apply from "./apply/Apply";
import Convert from "./component/Convert.jsx";
import Login from "./upload/Login";
import { useAuth } from "./auth/Authprovider.jsx";
import Dashboard from "./upload/Dashboard";
import Notification_page from "./component/Notification_page.jsx";
import useProgressBar from "./component/Progressbar.jsx";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });
  useProgressBar();
  const [authUser, setAuthUser] = useAuth();
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
        <Route path="/notification" element={<Notification_page />} />
        <Route path="/abc123" element={authUser ? <Dashboard /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
