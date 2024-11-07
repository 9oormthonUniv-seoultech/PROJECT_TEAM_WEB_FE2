import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";
import { useEffect, useState } from "react";
import HashTagModal from "../../components/PhotoCheck/HashModal.tsx";
import RecordModal from "../../components/PhotoCheck/RecordModal.tsx";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { getPresignedUrl, uploadToS3 } from "../../api/file.ts";
import { uploadPhoto } from "../../api/photoupload.ts";
import { useLocation, useNavigate } from "react-router-dom";
import NextButton from "../../components/Common/NextButton.tsx";

function WriteDetail() {
  const [isHashModalOpen, setIsHashModalOpen] = useState(false);
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [countHash, setCountHash] = useState(0);
  // const [imageFiles, setImageFiles] = useState<File[]>([imgSrc]);
  const { accessToken } = useAuthStore();
  const location = useLocation();

  const [hashTags, setHashTags] = useState<string[]>([]);
  const [records, setRecords] = useState("");

  const navigate = useNavigate();
  const { year, month, day, qrLink, imageFile, boothId } = location.state;

  console.log(location.state);

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

  const getUploadedFilePaths = async () => {
    const presignedData = await getPresignedUrl("/images/album", imageFile.name, accessToken!);
    if (presignedData) {
      //s3에 이미지 업로드
      await uploadToS3(presignedData.url, imageFile);
      return presignedData.filePath;
    }
  };

  const uploadImage = async (
    accessToken: string,
    boothId: number,
    year: string,
    month: string,
    day: string,
    hashtags: string[],
    records: string,
    filePath: string
  ) => {
    const res = await uploadPhoto(accessToken, boothId, year, month, day, hashtags, records, filePath);

    if (res) {
      //리뷰 작성을 위해 로컬 스토리지에 부스 아이디 저장
      localStorage.setItem("boothId", res.photoboothId.toString());
      navigate("/upload-complete", {
        state: {
          albumId: res.albumId,
        },
      });
    }
  };

  // 메인 로직
  const handleUpload = async () => {
    console.log(imageFile);
    // Step 2: 이미지 업로드 및 filePaths 저장
    const filePath = await getUploadedFilePaths();
    console.log(filePath);
    // Step 3: 리뷰등록 api 호출
    if (filePath) {
      await uploadImage(accessToken!, boothId, year, month, day, hashTags, records, filePath);
    }
  };

  return (
    <Container>
      {/* 헤더 */}
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>사진 기록</Title>
          <button className="absolute left-[10px] top-[35%]" onClick={() => navigate(-1)}>
            <BackIcon color="white" />
          </button>
        </div>
        <DateText>{`${year}년 ${month}월 ${day}일`}</DateText>
      </Header>
      <MainWrapper>
        {/* <div className="relative items-center overflow-x-auto"> */}
        <div className="relative w-full justify-start  gap-2 inline-flex items-end">
          {countHash > 0 ? (
            hashTags.map(
              (tag, index) =>
                tag && (
                  <TagItem key={index} onClick={() => setIsHashModalOpen(true)}>
                    <div className="text-main text-base font-normal font-['Pretendard'] text-ellipsis overflow-hidden whitespace-nowrap">
                      {tag}
                    </div>
                  </TagItem>
                )
            )
          ) : (
            <button
              className="px-5 py-2 bg-[#5453ee] rounded-lg flex-col justify-start items-center gap-5 inline-flex"
              onClick={openHashModal}
            >
              <div className="text-white text-base font-semibold font-display"># 추가하기</div>
            </button>
          )}
          <div className=" text-[#c7c9ce] text-xs font-normal font-display ">{countHash}/3</div>
          {countHash === 0 && (
            <div className="absolute top-[45px]">
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
          )}
        </div>

        {isHashModalOpen && <HashTagModal hashTags={hashTags} closeModal={closeHashModal} setHashTags={setHashTags} />}
        <img className="w-[80%]" src={URL.createObjectURL(imageFile)} alt="QR 사진" />

        <button
          className="w-[90%] p-[10px] rounded-lg bg-[#e9eaee] text-[#676f7b] text-base font-normal font-['Pretendard']"
          onClick={openRecordModal}
        >
          {records === "" ? "클릭하여 오늘 있었던 일들을 기록해보세요" : records}
        </button>

        {isRecordModalOpen && <RecordModal closeModal={closeRecordModal} setRecords={setRecords} records={records} />}
        <NextButton text="다음" onClick={handleUpload} />
      </MainWrapper>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-gray600 flex flex-col w-full min-h-screen items-center [max-width: 480px]`}
  overflow-x: hidden;
`;

const Header = styled.header`
  ${tw`w-full flex flex-col items-center justify-center h-[80px] border-b-[1.5px] border-b-background py-[13px] bg-gray600 mb-3`}
`;

const MainWrapper = styled.div`
  ${tw`relative w-full h-full flex flex-col px-[30px] items-center  pb-[60px] gap-8 my-auto `}
`;
const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
  ${tw`opacity-70 text-gray100 text-xs font-medium font-display mt-1`}
`;

const TagItem = styled.div`
  ${tw`px-5 py-1.5 bg-[#e1e0ff] rounded-3xl border border-[#676f7b] flex justify-center items-center overflow-hidden `}
`;

export default WriteDetail;
