import React from "react";
import { FaPenNib } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Nav({ searchstatus, SetSearchstatus }) {

    return (
        <div className="NavDiv">
            <ul className="Nav">
                <Link to="/main/newpost">
                    <li className="NavHome"><FaPenNib className="icon" /><br/>New</li>
                </Link>
                <Link to="/main">
                    <li className="NavSearch"
                    onClick={() => {SetSearchstatus(!searchstatus)}}>
                    <FaSearch className="icon" />
                    <br/>Search</li>
                </Link>
                    <li className="NavFavorite"><FaHeart className="icon" /><br/>Favorite</li>
            </ul>
        </div>
    )
}

