import tw from "twin.macro";
import styled from "styled-components";
import {useState} from "react";
import AlbumLikeIcon from "../../assets/icons/album-like-icon.tsx";
import AlbumDeleteIcon from "../../assets/icons/album-delete-icon.tsx";

export default function Footer() {
  const [status, setStatus] = useState('initial');
  
  const isActive = (status: boolean) => {
    if (status) {
      return "#5453EE";
    } else {
      return "#C7C9CE";
    }
  };
  
  const isLiking = status === 'liking';
  const isDeleting = status === 'deleting';
  
  return (
    <Container>
      <MenuBtn onClick={() => setStatus('liking')} disabled={isLiking}>
        <AlbumLikeIcon color={isActive(isLiking)} />
        <Text $active={isLiking}>좋아요</Text>
      </MenuBtn>
      <MenuBtn onClick={() => setStatus('deleting')} disabled={isDeleting}>
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
