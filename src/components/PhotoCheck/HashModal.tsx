interface ModalProps {
  closeModal: () => void;
}

const Modal = ({closeModal} : ModalProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-background bg-opacity-50 z-50">
      <div className="w-[390px] h-[363px] relative bg-white rounded-tl-[26px] rounded-tr-[26px]">
        {/* 모달 제목 */}
        <div
          className="absolute left-[50%] translate-x-[-50%] top-[41px] text-center text-[#171c24] text-[22px] font-semibold font-['Pretendard']">
          해시태그 추가
        </div>

        {/* 서브 텍스트 */}
        <div
          className="absolute left-[50%] translate-x-[-50%] top-[73px] text-center text-[#676f7b] text-xs font-medium font-['Pretendard']">
          최대 3개까지 #를 추가해볼 수 있어요!
        </div>

        {/* 닫기 버튼 (아이콘은 여기서 추가 가능) */}
        <div className="absolute left-[348px] top-[64px] w-[26px] h-[26px] bg-[#e9eaee] rounded-full"/>

        {/* 해시태그 추가 버튼 목록 */}
        <div className="absolute left-[50%] translate-x-[-50%] top-[121px] space-y-4">
          <div className="w-[139px] h-[42px] relative">
            <span className="absolute left-0 top-[8px] text-center text-[#676f7b] text-[22px] font-semibold">#</span>
            <div
              className="absolute left-[24px] top-0 w-[115px] h-[42px] bg-[#e9eaee] rounded-lg text-center text-[#c7c9ce] text-lg font-medium flex items-center justify-center">
              기념일
            </div>
          </div>
          <div className="w-[139px] h-[42px] relative">
            <span className="absolute left-0 top-[8px] text-center text-[#676f7b] text-[22px] font-semibold">#</span>
            <div
              className="absolute left-[24px] top-0 w-[115px] h-[42px] bg-[#e9eaee] rounded-lg text-center text-[#c7c9ce] text-lg font-medium flex items-center justify-center">
              장소
            </div>
          </div>
          <div className="w-[139px] h-[42px] relative">
            <span className="absolute left-0 top-[8px] text-center text-[#676f7b] text-[22px] font-semibold">#</span>
            <div
              className="absolute left-[24px] top-0 w-[115px] h-[42px] bg-[#e9eaee] rounded-lg text-center text-[#c7c9ce] text-lg font-medium flex items-center justify-center">
              이름
            </div>
          </div>
        </div>

        {/* 해시태그 개수 (0/3) */}
        <div
          className="absolute left-[50%] translate-x-[-50%] top-[127px] text-center text-[#b0b1b3] text-xs font-medium">
          (0/3)
        </div>
      </div>

    </div>
  );
};

export default Modal;
