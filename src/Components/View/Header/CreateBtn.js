import React from 'react';
import styled from 'styled-components';

function CreateBtn() {
    return (
        <NewOpenBtn>New</NewOpenBtn>
    );
}

const NewOpenBtn = styled.button`
border-radius: 10px;
border: 1px solid gray;
height: 25px;
width: 55px;
font-size: 14px;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
`;

export default CreateBtn;