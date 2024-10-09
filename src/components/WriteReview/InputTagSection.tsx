import tw from "twin.macro";
import styled from "styled-components";
import { Category } from "../../data/booth-categories";

type InputTagProps = {
  title: string;
  categories: Category[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
};
function InputTagSection({ title, categories, selectedTags, setSelectedTags }: InputTagProps) {
  //클릭된 태그를 전달받아, 이미 선택된 태그라면 제거, 아니라면 추가하는 로직
  const handleClick = (target: string) => {
    if (selectedTags!.includes(target)) {
      //이미 선택된 태그면 배열에서 제거
      setSelectedTags(selectedTags!.filter((label) => label !== target));
    } else {
      //선택되지 않은 태그면 배열에 추가
      setSelectedTags([...selectedTags!, target]);
    }
  };
  return (
    <Container>
      <label>{title}</label>
      {categories.map((tag, index) => (
        <TagBtn key={index} $active={selectedTags.includes(tag.label)} onClick={() => handleClick(tag.label)}>
          {tag.label}
        </TagBtn>
      ))}
    </Container>
  );
}

export default InputTagSection;

const Container = styled.div`
  ${tw`flex flex-col w-full gap-[12px]`}

  label {
    ${tw`font-semibold text-[16px] text-gray700`}
  }
`;

const TagBtn = styled.button<{ $active: boolean }>`
  ${tw`px-[15px] py-[6px] font-display font-normal text-[16px] rounded-[24px] border-[1px]`}

  ${({ $active }) => ($active ? tw`bg-purple border-main text-main` : tw`text-gray400 border-gray400`)}
`;
