import { useState } from "react";
import ShareComplete from '../../assets/images/share-complete.png';
import PhotoCheck1 from "./step1.tsx";
import PhotoCheck2 from "./step2.tsx";
import PhotoCheck3 from "./step3.tsx";

function PhotoCheck() {

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
        <PhotoCheck1 handleNextClick={handleNextClick} />
      )}

      {step === 2 && (
        <PhotoCheck2 handleNextClick={handleNextClick} handleBackStep={handleBackStep} />
      )}

      {step === 3 && (
        <PhotoCheck3 handleNextClick={handleNextClick} handleBackStep={handleBackStep} />
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
