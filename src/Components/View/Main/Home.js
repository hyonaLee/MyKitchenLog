import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="HomeDiv">
            <h1 className="HomeH1">MyKitchenLog</h1>
            <Link to="/Register">
            <button className="JoinBtn">JOIN</button>
            </Link>
            <Link to="/Login">
            <button className="LoginBtn">LOGIN</button>
            </Link>
        </div>
    )
}
