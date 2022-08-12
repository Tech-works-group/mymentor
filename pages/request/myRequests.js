import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Request.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPlusSquare,
  faXmarkSquare,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import TextInput from "../../components/TextInput";
import Message from "../../components/Message";
import ChatBox from "../../components/ChatBox";

function myRequests() {
  const [showId, setShow] = useState("");

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
        <div className={styles.request_box}>
          <div className="horizontal">
            <h3>Web development using react</h3>
          </div>
          <div className="horizontal">
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="button main_button"
                onClick={() => setShow(showId != "one" ? "one" : "")}
              >
                3 Requests
              </button>
              <FontAwesomeIcon
                icon={faTrash}
                className="icon"
                style={{ fontSize: "15px" }}
              />
            </div>
          </div>
        </div>
        {showId == "one" && (
          <div>
            <div className={styles.applicant_info_box}>
              <div className="horizontal">
                <div>
                  <Image
                    src="/old_man.jpg"
                    alt="avatar women"
                    className="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.applicant_info}>
                  <h3>Mohamed Ali</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="horizontal">
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <FontAwesomeIcon
                  icon={faXmarkSquare}
                  className="icon"
                  style={{ color: "#C32200" }}
                />
              </div>
            </div>
            <div className={styles.applicant_info_box}>
              <div className="horizontal">
                <div>
                  <Image
                    src="/old_man.jpg"
                    alt="avatar women"
                    className="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.applicant_info}>
                  <h3>Mohamed Ali</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="horizontal">
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <FontAwesomeIcon
                  icon={faXmarkSquare}
                  className="icon"
                  style={{ color: "#C32200" }}
                />
              </div>
            </div>
            <div className={styles.applicant_info_box}>
              <div className="horizontal">
                <div>
                  <Image
                    src="/old_man.jpg"
                    alt="avatar women"
                    className="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.applicant_info}>
                  <h3>Mohamed Ali</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="horizontal">
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <FontAwesomeIcon
                  icon={faXmarkSquare}
                  className="icon"
                  style={{ color: "#C32200" }}
                />
              </div>
            </div>
          </div>
        )}
        <div className={styles.request_box}>
          <div className="horizontal">
            <h3>Mobile app development using react native</h3>
          </div>
          <div className="horizontal">
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="button main_button"
                onClick={() => setShow(showId != "two" ? "two" : "")}
              >
                2 Requests
              </button>
              <FontAwesomeIcon
                icon={faTrash}
                className="icon"
                style={{ fontSize: "15px" }}
              />
            </div>
          </div>
        </div>
        {showId == "two" && (
          <div>
            <div className={styles.applicant_info_box}>
              <div className="horizontal">
                <div>
                  <Image
                    src="/old_man.jpg"
                    alt="avatar women"
                    className="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.applicant_info}>
                  <h3>Mohamed Ali</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="horizontal">
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <FontAwesomeIcon
                  icon={faXmarkSquare}
                  className="icon"
                  style={{ color: "#C32200" }}
                />
              </div>
            </div>
            <div className={styles.applicant_info_box}>
              <div className="horizontal">
                <div>
                  <Image
                    src="/old_man.jpg"
                    alt="avatar women"
                    className="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.applicant_info}>
                  <h3>Mohamed Ali</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="horizontal">
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <FontAwesomeIcon
                  icon={faXmarkSquare}
                  className="icon"
                  style={{ color: "#C32200" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <ChatBox />
    </div>
  );
}

export default myRequests;
