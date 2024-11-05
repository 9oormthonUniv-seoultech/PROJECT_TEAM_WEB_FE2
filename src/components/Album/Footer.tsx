import tw from "twin.macro";
import styled from "styled-components";
import AlbumLikeIcon from "../../assets/icons/album-like-icon.tsx";
import AlbumDeleteIcon from "../../assets/icons/album-delete-icon.tsx";

type FooterProps = {
  footerStatus: string;
  setFooterStatus: React.Dispatch<React.SetStateAction<string>>;
  setIsConfirmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({ footerStatus, setFooterStatus, setIsConfirmModalOpen}:FooterProps) {
  
  const isActive = (status: boolean) => {
    if (status) {
      return "#5453EE";
    } else {
      return "#C7C9CE";
    }
  };
  
  const isLiking = footerStatus === 'liking';
  const isDeleting = footerStatus === 'deleting';
  
  return (
    <Container>
      <MenuBtn
        onClick={() => {
          setFooterStatus('liking')
          setIsConfirmModalOpen(true)
        }}
        disabled={isLiking}>
        <AlbumLikeIcon color={isActive(isLiking)} />
        <Text $active={isLiking}>좋아요</Text>
      </MenuBtn>
      <MenuBtn
        onClick={() => {
          setFooterStatus('deleting')
          setIsConfirmModalOpen(true)
        }}
        disabled={isDeleting}>
        <AlbumDeleteIcon color={isActive(isDeleting)} />
        <Text $active={isDeleting}>삭제</Text>
      </MenuBtn>
    </Container>
  );
}

const Container = styled.nav`
  ${tw`fixed bottom-0 flex flex-row [max-width: 480px] w-full h-[60px] px-[80px] items-center justify-between bg-background z-30`}
`;

const MenuBtn = styled.button`
  ${tw`flex flex-col items-center w-[25px]`}
`;

const Text = styled.span<{ $active: boolean }>`
  ${tw`font-display font-medium text-[9px] mt-0.5`}
  ${(props) => (props.$active ? tw`text-main` : tw`text-gray200`)}
`;
