import React from "react";
import Link from "next/link";
import styles from "../../styles/Request.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classNames from "classnames";

import {
  faPlusSquare,
  faDollarSign,
  faBriefcase,
  faLocation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className="column">
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faDollarSign} className="icon" />
                </div>
                <h1>
                  Paid : {paid} {unit}
                </h1>
              </div>
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faLocation} className="icon" />
                </div>
                <h1>Location : Remote </h1>
              </div>
            </div>
            <div className="column">
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                </div>
                <h1>Experince : none</h1>
              </div>
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faClock} className="icon" />
                </div>
                <h1>Duration : Open Duration </h1>
              </div>
            </div>
          </div>
          <div className={styles.content_section}>
            <h1 className={styles.sub_title}>I’m looking for help with</h1>
            <ol>
              <li>
                Write software applications and programs for backend/frontend
                purposes. 
              </li>
              <li>
                Analyse programs and apps to improve their features and
                functionalities. 
              </li>
              <li>Test & debug programs and fix any reported bugs. </li>
              <li>
                Collaborate with the tech team to improve the performance,
                efficiency, and scalability of our tools. 
              </li>
            </ol>
          </div>
          <div className={styles.content_section}>
            <h1 className={styles.sub_title}>Requirements </h1>
            <ol>
              <li>Knowledge of APIs and webservices. </li>
              <li>
                Knowledge of Relational Databases (MySQL, PostgreSQL, SQL Server
                ...) and SQL language. 
              </li>
              <li>Knowledge of NoSQL databases is a plus. </li>
            </ol>
          </div>
          <div className={styles.content_section}>
            <h1 className={styles.sub_title}>I have a background about</h1>
            <ol>
              <li>
                An opportunity to work with remarkably talented colleagues.
              </li>
              <li>Vast growth potential in every aspect.</li>
              <li>15% target bonus with further upside.</li>
              <li>Employee share scheme participation</li>
              <li>International relocation support</li>
              <li>
                Opportunity to be embedded within a commercial team for those
                with strong commercial interest
              </li>
            </ol>
          </div>
          <div className={styles.content_section}>
            <h1 className={styles.sub_title}>About {name}</h1>
            <div className={styles.about_box}>
              <div className={styles.about_main_section}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <div className={styles.about_section}>
                    <div>
                      <h1 className={styles.mini_title}>Name :</h1>
                      <p>{name}</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>I'm a</h1>
                      <p>fresh graduate</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>university</h1>
                      <p>international islamic university</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>Specialization</h1>
                      <p>Computer science</p>
                    </div>
                  </div>
                  <div className={styles.about_section}>
                    <div>
                      <h1 className={styles.mini_title}>Phone number</h1>
                      <p>0995457312</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>Email</h1>
                      <p>Balqeessabir@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className={styles.about_section}>
                  <p>
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum
                  </p>
                </div>
              </div>
              <div
                className={classNames(
                  styles.about_section,
                  styles.image_section
                )}
              >
                <div>
                  <h1 className={styles.mini_title}>Expertise</h1>
                  <ol>
                    <li>Software Engineering</li>
                    <li>UI/ UX Design</li>
                    <li>Front End Development</li>
                  </ol>
                </div>
                <div className="image_container">
                  <Image
                    style={{ width: "220px" }}
                    src="/avatar_women.jpg"
                    alt="my mentor Logo"
                    className="image"
                    width={100}
                    height={110}
                  />
                  <button
                    className="button main_button"
                    style={{ marginTop: "10px" }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments_section">
          <div className="comments">
            <div className="comment">
              <div className="comment_image">
                <Image
                  style={{ width: "220px" }}
                  src="/avatar_man.jpg"
                  alt="my mentor Logo"
                  className="image"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h3>Mohamed Salih</h3>
                <p>
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum
                </p>
                <h3 style={{ justifySelf: "right" }}>Reply</h3>
              </div>
            </div>
            <div className="comment reply">
              <div className="comment_image">
                <Image
                  style={{ width: "220px" }}
                  src="/avatar_man.jpg"
                  alt="my mentor Logo"
                  className="image"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h3>Mohamed Salih</h3>
                <p>
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum
                </p>
              </div>
            </div>
          </div>
          <div className="comment_input">
            <p>Write your comment here</p>
          </div>
          <div className="right">
            <button className="button secondary_button">Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
