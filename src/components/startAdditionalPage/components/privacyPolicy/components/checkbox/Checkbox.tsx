import React from "react";
// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
`;
const Wrapper = styled.div`
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) =>
    props.isAccepted ? props.theme.colors.blue : "white"};
  border-radius: 50%;
  border: ${(props: any) =>
    props.isError
      ? `1px solid ${props.theme.colors.red}`
      : props.isAccepted
      ? "none"
      : `1px solid ${props.theme.colors.black2}`};
  transition: all 0.3s linear;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
const Input = styled.input`
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
  z-index: 5;
  left: -5px;
  top: -2px;
`;

export const Checkbox = ({
  error = "",
  value,
  formik,
  nameField,
}: {
  formik: any;
  error?: string;
  value: boolean;
  nameField: string;
}) => {
  return (
    <Container>
      <Wrapper isAccepted={value} isError={error}>
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.81248L4.81248 8.62497L11.1666 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Wrapper>
      <Input
        type={"checkbox"}
        id={nameField}
        name={nameField}
        value={value}
        {...formik}
      />
    </Container>
  );
};
