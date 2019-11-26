import styled from "styled-components";
import { palette } from "styled-theme";
import bgImage from "../../image/sign.jpg";
import WithDirection from "../../settings/withDirection";

const SignInStyleWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  //height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background : transparent;
  // background: url(${bgImage}) no-repeat center center;
  // background-size: cover;

  // &:before {
  //   content: "";
  //   width: 100%;
  //   height: 40%;
  //   display: flex;
  //   //background-color: rgba(255, 255, 255);
  //   background-color: #57247e;
  //   position: absolute;
  //   z-index: 1;
  //   top: 0;
  //   left: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
  //   right: ${props => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
  // }

  .isoLoginContentWrapper {
    width: 520px;
    margin : auto ;
    overflow-y: auto;
    z-index: 10;
    position: relative;
    // border : 1px solid rgba(0,0,0,0.125);
    // border-radius:5px 
  }

  .isoLoginContent {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    position: relative;
    background: transparent ;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      justify-content: left;
      flex-shrink: 0;

      a {
        font-family: Muli,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        font-weight: 500;
        line-height: 1.5;
        color: #212121;
        font-size: 24px;
        text-transform: uppercase;
      }
    }

    .isoSignInForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .isoInputWrapper {
        margin-bottom: 15px;

        &:last-of-type {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &:-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &::-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette("grayscale", 0)};
          }
        }
      }

      .isoHelperText {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        color: ${palette("grayscale", 1)};
        padding-left: ${props =>
          props["data-rtl"] === "rtl" ? "inherit" : "13px"};
        padding-right: ${props =>
          props["data-rtl"] === "rtl" ? "13px" : "inherit"};
        margin: 15px 0;
        position: relative;
        display: flex;
        align-items: center;

        &:before {
          content: "*";
          color: ${palette("error", 0)};
          padding-right: 3px;
          font-size: 14px;
          line-height: 1;
          position: absolute;
          top: 2px;
          left: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
          right: ${props => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
        }
      }

      .isoHelperWrapper {
        margin-top: 35px;
        flex-direction: column;
      }

      .isoOtherLogin {
        padding-top: 40px;
        margin-top: 35px;
        border-top: 1px dashed ${palette("grayscale", 2)};

        > a {
          display: flex;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        button {
          width: 100%;
          height: 42px;
          border: 0;
          font-weight: 500;

          &.btnFacebook {
            background-color: #3b5998;

            &:hover {
              background-color: darken(#3b5998, 5%);
            }
          }

          &.btnGooglePlus {
            background-color: #dd4b39;
            margin-top: 15px;

            &:hover {
              background-color: darken(#dd4b39, 5%);
            }
          }

          &.btnAuthZero {
            background-color: #e14615;
            margin-top: 15px;

            &:hover {
              background-color: darken(#e14615, 5%);
            }
          }

          &.btnFirebase {
            background-color: ${palette("color", 5)};
            margin-top: 15px;

            &:hover {
              background-color: ${palette("color", 6)};
            }
          }
        }
      }

      .isoForgotPass {
        font-size: 12px;
        color: ${palette("text", 3)};
        margin-bottom: 10px;
        text-decoration: none;

        &:hover {
          color: ${palette("primary", 0)};
        }
      }
      label{
        font-family: Muli,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212121;
      }
      button {
        font-weight: 500;
      }
      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #57247e;
        border-color: #57247e;
      }
    }
  }
`;

export default WithDirection(SignInStyleWrapper);
