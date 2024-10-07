import { useState } from "react";
import ShareComplete from '../../assets/images/share-complete.png';
import PhotoCheck1 from "./step1.tsx";
import PhotoCheck2 from "./step2.tsx";
import PhotoCheck3 from "./step3.tsx";
import { useLocation } from "react-router-dom";

interface InfoState {
  year: string;
  month: string;
  day: string;
  boothLocation: string;
}

function PhotoCheck() {
  const location = useLocation();
  const { year, month, day, boothLocation } = location.state as InfoState || {};
  const dateInfo = year + "년 " + month + "월 " + day + "일 " + boothLocation;
  // State to track the current step
  const [step, setStep] = useState(1);

  // Function to handle the next button click
  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1); // Increment the step state
  };

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      {step === 1 && (
        <PhotoCheck1
          handleNextClick={handleNextClick}
          dateInfo={dateInfo}
        />
      )}

      {step === 2 && (
        <PhotoCheck2
          handleNextClick={handleNextClick}
          handleBackStep={handleBackStep}
          dateInfo={dateInfo}
        />
      )}

      {step === 3 && (
        <PhotoCheck3
          handleNextClick={handleNextClick}
          handleBackStep={handleBackStep}
          dateInfo={dateInfo}
        />
      )}

      {step === 4 && (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <img src={ShareComplete} alt="share-complete" width="282" height="296" />
          <span className="text-gray400">공유가 완료됐어요</span>
        </div>
      )}
    </>
  );
}

export default PhotoCheck;
