import tw from "twin.macro";
import styled from "styled-components";
import CameraSvg from "../../assets/images/camera.svg?react";
import { MdDeleteOutline } from "react-icons/md";
import {useEffect, useMemo} from "react";
type UploadImageProps = {
  imageFiles: File[];
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
};
function UploadImageSection({ imageFiles, setImageFiles }: UploadImageProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImageFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...filesArray];
        return newFiles;
      });
      // 파일 선택 후 input의 값을 초기화하여 동일 파일 업로드 가능하게 만듦
      event.target.value = "";
    }
  };
  const handleImageDelete = (index: number) => {
    // File 객체 삭제
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);
  };
  
  // imageFiles가 변경될 때만 URL 생성
  const imageUrls = useMemo(() => {
    return imageFiles.map((file) => URL.createObjectURL(file));
  }, [imageFiles]);
  
  // Blob URL 해제
  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);
  
  return (
    <Container>
      <label htmlFor="image-upload">
        <UploadButtonWrapper>
          <CameraSvg />
          <span>{`${imageFiles.length} / 5`}</span>
        </UploadButtonWrapper>
      </label>
      <input
        type="file"
        id="image-upload"
        style={{ display: "none" }}
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        disabled={Boolean(status && status !== "PENDING")}
      />

      {imageUrls.map((url, index) => (
        <ImageWrapper key={index}>
          <img src={url} alt={`Uploaded ${index}`} />
          <DeleteIconWrapper onClick={() => handleImageDelete(index)}>
            <MdDeleteOutline size={20} color="#A1A6B5" />
          </DeleteIconWrapper>
        </ImageWrapper>
      ))}
    </Container>
  );
}

export default UploadImageSection;

const Container = styled.div`
  ${tw`flex  my-[10px] gap-[12px] overflow-x-auto`}
`;

const UploadButtonWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-[92px] h-[92px] bg-gray100 rounded-[8px]`}
  span {
    ${tw`font-display font-medium text-[12px] text-gray400 mt-[4px]`}
  }
`;

const ImageWrapper = styled.div`
  ${tw`relative w-[92px] h-[92px] rounded-[8px] flex-shrink-0`}
`;

const DeleteIconWrapper = styled.div`
  ${tw`absolute top-1/2 left-[36px] cursor-pointer z-10`}
`;
