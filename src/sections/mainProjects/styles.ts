import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;
  margin-top: 100px;
  @media (max-width: 800px) {
    gap: 100px;
    margin-top: 20px;
  }
`;
export const ProjectItem = styled.div<{ direction: string }>`
  display: flex;
  width: 100%;
  position: relative;
  align-items: end;
  gap: 20px;
  overflow: hidden;
  flex-direction: ${(props) =>
    props.direction === "right" ? "row" : "row-reverse"};
  .itemImage {
    object-fit: cover;
    width: 55%;
    transition: 0.5s ease;
  }

  .project-infos {
    display: flex;
    flex-direction: column;
    bottom: 20px;
    transition: 0.5s ease;
    width: 45%;

    margin-bottom: 40px;
    text-align: ${(props) => (props.direction === "right" ? "end" : "start")};
    img {
      width: 100px;
    }
    .itemTitle {
      margin-bottom: 10px;
      color: white;
      text-align: end;
      font-weight: 400;
      letter-spacing: 5px;
      text-align: inherit;
    }
    .ItemInfos {
      display: flex;
      align-items: center;
      text-align: inherit;
    }
    .item-technologies {
      display: flex;
      gap: 20px;
      justify-content: ${(props) =>
        props.direction === "right" ? "end" : "start"};
      align-items: center;
      margin-top: 20px;
      img {
        width: 35px;
      }
    }
  }
  @media (max-width: 800px) {
    height: 400px;
    .itemImage {
      width: 100%;
      height: 100%;
    }
    .project-infos {
      padding: 0 20px;
      text-align: start;
      position: absolute;
      margin-bottom: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #000000e6;
      justify-content: center;
    }
    .item-technologies {
      justify-content: start !important;
    }
  }
`;
