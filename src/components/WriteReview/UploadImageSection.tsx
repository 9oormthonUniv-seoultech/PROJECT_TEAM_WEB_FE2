import tw from "twin.macro";
import styled from "styled-components";
import CameraSvg from "../../assets/images/camera.svg?react";
import { MdDeleteOutline } from "react-icons/md";
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
    }
  };
  const handleImageDelete = (index: number) => {
    // File 객체 삭제
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);
  };

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

      {imageFiles.map((file, index) => (
        <ImageWrapper key={index}>
          <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} />
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
