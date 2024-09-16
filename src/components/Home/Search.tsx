import tw from "twin.macro";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/search-icon";

function Search() {
  return (
    <Container>
      <input type="text" placeholder="구, 역, 건물명 등으로 검색해주세요" />
      <SearchIcon />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  ${tw`absolute z-10 top-2.5 w-11/12  bg-[#FFFFFF] flex flex-row [box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2)] p-[12px] rounded-[8px] justify-between`}
  left: 50%; /* 부모의 가로 중심 */
  transform: translateX(-50%); /* 자신의 너비의 절반을 왼쪽으로 이동 */
  input {
    ${tw`w-11/12 font-display font-light text-[14px] text-gray400`}

    &:focus {
      outline: none;
    }
  }
`;
