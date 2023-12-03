
import Header from "./components/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Statistics from "./components/Statistics";
import SecurityUpdate from "./components/SecurityUpdate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/Statistics'} element={<Statistics />} />
        <Route path={'/SecurityUpdate'} element={<SecurityUpdate />} />
        <Route path={'/Contact'} element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
