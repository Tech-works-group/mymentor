import React from "react";
import Link from "next/link";
import styles from "../../styles/Request.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faDollarSign, faBriefcase, faLocation, faClock} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  const name = "Khadiga Saif";
  const title = "Front End development";
  const paid = 20;
  const unit = "sdg/h";
  const description =
    "i’m a recent computer science graduate from khartoum university, intrested in front end development and UI / UX  looking for a mentor to guide me through becoming a proficional front end developer ";
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="">Edit Mentoring Opportunity</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="">New Mentoring Request</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide">
        <div className="tag">
          <h1>Mentoring request</h1>
        </div>
        <div className="content">
          <h1 className={styles.title}>{title}</h1>
          <p>{name} is looking for a mentor</p>
          <p className={styles.description}>{description}</p>
          <div className="row">
          <div className={styles.content_item}>
            <div>
            <FontAwesomeIcon
              icon={faDollarSign}
              className="icon"
            />
            </div>
            <h1>
              Paid : {paid} {unit}
            </h1>
          </div>
          <div className={styles.content_item}>
            <div>
            <FontAwesomeIcon
              icon={faLocation}
              className="icon"
            />
            </div>
            <h1>
              Paid : {paid} {unit}
            </h1>
          </div>
          </div>
          <div className="row">
          <div className={styles.content_item}>
            <FontAwesomeIcon
              icon={faBriefcase}
              className="icon"
            />
            <h1>
              Paid : {paid} {unit}
            </h1>
          </div>
          <div className={styles.content_item}>
            <FontAwesomeIcon
              icon={faClock}
              className="icon"
            />
            <h1>
              Paid : {paid} {unit}
            </h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
