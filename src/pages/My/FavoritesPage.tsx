import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ImageCard from "../../components/Album/ImageCard";
function FavoritesPage() {
  return (
    <Container>
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </Container>
  );
}

export default FavoritesPage;
const Container = styled.div`
  ${tw`w-full grid gap-[10px] mt-[10px] px-[16px]`}
  grid-template-columns: repeat(2, 1fr);
`;
