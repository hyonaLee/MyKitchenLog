import React from 'react'
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="LoginDiv">
            <h1 className="HomeH1">MyKitchenLog</h1>
             <form>
                <input type="Text" placeholder="ID" name="ID"></input>
                <input type="Text" placeholder="PASSWORD" name="EMALIL"></input>
                <Link to="/Main">
                <button className="LoginBtn">Login</button>
                </Link>
            </form>
        </div>
    )
}
export default LoginPage;
