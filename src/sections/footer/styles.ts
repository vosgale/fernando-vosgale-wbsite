import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  .footer_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h3 {
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 14px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      font-style: normal;
      text-transform: capitalize;
    }
    button {
      letter-spacing: 4px;
      text-transform: uppercase;
      padding: 15px;
      color: rgb(255, 255, 255);
      display: flex;
      align-items: center;
      font-weight: 100;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.5s ease 0s;
      font-size: 14px;
      border: none;
    }
  }
`;
