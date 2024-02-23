import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/headerFooter/Header";
import Home from "./pages/home/Home";
import "@mantine/core/styles.css";

import bg from "./images/bg.jpeg";
import Footer from "./components/headerFooter/Footer";
import useScreenSize from "./hooks/useScreenSize";

const App = () => {
  const screenSize = useScreenSize();

  const bgStyle = {
    height: `${screenSize.height}px`,
  };

  return (
    <div className="app-div">
      <div className="body-div">
        <Header />
        <img src={bg} alt="bg" className="page-bg" style={bgStyle} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
