import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button"
export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"}/>
                    <Field as={"textarea"}/>
                <Button>Send message</Button>
            </StyledForm>
        </StyledContacts>
);
};

const StyledContacts = styled.section`
background-color: palegoldenrod;
  min-height: 50vh;
`
const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`

`
