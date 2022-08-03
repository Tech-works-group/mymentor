import React from 'react'
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
import { interpolateAs } from 'next/dist/shared/lib/router/router';

const opportunityForm = () => {
  const name = "Khadiga Saif";
  const title = "Front End development";
  const paid = 20;
  const unit = "sdg/h";
 
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="">Edit Mentoring Opportunity</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="">Post a new oppurtunity</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <div className="wide">
        <h3>Mentoring oppurtunity title</h3>
        <input type="text" placeholder="example"></input>
        <h3>Oppurtunity Description</h3>
        <input type="text" placeholder="example"></input>

        <div className="flex">
          <div>
          <div className={styles.form_item}>
          <h3>Certificate</h3>
          <select>
            <option selected>Awarded</option>
            <option>Not Awarded</option>
            </select>
          </div>
          <div className={styles.form_item}>
          <h3>Duration</h3>
          <select>
            <option>3 Months</option>
            <option>6 Months</option>
            </select>
            </div>
          </div>
          <div>
          <div className={styles.form_item}>
          <h3>Location</h3>
          <select>
            <option>Remote</option>
            <option>On site</option>
            </select>
            </div>
            <br></br>
            <div>
          <label for="might_get_hired">Might get hired</label>
              <input type="radio" value="might_get_hired"></input>
              </div>
          </div>
          <div style={{}}>
          <div className={styles.form_item}>
          <label for="paid">paid</label>
            <input type="radio" value="paid"></input>
            </div>
            <div className={styles.column_form_item}>
              <br></br>
            <h3>Amount</h3>
            <input type="text" placeholder="example"></input>
          </div>
            <div className={styles.column_form_item}>
              <h3>Currency</h3>
            <select>
              <option selected>USD</option>
              <option>SDG</option>
            </select>
            </div>
            </div>
        <h3>Responsiblities</h3>
        <input type="text" placeholder="example"></input>
        <h3>Requirements</h3>
        <input type="text" placeholder="example"></input>
        <h3>Expected Outcome</h3>
        <input type="text" placeholder="example"></input>
      </div>
      </div>
    </div>
  );
}

export default opportunityForm;
