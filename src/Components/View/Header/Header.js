import React from 'react';
import Logo from './Logo'
import CreateBtn from './CreateBtn'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Header() {
    return (
        <HeaderDiv>
            <Link to="/">
                <Logo/>
            </Link>
            <Link to="Write">
                <CreateBtn/>
            </Link>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    position: fixed;
    height: 80px;
    top: 0px;
    width: 100%;
    background-color: ivory;
    color: gray;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 90;
    `;

export default Header;