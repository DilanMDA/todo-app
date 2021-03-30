import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FormWrapper } from "../../../hoc/layout/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Button from "../../../components/UI/Forms/Button/Button";
import * as actions from "../../../store/actions";
import Message from "../../../components/UI/Message/Message";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const VerifyEmail = ({ sendVerification, error, loading }) => {
  return (
    <FormWrapper>
      <Wrapper>
        <Heading color="white" size="h1">
          You are not verified
        </Heading>
        <Heading color="white" bold size="h4">
          Go to Your email inbox, and please verify your email.
        </Heading>
        <Button
          loading={loading ? "Sending email...." : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          {" "}
          Re-send verification email{" "}
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={error === false}>
            Message sent successfull
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
