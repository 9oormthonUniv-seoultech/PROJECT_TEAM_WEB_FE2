import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import Album from "./pages/Album";
import My from "./pages/My";
import PhotoUpload from "./pages/PhotoUpload";
import QRScan from "./pages/QRScan";
import PhotoReview from "./pages/PhotoReview";
import PhotoCheck from "./pages/PhotoCheck";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
