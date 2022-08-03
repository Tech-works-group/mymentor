import React from "react";
import Link from "next/link";
import styles from "../../styles/Profile.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import TextInput from "../../components/TextInput";
import Message from "../../components/Message";
const index = () => {
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="">My requests</Link>
        <Link href="">Edit Profile</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="/opportunity/opportunityForm">New opportunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide">
        <div className={styles.profile}>
          <div>
            <button className="button main_button">Edit Profile</button>
          </div>
          <div></div>
        </div>
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
};

export default index;
