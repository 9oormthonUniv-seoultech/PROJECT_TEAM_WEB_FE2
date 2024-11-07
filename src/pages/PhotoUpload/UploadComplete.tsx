import { useNavigate } from "react-router-dom";
import ShareLogo from "../../assets/images/share-logo.svg?react";
import styled from "styled-components";
import tw from "twin.macro";
import { createLink } from "../../api/share.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import CloseIcon from "../../assets/icons/close-icon.tsx";
import { useAlertStore } from "../../store/useAlertStore.ts";

function UploadComplete() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  const { openAlert } = useAlertStore();
  const createShareLink = async () => {
    const res = await createLink("13", accessToken!);
    if (res) {
      await navigator.clipboard.writeText(res);
      openAlert("공유링크가 클립보드에 복사되었어요!");
    }
  };

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
        <ButtonContainer onClick={createShareLink}>
          <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">공유할래요</div>
        </ButtonContainer>
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
