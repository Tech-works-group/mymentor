import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import AuthenticationContext from "../context/AuthenticationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faBars, faCrown } from "@fortawesome/free-solid-svg-icons";
const Navigation = (props) => {
  const data = useContext(AuthenticationContext);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [show, setShow] = useState(false);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const { user } = useContext(AuthenticationContext);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 40 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <>
      <div
        className="navigation_bar navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 50px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div>
          <Link href="/">
            <Image
              style={{ width: "220px" }}
              src="/logo.png"
              alt="my mentor Logo"
              className="logo"
              width={180}
              height={40}
            />
          </Link>
        </div>
        {user ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link href="/find_mentor">
              <button className="nav_item">Find a mentor </button>
            </Link>
            <Link href="/info/become_mentor">
              <button className="nav_item">Become a mentor</button>
            </Link>
            <Link href="/info/vip_mentors">
              <button className="nav_item">VIP mentors</button>
            </Link>
            <div className="nav_item">
              <a href={"/profile"}>
                welcome{data.user.username ? data.user.username : ""}
              </a>
            </div>

            <Link href="/auth/signup">
              <button className="main_button button">Logout</button>
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href="/info/find_mentor">
                <button className="nav_item">Find a mentor </button>
              </Link>
              <Link href="/info/become_mentor">
                <button className="nav_item">Become a mentor</button>
              </Link>
              <Link href="/info/vip_mentors">
                <div style={{ display: "flex" }}>
                  <button className="nav_item">VIP mentors</button>
                  <FontAwesomeIcon
                    icon={faCrown}
                    className="icon_yellow"
                    style={{ marginRight: "10px" }}
                  />
                </div>
              </Link>
              <Link href="/auth/login">
                <button className="secondary_button button">Login</button>
              </Link>
              <Link href="/auth/signup">
                <button className="main_button button">Join Us</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="mobile_nav">
        <Image
          style={{ width: "220px" }}
          src="/logoText.png"
          alt="my mentor Logo"
          className="logo"
          width={100}
          height={40}
        />
        <FontAwesomeIcon
          icon={faBars}
          className="icon"
          style={{ fontSize: 30 }}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      {show && (
        <div className="dropdown_menu">
          <div>
            <a>Become a mentor</a>
          </div>
          <div>
            <a>Find a mentor</a>
          </div>
          <div>
            <a>Login</a>
          </div>
          <a>Join us</a>
        </div>
      )}
    </>
  );
};
export default Navigation;
