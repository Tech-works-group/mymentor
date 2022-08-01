import React,{useState, useEffect} from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Navigation = (props) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

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
    <div
      className=" navigation_bar navbar navbar-expand-lg navbar-light fixed-top"
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
      <div>
        <Link href="/">
          <button className="nav_item">Find a mentor </button>
        </Link>
        <Link href="/about">
          <button className="nav_item">Become a mentor</button>
        </Link>
        <Link href="/login">
          <button className="secondary_button button">Login</button>
        </Link>
        <Link href="/signup">
          <button className="main_button button">Join Us</button>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
