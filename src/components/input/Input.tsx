import React, { FC } from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { media } from "../../styles/media";

const InputField = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  height: max-content;
  margin-top: 4px;
`;

const InputContent = styled.input`
  position: relative;
  box-sizing: border-box;
  outline: transparent;
  border: 1px solid;
  border-color: ${(props: any) => props.theme.colors.black};
  padding: 8px 16px;
  width: 100%;
  height: 40px;
  font-family: "Manrope", sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: ${(props: any) => props.theme.colors.black};
  border-radius: 12px;
  -webkit-text-fill-color: ${(props: any) => props.theme.colors.black2};
  opacity: 1; /* required on iOS */
  transition: all 0.3s linear;

  &::placeholder {
    color: ${(props: any) => props.theme.colors.black2};
    -webkit-text-fill-color: ${(props: any) => props.theme.colors.black2};
    font-family: "Manrope", sans-serif;
    -webkit-safari-color: rgba(0, 0, 0, 0.55);
    font-size: 14px;
  }
  &:focus {
    border: 1px solid;
    border-color: ${(props: any) => props.theme.colors.blue};
  }

  &.error {
    border: 1px solid;
    border-color: ${(props: any) => props.theme.colors.red};
  }

  ${media.tablet`
    -webkit-appearance: caret;
    -moz-appearance: caret; /* mobile firefox too! */
    font-size: 16px;
  `}
`;

const ErrorMessage = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  color: ${(props: any) => props.theme.colors.red};
  line-height: 12px;
  font-weight: 600;
  margin: 8px 0 0 0;
  position: relative;
  left: 8px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  &.isshown {
    opacity: 1;
  }
  ${media.tablet`
    font-size: 14px;
  `}
  ${media.phone`
    margin: 4px 0 0 5px;
  `}
`;

interface InputProps {
  formik: any;
  placeholder: string;
  error?: string;
  value: string;
  type?: string;
  nameField: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  error = "",
  value,
  formik,
  type = "text",
  nameField,
  ...props
}) => {
  const theme = useTheme();

  return (
    <InputField {...props}>
      <InputContent
        theme={theme}
        className={error && "error"}
        id={nameField}
        name={nameField}
        type={type}
        value={value}
        placeholder={placeholder}
        {...formik}
      />
      <ErrorMessage className={error && "isshown"}>{error}</ErrorMessage>
    </InputField>
  );
};
