import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Riders from "./rides/Riders";
import Hists from "./history/Hists";
import Profile from "./profile/Profile";
import Login from "./component/Login";
import Signin from "./component/Signin";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <div className="bg-[#121a21] w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rides" element={<Riders />} />
          <Route path="/history" element={<Hists />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
