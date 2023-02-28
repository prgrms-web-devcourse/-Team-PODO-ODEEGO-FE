import { COLORS } from "@/constants/css";
import styled from "@emotion/styled";
import Image from "next/image";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";

interface PlaceProps {
  businessName: string;
  address: string;
}

const SHARE_TEXT = "공유";
const BOOKMARK_TEXT = "저장";

const Place = ({ businessName, address }: PlaceProps) => {
  const tmpImageList = [1, 2, 3, 4];
  return (
    <Container>
      <TitleIconContainer>
        <TitleContainer>
          <h3>{businessName}</h3>
          <p>{address}</p>
        </TitleContainer>
        <IconsContainer>
          <div>
            <IosShareIcon
              sx={{
                display: "block",
                height: "2.1rem",
                width: "2.1rem",
              }}
            />
            <p>{SHARE_TEXT}</p>
          </div>
          <div>
            <BookmarkBorderIcon
              sx={{
                display: "block",
                height: "2.3rem",
                width: "2.3rem",
              }}
            />
            <p>{BOOKMARK_TEXT}</p>
          </div>
        </IconsContainer>
      </TitleIconContainer>
      <ImageContainer>
        {tmpImageList.map((i, index) => (
          <div key={index}>
            <Image
              src={`/cafe${(i % 3) + 1}.png`}
              alt='cafe image'
              width={125}
              height={125}
              priority
            />
          </div>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Place;

const Container = styled.li`
  list-style: none;
  padding: 2.1rem 1.5rem 2.5rem 1.5rem;
  background-color: ${COLORS.backgroundSecondary};
  border-bottom: 1px solid rgba(90, 178, 125, 0.3);
`;

const TitleIconContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 1.6rem;
    font-family: bold;
    margin: 0;
  }

  & p {
    font-size: 1.3rem;
    opacity: 0.7;
    margin: 0.6rem 0 0 0;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  font-size: 0.8rem;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & div:not(:last-of-type) {
    margin-right: 1.5rem;
  }

  & p {
    display: inline-block;
    margin-top: 0.3rem;
    opacity: 0.7;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 0.5rem;

  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.mainOrange};
    border-radius: 1rem;
  }

  > div {
    flex: 0 0 auto;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 1rem;
    margin-right: 0.6rem;
  }
`;
