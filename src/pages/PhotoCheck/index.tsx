import { useState, useEffect } from "react";
import ShareComplete from '../../assets/images/share-complete.png';
import PhotoCheck1 from "./step1.tsx";
import PhotoCheck2 from "./step2.tsx";
import PhotoCheck3 from "./step3.tsx";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

type InfoState = {
  year: string;
  month: string;
  day: string;
  boothLocation: string;
  qrLink: string;
  image : File;
};

function PhotoCheck() {
  const location = useLocation();
  const { year, month, day, boothLocation, qrLink, image } = location.state as InfoState || {};
  const dateInfo = year + "년 " + month + "월 " + day + "일 " + boothLocation;
  const [step, setStep] = useState(1);
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [records, setRecords] = useState("클릭하여 오늘 있었던 일들을 기록해보세요");
  const navigate = useNavigate();
  const imgSrc = qrLink ? qrLink : image;
  
  // Function to handle the next button click
  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1); // Increment the step state
  };

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  }
  
  useEffect(() => {
    if (step === 4) {
      const timeout = setTimeout(() => {
        navigate('/home'); // 2초 후에 home으로 리디렉션
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <>
      {step === 1 && (
        <PhotoCheck1
          handleNextClick={handleNextClick}
          dateInfo={dateInfo}
          imgSrc={imgSrc}
        />
      )}

      {step === 2 && (
        <PhotoCheck2
          handleNextClick={handleNextClick}
          handleBackStep={handleBackStep}
          hashTags={hashTags}
          setHashTags={setHashTags}
          records={records}
          setRecords={setRecords}
          dateInfo={dateInfo}
          imgSrc={imgSrc}
        />
      )}

      {step === 3 && (
        <PhotoCheck3
          handleNextClick={handleNextClick}
          handleBackStep={handleBackStep}
          year={year}
          month={month}
          day={day}
          records={records}
          hashtags={hashTags}
          dateInfo={dateInfo}
          imgSrc={imgSrc}
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
