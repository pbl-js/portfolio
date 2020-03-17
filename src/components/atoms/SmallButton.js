import styled from "styled-components";
import Button from "./Button";

export default styled(Button)`
  width: 100%;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 12px 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
