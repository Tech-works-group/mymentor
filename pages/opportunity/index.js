import React from "react";
import Link from "next/link";
import styles from "../../styles/Request.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Comment from "../../components/Comment";
import classNames from "classnames";
import TextInput from "../../components/TextInput";

import {
  faPlusSquare,
  faDollarSign,
  faBriefcase,
  faLocation,
  faClock,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  const name = "Walid Ali";
  const title = "Website UI design implementation";
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
          <Link href="/opportunity/opportunityForm">New opportunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide">
        <div className="tag">
          <h1>Mentoring Opportunity</h1>
        </div>
        <div className="content">
          <h1 className={styles.title}>{title}</h1>
          <p>Get Mentored {name} </p>
          <p className={styles.description}>{description}</p>
          <div className="row" style={{ width: "100%" }}>
            <div className="column">
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faCertificate} className="icon" />
                </div>
                <h1>Certificate : Awarded</h1>
              </div>
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faDollarSign} className="icon" />
                </div>
                <h1>
                  Paid : {paid} {unit}
                </h1>
              </div>
            </div>
            <div className="column">
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                </div>
                <h1>Duration : Open Duration</h1>
              </div>
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faClock} className="icon" />
                </div>
                <h1>Duration : Open Duration </h1>
              </div>
            </div>
            <div className="column">
              <div className={styles.content_item}>
                <div className={styles.icon_box}>
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                </div>
                <h1>Might get hired : yes</h1>
              </div>
            </div>
          </div>
          <div className={styles.content_section}>
            <h1 className={styles.sub_title}>Responsibilities </h1>
            <ol>
              <li>
                Write software applications and programs for backend/frontend
                purposes.
              </li>
              <li>
                Analyse programs and apps to improve their features and
                functionalities.
              </li>
              <li>Test & debug programs and fix any reported bugs.</li>
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
            <h1 className={styles.sub_title}>Expected outcome</h1>
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
                      <h1 className={styles.mini_title}>Job Title</h1>
                      <p>Front-end Developer</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>Company</h1>
                      <p>EIT</p>
                    </div>
                    <div>
                      <h1 className={styles.mini_title}>Awards</h1>
                      <p>Best Sudanese Developer of the year</p>
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
            <Comment />
            <Comment type="reply" />
          </div>
          <div className="comment_input">
            <TextInput
              type="text"
              placeholder="Write your comment here"
              style={{ borderBottom: "none" }}
            />
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
