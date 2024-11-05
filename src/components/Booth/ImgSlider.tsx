import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "twin.macro";
import styled from "styled-components";
import { getLogoUrl } from "../../hooks/getImageUrl";
import { getRecentImages } from "../../api/review";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../store/useAuthStore";

function ImgSlider({ type }: { type: string }) {
  const { boothId } = useParams() as { boothId: string };
  const { isLoading, data: images } = useQuery({
    queryKey: ["getRecentImages", boothId],
    queryFn: () => getRecentImages(boothId),
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-24px",
          filter: "drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2))",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  if (!isLoading && images && images.filePaths.length > 0) {
    return (
      <Container>
        <Slider {...settings}>
          {images.filePaths.map((image, index) => (
            <ImgBox src={image} key={index} />
          ))}
        </Slider>
      </Container>
    );
  } else {
    return (
      <Container>
        <ImgBox src={getLogoUrl(type)}></ImgBox>
      </Container>
    );
  }
}

export default ImgSlider;

const Container = styled.div`
  ${tw`w-full p-[16px]`}
`;

const ImgBox = styled.img`
  ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px]`}
`;
