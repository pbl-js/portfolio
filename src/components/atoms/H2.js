import styled from "styled-components";

export default styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 3px;
`;
