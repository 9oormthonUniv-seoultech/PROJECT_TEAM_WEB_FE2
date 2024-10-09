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
import FeedPage from "./pages/Booth/FeedPage";
import ReviewPage from "./pages/Booth/ReviewPage";
import ImagePage from "./pages/Booth/ImagePage";
import BoothDetail from "./pages/Booth";
import WriteReview from "./pages/WriteReview";

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

        <Route path="/home/:boothId" element={<BoothDetail />}>
          <Route path="feed" element={<FeedPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="image" element={<ImagePage />} />
        </Route>
        <Route path="/write-review/:boothId" element={<WriteReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
