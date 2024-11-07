import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close-icon";
import NextButton from "../../components/Common/NextButton";
import OptionButton from "../../components/Common/OptionButton.tsx";

function PhotoUpload() {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    if (option === "Upload") {
      document.getElementById("file-input")?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("선택된 파일:", file);
      navigate("/photo-check", { state: { imageFile: file } });
    }
  };

  const handleNext = () => {
    if (activeOption === "QR") {
      navigate("/qr-scan");
    } else if (activeOption === "Upload" && selectedFile) {
      console.log("사진을 업로드합니다:", selectedFile);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Container>
      <header className="relative w-full flex flex-col items-center mb-12">
        <div className="flex items-center h-[60px]">
          <span className="font-semibold text-gray700 text-[22px]">사진 등록</span>
          <CloseButton onClick={handleClose}>
            <CloseIcon color={"grey"} />
          </CloseButton>
        </div>
        <hr className="h-[1.5px] w-full bg-gray200 " />
      </header>

      <OptionContainer>
        <OptionButton
          onClick={() => handleOptionClick("QR")}
          isActive={activeOption === "QR"}
          label="QR 인식"
          subLabel="QR 인식은 하루필름 매장만 가능해요"
        />
        <OptionButton
          onClick={() => handleOptionClick("Upload")}
          isActive={activeOption === "Upload"}
          label="내 사진첩 불러오기"
        />
      </OptionContainer>

      {/* 파일 입력 요소 */}
      <input type="file" id="file-input" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />

      <NextButton onClick={handleNext} disabled={!activeOption} text="다음" />
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-background flex flex-col items-center min-h-screen w-full [max-width: 480px] m-auto pb-[60px]`}
  overflow-x: hidden;
`;

const OptionContainer = styled.div`
  ${tw`flex flex-col items-center m-auto`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-12 mb-[88px] flex justify-center items-center`}
`;

const CloseButton = styled.button`
  ${tw`absolute right-[10px]`}
`;

export default PhotoUpload;
