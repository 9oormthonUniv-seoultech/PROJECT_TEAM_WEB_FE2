import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../../components/Common/NavBar";
function Booth() {
  return (
    <Layout>
      <main>포토부스 디테일 페이지</main>
      <NavBar />
    </Layout>
  );
}

export default Booth;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;
