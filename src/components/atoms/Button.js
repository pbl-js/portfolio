import styled from "styled-components";

export default styled.button`
  width: 220px;
  height: 60px;
  border-radius: 10px;
  /* font-size: 24px; */
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.orange : theme.color.white};
  background: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.color.orange};

  border: ${({ theme, secondary }) =>
    secondary ? "2px solid " + theme.color.orange : 0};
  cursor: pointer;
`;
