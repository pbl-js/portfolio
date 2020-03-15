import styled from "styled-components";
import Button from "./Button";

export default styled(Button)`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
