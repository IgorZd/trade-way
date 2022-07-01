import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import qrCode from "../../assets/qr_code.svg";

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 66px;
`;
const Title = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: ${(props: any) => props.theme.colors.black2};
  margin: 0 0 10px 0;
`;
const Container = styled.div`
  width: 378px;
  height: 144px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 10px 90px 50px -32px rgba(25, 29, 40, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  background-color: ${(props: any) => props.theme.colors.blue};
  padding: 18px;
`;
const QRcode = styled.img`
  margin-right: 18px;
`;
const LinesWrapper = styled.div`
  width: 172px;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 100%;
  height: 18px;
  background: linear-gradient(
    89.9deg,
    #ffffff -7.46%,
    rgba(255, 255, 255, 0) 138.55%
  );
  border-radius: 15px;
  &.last {
    width: 114px;
  }
`;

export const ScanAndInvest = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Title theme={theme}>{"Scan and Invest"}</Title>
      <Container>
        <QRcode src={qrCode.src} alt={"QR code"} />
        <LinesWrapper>
          <Line />
          <Line />
          <Line className={"last"} />
        </LinesWrapper>
      </Container>
    </Wrapper>
  );
};
