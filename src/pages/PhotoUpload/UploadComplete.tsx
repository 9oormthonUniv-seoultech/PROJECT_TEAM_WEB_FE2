import { useLocation, useNavigate } from "react-router-dom";
import ShareLogo from "../../assets/images/share-logo.svg?react";
import styled from "styled-components";
import tw from "twin.macro";
import { createLink } from "../../api/share.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import CloseIcon from "../../assets/icons/close-icon.tsx";
import { useAlertStore } from "../../store/useAlertStore.ts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
function UploadComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken } = useAuthStore();

  const { albumId } = location.state;
  const [shareLink, setShareLink] = useState("");

  // 컴포넌트가 마운트될 때 링크 자동 생성
  useEffect(() => {
    const generateShareLink = async () => {
      const res = await createLink(albumId, accessToken!);
      if (res) {
        setShareLink(res); // 링크를 상태로 저장
      }
    };
    generateShareLink();
  }, [albumId, accessToken]);

  const handleClose = () => {
    navigate("/album");
  };

  return (
    <Container>
      <Header>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <Title>사진 공유</Title>
      </Header>
      <div className="w-full flex flex-col items-center m-auto gap-4">
        <ShareLogo className="ml-5" />
        <span className="text-gray200 text-[14px] font-medium font-display mt-1 w-[220px] text-center">
          공유링크를 통해 같이 찍은 친구, 가족의 앨범에도 자동으로 등록할 수 있어요
        </span>
        <CopyToClipboard text={shareLink} onCopy={() => navigate("/share-complete")}>
          <ButtonContainer>
            <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">공유할래요</div>
          </ButtonContainer>
        </CopyToClipboard>
        <ButtonContainer2 className="mt-0" onClick={() => navigate("/album")}>
          <div className="text-center text-[#676f7b] text-[22px] font-semibold font-['Pretendard']">다음에 할게요</div>
        </ButtonContainer2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-gray600 flex flex-col w-full min-h-screen items-center`}
  overflow-x: hidden;
`;

const Header = styled.header`
  ${tw`relative w-full flex flex-col items-center justify-center  py-[15px] border-b-[1.5px] border-b-gray100`}
`;

const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg flex justify-center items-center`}
`;

const ButtonContainer2 = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#F9F9FB] rounded-lg flex justify-center items-center`}
`;
const CloseButton = styled.button`
  ${tw` absolute  left-[15px]`}
`;
export default UploadComplete;
