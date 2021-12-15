import React from 'react'
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="Background">
            <div className="LoginDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                    <form>
                        <input type="Text" placeholder="ID" name="ID">
                        </input>
                        <input type="Text" placeholder="PASSWORD" name="EMALIL">
                        </input>
                        <Link to="/main">
                        <button className="LoginBtn">LOGIN</button>
                        </Link>
                    </form>
            </div>
        </div>
    )
}
export default LoginPage;
