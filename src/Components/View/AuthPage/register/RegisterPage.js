import React from 'react'
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="Background">
            <div className="RegisterDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                    <form>
                        <input type="Text" placeholder="ID" name="ID">
                        </input>
                        <input type="Text" placeholder="EMALIL" name="EMALIL">
                        </input>
                        <input type="Text" placeholder="PASSWORD" name="EMALIL">
                        </input><br/>
                        <Link to="/login">
                        <button className="JoinBtn">JOIN</button>
                        </Link>
                    </form>
            </div>
        </div>
    )
}

