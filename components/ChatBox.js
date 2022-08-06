import React, { useState } from "react";
import TextInput from "./TextInput";
import Message from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Profile.module.css";

const ChatBox = () => {
  const [showId, setShow] = useState("");

  return (
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
      {showId === "messageBox" && (
        <div
          className="message_body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextInput style={{ borderBottom: "none" }} placeholder="to :" />
          <TextInput style={{ borderBottom: "none" }} placeholder="content :" />
        </div>
      )}
      <button
        className="button main_button"
        onClick={() => setShow(showId ? "" : "messageBox")}
      >
        New Message
      </button>
    </div>
  );
};

export default ChatBox;
