import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import Offers from "./Pages/Offers";
function App() {
  return (
<>
<Router>
  <Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/Profile" element={<Profile/>}/>
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/sign-in" element={<SignIn/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/Offers" element={<Offers/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
