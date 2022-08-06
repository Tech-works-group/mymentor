import React from "react";
import Link from "next/link";
import styles from "../../styles/Request.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classNames from "classnames";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { interpolateAs } from "next/dist/shared/lib/router/router";

const opportunityForm = () => {
  const name = "Khadiga Saif";
  const title = "Front End development";
  const paid = 20;
  const unit = "sdg/h";

  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="">My Mentoring Opportunities</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="">Post a new opportunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide" style={{ padding: "0 25px 25px 25px" }}>
        <div className="tag">
          <h1>New Mentoring Opportunity</h1>
        </div>
        <h3 className={styles.question} style={{ marginTop: "25px" }}>
          Mentoring Opportunity title
        </h3>
        <div className={styles.form_row}>
          <input
            className={styles.form_input}
            type="text"
            placeholder="example"
          ></input>
        </div>
        <h3 className={styles.question}>opportunity Description</h3>
        <div className={styles.form_row}>
          <input
            className={styles.form_input}
            type="text"
            placeholder="example"
          ></input>
        </div>
        <div className="flex">
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Certificate</h3>
              <select className={styles.form_input}>
                <option selected>Awarded</option>
                <option>Not Awarded</option>
              </select>
            </div>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Duration</h3>
              <select className={styles.form_input}>
                <option>3 Months</option>
                <option>6 Months</option>
              </select>
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Location</h3>
              <select className={styles.form_input}>
                <option>Remote</option>
                <option>On site</option>
              </select>
            </div>
            <div>
              <label for="might_get_hired">Might get hired</label>
              <input type="radio" value="might_get_hired"></input>
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <label for="paid">paid</label>
              <input
                className={styles.form_input}
                type="radio"
                value="paid"
              ></input>
            </div>
            <div>
              <h3 className={styles.question}>Amount</h3>
              <input
                className={styles.form_input}
                type="text"
                placeholder="example"
              ></input>
            </div>
            <div>
              <h3 className={styles.question}>Currency</h3>
              <select className={styles.form_input}>
                <option>SDG</option>
                <option>USD</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Responsibilities</h3>
          </div>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
            ></input>
          </div>
          <div>
            <h3>Requirements</h3>
          </div>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
            ></input>
          </div>
          <h3>Expected Outcome</h3>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
            ></input>
          </div>
        </div>
        <div className="right">
          <button className="button main_button">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default opportunityForm;
