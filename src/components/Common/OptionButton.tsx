import styled from "styled-components";
import tw from "twin.macro";

type OptionProps = {
  onClick: () => void;
  isActive: boolean;
  label: string;
  subLabel?: string;
  size?: "small" | "medium" | "large"; // 사이즈 조정 props 추가
};

export default function OptionButton({ onClick, isActive, label, subLabel, size = "medium" }: OptionProps) {
  return (
    <Option onClick={onClick} isActive={isActive} size={size} label={label} subLabel={subLabel}>
      <div className="flex items-center gap-3">
        <CircleContainer size={size}>
          <CircleBorder isActive={isActive} size={size} />
          {isActive && <CircleInner size={size} />}
        </CircleContainer>
        <Label isActive={isActive}>{label}</Label>
      </div>
      {isActive && subLabel && <SubLabel>{subLabel}</SubLabel>}
    </Option>
  );
}

const Option = styled.button<OptionProps>`
  ${tw`rounded-lg border mb-4 cursor-pointer transition-colors duration-200 `}
  ${({ size }) => {
    switch (size) {
      case "small":
        return tw`w-[200px] h-[60px]`;
      case "large":
        return tw`w-[300px] h-[110px]`;
      default:
        return tw`w-full py-[20px] px-4`; // 기본 사이즈
    }
  }}
  background-color: ${({ isActive }) => (isActive ? "#e1e0ff" : "transparent")};
  border-color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
  display: flex;
  flex-direction: ${({ isActive }) => (isActive ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${({ isActive }) => (isActive ? "10px" : "12px")};
`;

const CircleContainer = styled.div<{ size: string }>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return tw`w-[16px] h-[16px]`;
      case "large":
        return tw`w-[30px] h-[30px]`;
      default:
        return tw`w-[22px] h-[22px]`;
    }
  }}
  ${tw`relative`}
`;

const CircleBorder = styled.div<{ isActive: boolean; size: string }>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return tw`w-[16px] h-[16px] border-[1px]`;
      case "large":
        return tw`w-[30px] h-[30px] border-[2px]`;
      default:
        return tw`w-[22px] h-[22px] border-2`;
    }
  }}
  ${tw`rounded-full absolute`}
  border-color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
`;

const CircleInner = styled.div<{ size: string }>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return tw`w-2 h-2 left-[4px] top-[4px]`;
      case "large":
        return tw`w-3 h-3 left-[8px] top-[8px]`;
      default:
        return tw`w-2.5 h-2.5 left-[6px] top-[6px]`;
    }
  }}
  ${tw`bg-[#5453ee] rounded-full absolute`}
`;

const Label = styled.div<{ isActive: boolean }>`
  ${tw`text-base font-semibold font-['Pretendard']`}
  color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
`;

const SubLabel = styled.div`
  ${tw`text-[#5453ee] text-xs font-medium font-['Pretendard']`}
`;
