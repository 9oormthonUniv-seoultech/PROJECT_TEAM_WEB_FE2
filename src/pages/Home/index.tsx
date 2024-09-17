import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../../components/Common/NavBar";
import MapContainer from "../../components/Common/MapContainer";
import Search from "../../components/Home/Search";
import AddBtn from "../../components/Home/AddBtn";
import BoothSlide from "../../components/Home/BoothSlide";

function Home() {
  return (
    <Layout>
      <main className="w-full relative">
        <MapContainer></MapContainer>
        <Search />
        <BoothSlide />
        <AddBtn />
      </main>
      <NavBar />
    </Layout>
  );
}

export default Home;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto`}
`;
