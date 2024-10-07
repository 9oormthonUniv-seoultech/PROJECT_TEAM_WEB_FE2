import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import tw from 'twin.macro';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import CloseIcon from "../../assets/icons/close-icon";
import ProgressIcon from "../../assets/icons/progress-icon";

// Webcam 캡처 데이터 타입 정의
interface CaptureData {
  screenshot: string | null;
}

function QRScan() {
  const [isCaptured, setIsCaptured] = useState(false);
  const [captureData, setCaptureData] = useState<CaptureData>({ screenshot: null });
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (isCaptured){
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isCaptured]);
  
  useEffect(() => {
    if (percentage === 100) {
      // 100%가 화면에 렌더링된 후 페이지 이동
      const timeout = setTimeout(() => {
        navigate("/photo-review");
      }, 500); // 약간의 지연 시간(0.5초)을 주어 100%가 표시된 후 페이지 이동
      return () => clearTimeout(timeout);
    }
  }, [percentage]);
  
  const test = () =>{
    setIsCaptured(true);
  };

  const handleClose = () => {
    navigate("/photo-upload");
  }

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setCaptureData({ screenshot });
      setIsCaptured(true);
    }
  }, []);

  return (
      !isCaptured ? (
        <Container>
          <header className="w-[390px] h-[146px] relative mb-12">
            <div className="left-[150px] top-[82px] absolute text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']">
              QR 스캔
            </div>
            <CloseButton onClick={handleClose}>
              <CloseIcon color={"white"} />
            </CloseButton>
            <svg
              width="390"
              height="2"
              viewBox="0 0 390 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0"
            >
              <path
                d="M-6 1C-2.4 1 267.167 1 401.5 1"
                stroke="#E9EAEE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </header>
          <InfoBox>
            <InfoText>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 14.1152C11.1475 14.1152 12.1202 13.7163 12.9183 12.9183C13.7163 12.1202 14.1152 11.1475 14.1152 10C14.1152 8.8525 13.7163 7.87975 12.9183 7.08175C12.1202 6.28375 11.1475 5.88475 10 5.88475C8.8525 5.88475 7.87975 6.28375 7.08175 7.08175C6.28375 7.87975 5.88475 8.8525 5.88475 10C5.88475 11.1475 6.28375 12.1202 7.08175 12.9183C7.87975 13.7163 8.8525 14.1152 10 14.1152ZM10 12.6155C9.2615 12.6155 8.641 12.3642 8.1385 11.8615C7.63583 11.359 7.3845 10.7385 7.3845 10C7.3845 9.2615 7.63583 8.641 8.1385 8.1385C8.641 7.63583 9.2615 7.3845 10 7.3845C10.7385 7.3845 11.359 7.63583 11.8615 8.1385C12.3642 8.641 12.6155 9.2615 12.6155 10C12.6155 10.7385 12.3642 11.359 11.8615 11.8615C11.359 12.3642 10.7385 12.6155 10 12.6155ZM2.30775 17.5C1.80258 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.1974 0.5 15.6923V4.30775C0.5 3.80258 0.675 3.375 1.025 3.025C1.375 2.675 1.80258 2.5 2.30775 2.5H5.3615L6.66925 1.08275C6.83342 0.901917 7.03183 0.759583 7.2645 0.65575C7.49717 0.551916 7.74233 0.5 8 0.5H12C12.2577 0.5 12.5028 0.551916 12.7355 0.65575C12.9682 0.759583 13.1666 0.901917 13.3307 1.08275L14.6385 2.5H17.6923C18.1974 2.5 18.625 2.675 18.975 3.025C19.325 3.375 19.5 3.80258 19.5 4.30775V15.6923C19.5 16.1974 19.325 16.625 18.975 16.975C18.625 17.325 18.1974 17.5 17.6923 17.5H2.30775ZM10 16H17.6923C17.7821 16 17.8558 15.9712 17.9135 15.9135C17.9712 15.8558 18 15.7821 18 15.6923V4.30775C18 4.21792 17.9712 4.14417 17.9135 4.0865C17.8558 4.02883 17.7821 4 17.6923 4H13.9693L12.1345 2H10V16Z"
                  fill="#171D24"
                />
              </svg>
              어둡고 깔끔한 배경에서 더 잘 인식해요
            </InfoText>
            <InfoText>
              <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.99916 13.6L8.43966 8.6345C8.47166 8.58333 8.47482 8.5305 8.44916 8.476C8.42349 8.4215 8.37866 8.39425 8.31466 8.39425H5.51266L7.26266 2.31725C7.28832 2.24042 7.27549 2.16833 7.22416 2.101C7.17282 2.03367 7.10874 2 7.03191 2H2.49916C2.40949 2 2.33574 2.02883 2.27791 2.0865C2.22024 2.14417 2.19141 2.21792 2.19141 2.30775V9.69225C2.19141 9.78208 2.22024 9.85583 2.27791 9.9135C2.33574 9.97117 2.40949 10 2.49916 10H4.99916V13.6ZM9.98941 9.0135L4.73966 16.6307C4.64599 16.7679 4.52966 16.8582 4.39066 16.9017C4.25149 16.9454 4.11332 16.9454 3.97616 16.9017C3.83899 16.8582 3.72516 16.7787 3.63466 16.6632C3.54432 16.5479 3.49916 16.4082 3.49916 16.2442V11.5H2.49916C2.00049 11.5 1.57457 11.3234 1.22141 10.9702C0.868073 10.6169 0.691406 10.1909 0.691406 9.69225V2.30775C0.691406 1.80908 0.868073 1.38308 1.22141 1.02975C1.57457 0.676583 2.00049 0.5 2.49916 0.5H7.33941C7.83441 0.5 8.23632 0.6875 8.54516 1.0625C8.85416 1.4375 8.94524 1.85258 8.81841 2.30775L7.49916 6.89425H8.86441C9.40674 6.89425 9.80774 7.13367 10.0674 7.6125C10.3271 8.09133 10.3011 8.55833 9.98941 9.0135Z"
                  fill="#171D24"
                />
              </svg>
              문서가 빛 반사되지 않도록 주의해주세요
            </InfoText>
          </InfoBox>
          <CameraBox>
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "environment", // 후면 카메라 사용
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "19px" }}
              ref={webcamRef}
            />
          </CameraBox>
          <button onClick={test}>테스트용으로 다음 화면</button>
          <InstructionText>네모 안에 QR을 인식해주세요</InstructionText>
        </Container>
      ) : (
        <CapturedContainer>
          {captureData.screenshot && <CapturedImage src={captureData.screenshot} alt="Captured" />}
          <CapturedText>사진을 불러오는 중...</CapturedText>
          <OtherComponent>
            <ProgressIcon percentage={percentage} />
          </OtherComponent>
        </CapturedContainer>
      )
  );
}

