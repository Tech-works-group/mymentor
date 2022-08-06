import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faPlusSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import TextInput from "../../components/TextInput";
import Message from "../../components/Message";
import OpportunityCard from "../../components/OpportunityCard";
import MemberCard from "../../components/MemberCard";

function profileForm() {
  const [selected, setIsSelected] = useState("personalInfo");
  console.log(selected);
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="/request/myRequests">My requests</Link>
        <Link href="/profile">View Profile</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="/opportunity/opportunityForm">New opportunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide" style={{ backgroundColor: "transparent" }}>
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
          <div
            className="wide"
            style={{ width: "100%", padding: "10px 25px 25px 25px" }}
          >
            <div className={styles.form_row}>
              <h3 className={styles.question}>Name</h3>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
              <h3 className={styles.question}>Phone</h3>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
            </div>
            <div className={styles.form_row}>
              <h3 className={styles.question}>Position</h3>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
              <h3 className={styles.question}>Email</h3>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
            </div>
            <div className="flex">
              <div className={styles.form_row}>
                <div>
                  <h3 className={styles.question}>Company</h3>
                  <input
                    className={styles.form_input}
                    type="text"
                    placeholder="example"
                  ></input>
                </div>
              </div>
              <div>
                <h3>Profile description</h3>
              </div>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
              <div>
                <h3>Experience</h3>
              </div>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
                <input
                  className={styles.form_input}
                  style={{ width: "20%" }}
                  type="text"
                  placeholder="Duration"
                ></input>
                <FontAwesomeIcon icon={faPlusSquare} className="icon" />
              </div>
              <div>
                <h3>Skills</h3>
              </div>
              <div className={styles.form_row}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="example"
                ></input>
              </div>
              <div>
                <h3 className={styles.question}>
                  Open mentoring opportunities
                </h3>
              </div>
              <div className={styles.form_row}>
                <select
                  className={styles.form_input}
                  style={{ padding: "10px 0" }}
                >
                  <option>Remote</option>
                  <option>On site</option>
                </select>
              </div>
            </div>
            <div style={{ color: "#007580", fontSize: "16px" }}>
              <Link href="/">Upload cv</Link>
            </div>
            <div className="right">
              <Link href="profile/profileForm">
                <button className="button main_button">Save Changes</button>
              </Link>
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
    </div>
  );
}

export default profileForm;
