import React from 'react';
import styled from 'styled-components';

function CreateBtn() {
    return (
        <NewOpenBtn>New</NewOpenBtn>
    );
}

const NewOpenBtn = styled.button`
border-radius: 14px;
border: none;
background-color: orange;
color: white;
height: 30px;
width: 65px;
font-size: 24px;
line-height: 20px;
margin-right: 50px;
cursor: pointer;
@media screen and (max-width: 330px) {
    font-size: 18px;
    height: 22px;
    width: 55px;
   }
`;

export default CreateBtn;