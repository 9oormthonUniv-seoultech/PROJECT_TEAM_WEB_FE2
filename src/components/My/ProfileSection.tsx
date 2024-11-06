import tw from "twin.macro";
import styled from "styled-components";
import EditIcon from "../../assets/icons/edit-icon";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api/user";
import { useAuthStore } from "../../store/useAuthStore";
function ProfileSection() {
  const { accessToken } = useAuthStore();
  //사용자 프로필 정보 조회 api 호출
  const { isLoading, data } = useQuery({
    queryKey: ["getUserData"],
    queryFn: () => getUserInfo(accessToken!),
  });

  if (!isLoading && data) {
    return (
      <Container>
        <img className="img-wrapper" src={data.image} />
        <span className="nickname">{data.name}</span>
        <button className="edit-btn">
          프로필편집
          <EditIcon />
        </button>
      </Container>
    );
  } else {
    return <Container></Container>;
  }
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
