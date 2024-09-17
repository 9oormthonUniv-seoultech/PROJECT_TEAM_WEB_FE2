import tw from "twin.macro";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/search-icon";

function Search() {
  return (
    <Wrapper>
      <Container>
        <input type="text" placeholder="구, 역, 건물명 등으로 검색해주세요" />
        <SearchIcon />
      </Container>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  ${tw`absolute z-10 top-2.5 w-full  bg-[#FFFFFF] flex `}
`;

const Container = styled.div`
  ${tw` w-full  bg-[#FFFFFF] flex flex-row [box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2)] p-[12px] rounded-[8px] justify-between mx-4`}
  input {
    ${tw`w-11/12 font-display font-light text-[14px] text-gray400`}

    &:focus {
      outline: none;
    }
  }
`;
