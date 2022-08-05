import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const OpportunityCard = ({ source }) => {
  console.log(source);
  return (
    <div
      className={styles.opportunity_card}
      style={(source = "profile" ? { width: "90%" } : { width: "49%" })}
    >
      <div className={styles.opportunity_header}>
        <div>
          <h1 className="title">Here is the opportunity title</h1>
          <p>Get mentored by</p>
        </div>
        <div className="vertical">
          <Link href="/opportunity/opportunityForm">
            <button className="button main_button">Requiest</button>
          </Link>
          <Link href="/opportunity">
            <button className="button main_button">View</button>
          </Link>
        </div>
      </div>
      <div className="horizontal">
        <div className="pill"> pill one</div>
        <div className="pill"> pill two</div>
      </div>
      <p className="text">
        looking for someone who’s intrested in project managment related tasks
        and who’s eagre to gain knowledge and have fun during the experience
      </p>
    </div>
  );
};

export default OpportunityCard;
