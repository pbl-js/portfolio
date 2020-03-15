import React, { useState } from "react";
import styled from "styled-components";
import H1 from "../components/atoms/H1";
import SmallButton from "../components/atoms/SmallButton";

const StyledWrapper = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding: 100px;
`;

const FormWrapper = styled.form`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  box-shadow: -10px 10px 0 ${({ theme }) => theme.color.orange};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  /* height: 40px; */
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  resize: none;
`;

const StyledButton = styled(SmallButton)`
  margin: 0 auto;
  width: 100px;
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <StyledWrapper>
      <H1 center orange>
        <span>{"<"}</span> Kontakt <span>{"/>"}</span>
      </H1>

      <FormWrapper>
        <StyledInput type="email" placeholder="Twój email" />
        <StyledTextArea placeholder="Zostaw wiadomość" />
        <StyledButton>Wyślij</StyledButton>
      </FormWrapper>
    </StyledWrapper>
  );
};

export default Contact;
