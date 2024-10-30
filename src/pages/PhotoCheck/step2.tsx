import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";
import React, { useEffect, useState } from "react";
import HashTagModal from "../../components/PhotoCheck/HashModal.tsx";
import RecordModal from "../../components/PhotoCheck/RecordModal.tsx";

type Step2Props = {
  handleNextClick: () => void;
  handleBackStep: () => void;
  hashTags: string[];
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
  records: string;
  setRecords: React.Dispatch<React.SetStateAction<string>>;
  dateInfo: string;
  qrLink: string;
}

function PhotoCheck2({ handleNextClick, handleBackStep, hashTags, setHashTags, records, setRecords, dateInfo, qrLink }: Step2Props) {
  const [isHashModalOpen, setIsHashModalOpen] = useState(false);
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [countHash, setCountHash] = useState(0);

  const openHashModal = () => {
    setIsHashModalOpen(true);
  };

  const closeHashModal = () => {
    setIsHashModalOpen(false);
  };

  const openRecordModal = () => {
    setIsRecordModalOpen(true);
  };

  const closeRecordModal = () => {
    setIsRecordModalOpen(false);
  };

  useEffect(() => {
    const count = hashTags.filter((tag) => tag.length > 0);
    setCountHash(count.length);
  }, [hashTags]);

  return (
    <Container>
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>사진 기록</Title>
          <button className="absolute left-[10px] top-[35%]" onClick={handleBackStep}>
            <BackIcon color="white" />
          </button>
        </div>
        <DateText>{dateInfo}</DateText>
      </Header>
      <div className="relative items-center overflow-x-auto">
        {countHash > 0 ? (
          <div className="flex flex-wrap gap-2">
            {hashTags.map(
              (tag, index) =>
                tag && (
                  <TagItem key={index} onClick={() => setIsHashModalOpen(true)}>
                    <div className="px-5 py-2 bg-[#e1e0ff] rounded-3xl border border-[#676f7b] flex justify-center items-center max-w-[200px] overflow-hidden">
                      <div className="text-main text-base font-normal font-['Pretendard'] text-ellipsis overflow-hidden whitespace-nowrap">
                        {tag}
                      </div>
                    </div>
                  </TagItem>
                )
            )}
            <div className="text-[#c7c9ce] text-xs font-normal font-['Pretendard']">{countHash}/3</div>
          </div>
        ) : (
          <>
            <div className="left-[1.50px] top-0 absolute rounded-lg justify-start items-start gap-2 inline-flex">
              <button
                className="px-5 py-2 bg-[#5453ee] rounded-lg flex-col justify-start items-center gap-5 inline-flex"
                onClick={openHashModal}
              >
                <div className="text-white text-base font-semibold font-['Pretendard']"># 추가하기</div>
              </button>
            </div>
            <div className="relative mt-10">
              <svg width="246" height="34" viewBox="0 0 246 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.9085 1.09121C23.7089 0.03951 25.2911 0.0395091 26.0915 1.0912L34.6135 12.2888C35.6155 13.6054 34.6765 15.5 33.0219 15.5H15.9781C14.3235 15.5 13.3845 13.6054 14.3865 12.2888L22.9085 1.09121Z"
                  fill="white"
                />
                <rect y="8" width="246" height="26" rx="13" fill="white" />
                <text
                  x="50%"
                  y="62%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#676f7b"
                  fontSize="12"
                  fontFamily="Pretendard"
                  fontWeight="normal"
                >
                  해시태그를 추가하면 사진을 쉽게 찾을 수 있어요
                </text>
              </svg>
            </div>
            <div className="left-[118px] top-[23px] absolute text-[#c7c9ce] text-xs font-normal font-['Pretendard']">
              {countHash}/3
            </div>
          </>
        )}
      </div>
      {isHashModalOpen && <HashTagModal hashTags = {hashTags} closeModal={closeHashModal} setHashTags={setHashTags} />}
      <img className="mt-5" src={qrLink} alt="QR 사진" height="200" width="245" />
      <div className="mt-8 p-[10px] relative bg-[#e9eaee] rounded-lg inline-flex">
        <button
          className="w-[291px] text-[#676f7b] text-base font-normal font-['Pretendard']"
          onClick={openRecordModal}
        >
          {records}
        </button>
      </div>
      {isRecordModalOpen && <RecordModal closeModal={closeRecordModal} setRecords={setRecords} />}
      <ButtonContainer onClick={handleNextClick}>
        <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-gray600 flex flex-col w-full min-h-screen items-center`}
  overflow-x: hidden;
`;

const Header = styled.header`
  ${tw`relative w-full flex flex-col items-center justify-center mb-12 h-[80px] border-b-[1.5px] border-b-background`}
`;

const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
  ${tw`opacity-70 text-[#676f7b] text-xs font-medium font-['Pretendard'] mt-1`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-8 flex justify-center items-center`}
`;

const TagItem = styled.div`
  ${tw`mb-2`}
`;

export default PhotoCheck2;
