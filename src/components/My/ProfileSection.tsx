import tw from "twin.macro";
import styled from "styled-components";
import EditIcon from "../../assets/icons/edit-icon";
function ProfileSection() {
  return (
    <Container>
      <div className="img-wrapper" />
      <span className="nickname">홍길동</span>
      <button className="edit-btn">
        프로필편집
        <EditIcon />
      </button>
    </Container>
  );
}

export default ProfileSection;

const Container = styled.div`
  ${tw`flex flex-col my-[35px] mx-auto items-center font-display gap-0.5`}
  .img-wrapper {
    ${tw`w-[77px] h-[77px] rounded-full bg-purple`}
  }
  .nickname {
    ${tw`font-semibold text-[20px] text-gray700`}
  }
  .edit-btn {
    ${tw`flex items-center justify-center gap-0.5 rounded-[24px] h-[26px] w-[100px] font-normal text-[12px] text-[#FFFFFF] bg-gray200`}
  }
`;
