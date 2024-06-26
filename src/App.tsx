import Signin from "./components/Signin/Signin"
import Home from "./components/Home/Home"
import OtpPage from "./components/Otp/OtpPage"
import Signup from "./components/Signup/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from "./components/ErrorPage/ErrorPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  )
}

export default App
