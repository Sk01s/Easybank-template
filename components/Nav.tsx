"use client";
import Link from "next/link";
import React, { use } from "react";
import Logo from "../images/logo.svg";
import Image from "next/image";
import burgerBtn from "../images/icon-hamburger.svg";
import closeBtn from "../images/icon-close.svg";
import { useState } from "react";
import "../styles/Nav.css";
const Nav = () => {
  const [isLinksListActive, settingLinkglist] = useState(false);
  const settingList = () => {
    settingLinkglist((prev) => !prev);
  };
  return (
    <nav>
      <div className="logo">
        <Image src={Logo} alt="Logo" />
      </div>

      <Image
        onClick={settingList}
        src={isLinksListActive ? closeBtn : burgerBtn}
        alt="menu button"
        className="menu-btn"
      />

      <ul className={isLinksListActive ? "active" : ""}>
        <li>
          <Link href={"#home"}>Home</Link>
        </li>
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"#blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"#carees"}>Careers</Link>
        </li>
      </ul>
      <button className="button">Request Invite</button>
    </nav>
  );
};

export default Nav;
