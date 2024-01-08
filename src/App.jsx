import HomePage from "./pages/HomePage";
import WifiListPage from "./pages/WifiListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopArea from "./components/TopArea";
import Nabvar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="homePageTopArea">
        <div className="displayGrid">
          <div className="topArea">
            <TopArea />
          </div>
          <div className="navArea">
            <Nabvar />
          </div>
          {/* main Section area */}
          <div className="mainArea">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/wifilist" element={<WifiListPage />} />
              </Routes>
            </BrowserRouter>
          </div>
          <div className="fotterArea"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
