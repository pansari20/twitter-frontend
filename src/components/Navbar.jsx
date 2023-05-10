import React from "react";
import { Link } from "react-router-dom";
import {FaTwitter} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {CiLogout} from 'react-icons/ci';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/' className="navbar-twitter-icon"><FaTwitter size={40} /> Twitter</Link>
      <hr />
      <Link to="/" className="nav-item">
        <AiOutlineHome size={20} /> Home
      </Link>
      <Link to="/profile" className="nav-item">
        <CgProfile size={20} /> Profile
      </Link>
      <Link to="/login" className="nav-item">
        <CiLogout size={20} /> Logout
      </Link>
    </div>
  );
}
