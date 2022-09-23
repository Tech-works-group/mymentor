import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Request = ({ request }, source) => {
  console.log(source);
  return (
    <div
      className={
        (source = "requests_page"
          ? styles.large_request_page
          : styles.request_card)
      }
    >
      <div className={styles.request_section}>
        <div>
          <h1 className="title">Front end development</h1>
          <p>
            <b>Khadija</b> is looking for a mentor
          </p>
        </div>
        <p>
          i’m a recent computer science graduate from khartoum university,
          intrested in front end development and UI / UX looking for a mentor to
          guide me through becoming a proficional front end developer
        </p>
        <div className="horizontal">
          <div>
            <div className="horizontal info">
              <h1 className={styles.info_title}>Duration : </h1>
              <h1>3 Months</h1>
            </div>
            <div className="horizontal info">
              <h1 className={styles.info_title}>Paid : </h1>
              <h1>Yes</h1>
            </div>
          </div>
          <div>
            <div className="horizontal info">
              <h1 className={styles.info_title}>Experince : </h1>
              <h1>None</h1>
            </div>
            <div className="horizontal info">
              <h1 className={styles.info_title}>Looking for a job : </h1>
              <h1>Yes</h1>
            </div>
          </div>
          <div>
            <div className="horizontal info">
              <h1 className={styles.info_title}>Location : </h1>
              <h1>Remote</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="horizontal">
          <Link href="/">
            <button className="button main_button">Requiest</button>
          </Link>
          <Link href="/request">
            <button className="button main_button">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Request;
