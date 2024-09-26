import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import Album from "./pages/Album";
import My from "./pages/My";
import PhotoUpload from "./pages/PhotoUpload";

import QRScan from "./pages/QRScan";
import PhotoReview from "./pages/PhotoReview";
import PhotoCheck from "./pages/PhotoCheck";

import LoginPage from "./pages/LoginPage";
import Token from "./pages/Token";
import Booth from "./pages/Booth";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/my" element={<My />} />
        <Route path="/photo-upload" element={<PhotoUpload />} />

        <Route path="/qr-scan" element={<QRScan />} />
        <Route path="/photo-review" element={<PhotoReview />} />
        <Route path="/photo-check" element={<PhotoCheck />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/token" element={<Token />} />
        <Route path="/home/booth" element={<Booth />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
