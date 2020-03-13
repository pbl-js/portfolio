import styled from "styled-components";

export default styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 3px;
  position: relative;
  /* padding-bottom: 20px; */
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.color.orange};
  }

  /* &::after {
    content: "";
    display: block;
    width: 100px;
    height: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.color.orange};
  } */
`;
