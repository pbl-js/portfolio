import styled from "styled-components";
import { darken } from "polished";

export default styled.button`
  padding: 20px 40px;
  /* border-radius: 10px; */
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.orange : theme.color.white};
  background: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.color.orange};

  border: ${({ theme, secondary }) =>
    secondary ? "2px solid " + theme.color.orange : 0};
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.color.orange : darken(0.12, theme.color.orange)};
    color: ${({ theme }) => theme.color.white};
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 15px 30px;
  }
`;
