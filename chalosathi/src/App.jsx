import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Riders from "./rides/Riders";
import Hists from "./history/Hists";
import Profile from "./profile/Profile";
import Home from "./home/Home";
import SignUpPage from "./component/auth/SignUp";
import SignInPage from "./component/auth/SignIn";
import RequireAuth from "./RequireAuth.jsx"; 
import { UserProvider } from "./context/UserProvider.jsx"; 
import About from "./About/About.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="bg-[#121a21] w-screen min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/about" element={<About />} />


            {/* Protected Routes */}
            <Route path="/rides" element={<RequireAuth><Riders /></RequireAuth>} />
            <Route path="/history" element={<RequireAuth><Hists /></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
