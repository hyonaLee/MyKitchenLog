import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
      useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

    return (
        <div className="Background">
            <div className="HomeDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                <Link to="/register">
                <button className="JoinBtn">JOIN</button>
                </Link>
                <Link to="/login">
                <button className="LoginBtn">LOGIN</button>
                </Link>
            </div>
        </div>
    )
}