// 스타일 컴포넌트
const Container = styled.div`
    ${tw`bg-[#00000066] flex flex-col items-center min-h-screen w-full`}
    overflow-x: hidden;
`;

const InfoBox = styled.div`
    ${tw`w-[280px] h-[69px] p-2.5 bg-[#d9d9d9] rounded-lg flex flex-col justify-center items-center gap-2.5 mb-6`}
`;

const InfoText = styled.div`
    ${tw`flex items-center gap-2.5 text-sm text-center`}
    font-family: 'Pretendard', sans-serif;
    color: #171d24;
`;

const CameraBox = styled.div`
    ${tw`w-[270px] h-[270px] rounded-3xl border-4 border-[#5453ee] bg-[#FFFFFF] mb-6`}
`;

const InstructionText = styled.div`
    ${tw`text-lg font-medium`}
    font-family: 'Pretendard', sans-serif;
`;

const CapturedContainer = styled.div`
    ${tw`flex flex-col justify-center items-center min-h-screen w-full bg-background`}
`;

const CapturedText = styled.div`
    ${tw`text-2xl font-semibold mb-4 `}
    font-family: 'Pretendard', sans-serif;
    color: #171d24;
`;

const CapturedImage = styled.img`
    ${tw`rounded-lg mb-4`}
    max-width: 300px;
    height: auto;
`;

const OtherComponent = styled.div`
    ${tw`p-4 bg-background rounded-lg text-center`}
    font-family: 'Pretendard', sans-serif;
    color: #171d24;
`;

const CloseButton = styled.button`
  ${tw`w-6 h-6 p-0.5 left-[345px] top-[85px] absolute justify-center items-center gap-2.5 inline-flex`}
`;

export default QRScan;
