import styled from "styled-components";
import tw from "twin.macro";
import Search from "../../assets/images/search.svg?react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Common/Header";
import NextButton from "../../components/Common/NextButton";
import { searchBoothId } from "../../api/booth";

function ReviewPhoto() {
  // useState를 사용하여 날짜와 부스 위치 상태 관리
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [boothLocation, setBoothLocation] = useState("");
  const [boothId, setBoothId] = useState(0);
  const [searchData, setSearchData] = useState<
    | {
        id: number;
        name: string;
      }[]
    | null
  >(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { imageFile } = location.state;

  console.log(imageFile);

  const handleNext = () => {
    navigate("/write-detail", {
      state: {
        year: year,
        month: month,
        day: day,
        qrLink: location.state.qrLink,
        imageFile: imageFile,
        boothId: boothId,
      },
    });
  };

  const handleSearch = async () => {
    const res = await searchBoothId(boothLocation);
    if (res) {
      setSearchData(res);
      console.log(searchData);
    }
  };
  const handleItemClick = (id: number, name: string) => {
    setBoothId(id);
    setBoothLocation(name);
    setSearchData(null);
  };
  return (
    <Container>
      <Header mainText="사진 설명" handleBackClick={() => navigate(-1)}></Header>

      <ContentContainer>
        <LabelContainer>
          <Label>언제 사진을 찍으셨나요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <div className="w-[351.61px] h-[35.05px] relative">
          <div>
            <div className="w-24 h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md">
              <input
                className="w-full h-full bg-[#e9eaee] text-gray400 text-center border-none rounded-md outline-none"
                placeholder="0000"
                value={year ? year : ""}
                onChange={(e) => setYear(e.target.value)}
                maxLength={4}
              />
            </div>
            <div className="left-[103.64px] top-[8px] absolute text-center text-[#676f7b] text-base font-medium font-['Pretendard']">
              년
            </div>
          </div>
          <div className="w-[92.61px] h-[35.05px] left-[145px] top-0 absolute">
            <div className="w-[70.93px] h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md">
              <input
                className="w-full h-full bg-[#e9eaee] text-gray400 text-center border-none rounded-md outline-none"
                placeholder="00"
                value={month ? month : ""}
                onChange={(e) => setMonth(e.target.value)}
                maxLength={2}
              />
            </div>
            <div className="left-[78.61px] top-[8px] absolute text-center text-[#676f7b] text-base font-semibold font-['Pretendard']">
              월
            </div>
          </div>
          <div className="w-[92.61px] h-[35.05px] left-[259px] top-0 absolute">
            <div className="w-[70.93px] h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md">
              <input
                className="w-full h-full bg-[#e9eaee] text-gray400 text-center border-none rounded-md outline-none"
                placeholder="00"
                value={day ? day : ""}
                onChange={(e) => setDay(e.target.value)}
                maxLength={2}
              />
            </div>
            <div className="left-[78.61px] top-[8px] absolute text-center text-[#676f7b] text-base font-semibold font-['Pretendard']">
              일
            </div>
          </div>
        </div>
        <LabelContainer>
          <Label>사용하신 부스의 위치는 어딘가요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <div className="relative w-full h-full">
          <InputContainer>
            <SearchIcon onClick={handleSearch}>
              <Search />
            </SearchIcon>
            <input
              className="w-full bg-gray100 pl-2 text-gray400"
              placeholder="예 : 포토이즘 공릉점"
              value={boothLocation}
              onChange={(e) => setBoothLocation(e.target.value)}
            />
          </InputContainer>

          {searchData && searchData.length > 0 && (
            <ModalBox>
              {searchData.map((data, index) => (
                <div key={data.id} className="p-2">
                  <li
                    onClick={() => handleItemClick(data.id, data.name)}
                    className="text-[14px] font-normal text-gray600 list-none"
                  >
                    {data.name}
                  </li>
                  {index !== searchData.length - 1 && <hr className="w-full h-[1px] bg-gray200" />}
                </div>
              ))}
            </ModalBox>
          )}
        </div>
      </ContentContainer>

      <NextButton text="다음" onClick={handleNext} disabled={!year || !month || !day || boothId === 0} />
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-background flex flex-col w-full min-h-screen items-center  [max-width: 480px] `}
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const ContentContainer = styled.div`
  ${tw`flex flex-col items-start w-full px-[16px] mt-[90px] gap-6`}
`;

const LabelContainer = styled.div`
  ${tw`flex items-center gap-2.5`}
`;

const Label = styled.div`
  ${tw`text-[#171d24] text-lg font-semibold font-['Pretendard']`}
`;

const RequiredBadge = styled.div`
  ${tw`px-2.5 py-1.5 bg-[#a1a6b5] rounded-3xl flex justify-center items-center`}
`;

const RequiredText = styled.div`
  ${tw`text-xs font-semibold font-['Pretendard']`}
`;

const InputContainer = styled.div`
  ${tw`w-full p-2.5 bg-[#e9eaee] rounded-lg flex justify-end items-center `}
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  ${tw`w-6 p-px flex justify-center items-center`}
`;

const ModalBox = styled.div`
  ${tw`w-full rounded-[5px] bg-[#FFFFFF] border-[1px] border-gray100 font-display font-medium text-[14px] absolute top-[50px]`}
`;

export default ReviewPhoto;
