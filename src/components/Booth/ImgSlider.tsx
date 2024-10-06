import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "twin.macro";
import styled from "styled-components";
import DummyImg from "../../assets/images/img_3159.jpg";
import { getLogoUrl } from "../../hooks/getLogoUrl";
function ImgSlider() {
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

  const id = "HARUFILM";

  const images = [DummyImg, DummyImg];
  if (images.length > 0) {
    return (
      <Container>
        <Slider {...settings}>
          {images.map((image, index) => (
            <ImgBox src={image} />
          ))}
        </Slider>
      </Container>
    );
  } else {
    return (
      <Container>
        <ImgBox src={getLogoUrl(id)}></ImgBox>
      </Container>
    );
  }
}

export default ImgSlider;

const Container = styled.div`
  ${tw`w-full p-[16px]`}
`;

const ImgBox = styled.img`
  ${tw`h-[320px] rounded-[8px]`}
`;
