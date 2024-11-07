import tw from "twin.macro";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/search-icon";
import axios from "axios";
import { useState } from "react";
import useBoothFilterStore from "../../store/useBoothFilterStore";

function Search() {
  const [address, setAddress] = useState<string>("");
  const { setLat, setLng } = useBoothFilterStore();
  //주소를 이용한 좌표 검색
  const searchAddressLatLng = async () => {
    try {
      const res = await axios.get(`https://dapi.kakao.com/v2/local/search/address?query=${address}`, {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
        },
      });
      if (res.data.documents.length > 0) {
        const data = res.data.documents[0];
        console.log(data);
        setLat(data.y);
        setLng(data.x);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Container>
        <input
          type="text"
          placeholder="구, 역, 건물명 등으로 검색해주세요"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAddressLatLng();
            }
          }}
        />
        <button onClick={searchAddressLatLng}>
          <SearchIcon />
        </button>
      </Container>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  ${tw`absolute z-10 top-2.5 w-full flex `}
`;

const Container = styled.div`
  ${tw` w-full  bg-[#FFFFFF] flex flex-row [box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2)] p-[12px] rounded-[8px] justify-between mx-4`}
  input {
    ${tw`w-11/12 font-display bg-[#FFFFFF] font-light text-[14px] text-gray400`}

    &:focus {
      outline: none;
    }
  }
`;
