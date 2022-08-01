import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <Image
        style={{ width: "220px" }}
        src="/logoText.png"
        alt="invite friends"
        className=""
        width={200}
        height={80}
      ></Image> */}
        <div className="footer_top">
          <div>
            <h1>MY MENTOR</h1>
            <p>
              Easing the process of gaining access to actual one-on-one training
              and hands-on experience in different fields
            </p>
            <div className="socials">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 40, color: "#" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 40, color: "#" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: 40, color: "#" }}
            />
            </div>
            <div>
              <i className="fas fa-check"></i>
            </div>
          </div>
          <div className="footer_links">
            <div className="footer_top_section">
              <h3>Pages</h3>
              <h3>About</h3>
              <h3>Becoming a mentor</h3>
              <h3>Becoming a mentee</h3>
              <h3>Privacy Policy</h3>
            </div>
            <div className="footer_top_section">
              <h3>Get in touch</h3>
              <h3>(+249) 900 55 3618</h3>
              <h3>Mymentor@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>© 2022 Dribbble. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
