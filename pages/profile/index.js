import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Calender from "../../components/Calender";
import {
  faPlusSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import TextInput from "../../components/TextInput";
import Message from "../../components/Message";
import OpportunityCard from "../../components/OpportunityCard";
import MemberCard from "../../components/MemberCard";
import AuthenticationContext from "../../context/AuthenticationContext";

function index() {
  const { user } = useContext(AuthenticationContext);
  const [selected, setIsSelected] = useState("personalInfo");
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="/request/myRequests">My requests</Link>
        <Link href="profile/profileForm">Edit Profile</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="/opportunity/opportunityForm">New opportunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide" style={{ backgroundColor: "transparent" }}>
        <div className={styles.profile}>
          <div>
            <Link href="profile/profileForm">
              <button className="button main_button">Edit Profile</button>
            </Link>
          </div>
          <div className={styles.personal_info}>
            <div>
              <Image
                style={{ width: "220px", zIndex: "0" }}
                src="/avatar_women.jpg"
                alt="avatar man"
                className="image"
                width={100}
                height={100}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                }}
              />
            </div>
            <h1>Balqees Hamdi</h1>
            <h3>Software Developer</h3>
            <p>Mentor</p>
          </div>
        </div>
        <div className={styles.tabs}>
          <a
            onClick={() => {
              setIsSelected("personalInfo");
            }}
          >
            Personal Information
          </a>
          <a
            onClick={() => {
              setIsSelected("additionalInfo");
            }}
          >
            Additional Information
          </a>
        </div>
        {selected == "personalInfo" && (
          <div className={styles.personal_info_tab}>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <h1>Name</h1>
                <p>Balqees Hamdi</p>
              </div>
              <div className={styles.mini_section}>
                <h1>Phone Number</h1>
                <p>0900553618</p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <h1>Job Title</h1>
                <p>data analyst</p>
              </div>
              <div className={styles.mini_section}>
                <h1>Email</h1>
                <p>Balqees@gmail.com</p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <h1>Company</h1>
                <p>Dal group</p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <p>
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <h1>Experience</h1>
                <p>Software Engineer at EIT </p>
                <p>Software Engineer at IATL</p>
                <p>Backend developer at Suhaj.inc </p>
              </div>
              <div className={styles.mini_section}>
                <h1>Duration</h1>
                <p>2016 - 2018</p>
                <p>2016 - 2018</p>
                <p>2016 - 2018</p>
              </div>
            </div>
            <h3>Skills</h3>
            <div className={styles.section}>
              <div>
                <div className="horizontal">
                  <div className="pill"> pill one</div>
                  <div className="pill"> pill one</div>
                  <div className="pill"> pill one</div>
                </div>
              </div>
            </div>
            <h3>Open mentoring opportunities</h3>
            <div className={styles.section}>
              <div>
                <OpportunityCard source="profile" />
                <OpportunityCard source="profile" />
                <OpportunityCard source="profile" />
              </div>
            </div>
            <h3>Previous Mentees</h3>
            <div className={styles.section}>
              <div>
                <div className="horizontal">
                  <MemberCard width={150} height={150} />
                  <MemberCard width={150} height={150} />
                  <MemberCard width={150} height={150} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
              <button className="button secondary_button">Download CV</button>
            </div>
          </div>
        )}
        {selected == "additionalInfo" && (
          <div className={styles.personal_info_tab}>
            <div className={styles.section}>
              <div className={styles.mini_section}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    fontSize: "24px",
                    color: "#ffffff",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.chat_box}>
          <div className={styles.search}>
            <div>
              <TextInput
                type="text"
                placeholder="Search in messages"
                style={{ borderBottom: "none", width: "80%" }}
              ></TextInput>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: 15, color: "#ffffff" }}
              />
            </div>
          </div>
          <div>
            <Message />
            <Message />
            <Message />
          </div>
          <button className="button main_button">New Message</button>
        </div>
        <Calender source="profile" />
      </div>
    </div>
  );
}

export default index;
