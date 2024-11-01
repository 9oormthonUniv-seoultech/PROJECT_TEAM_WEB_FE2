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
import Step1 from "./pages/WriteReview/step1";
import Step2 from "./pages/WriteReview/step2";
import CompleteScreen from "./pages/CompleteScreen";
import RecordPage from "./pages/My/RecordPage";
import FavoritesPage from "./pages/My/FavoritesPage";
import MyReviewPage from "./pages/My/MyReviewPage";
import LikeBoothsPage from "./pages/My/LikeBoothsPage";
import VisitedBoothsPage from "./pages/My/VisitedBoothsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/album" element={<Album />} />

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
        <Route path="/my" element={<My />}>
          <Route path="booth-records" element={<RecordPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="my-reviews" element={<MyReviewPage />} />
        <Route path="like-booths" element={<LikeBoothsPage />} />
        <Route path="visited-booths" element={<VisitedBoothsPage />} />
        <Route path="/write-review/:boothId" element={<WriteReview />}>
          <Route path="step/1" element={<Step1 />} />
          <Route path="step/2" element={<Step2 />} />
        </Route>
        <Route path="/write-review/complete" element={<CompleteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
