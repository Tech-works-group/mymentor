import React from "react";
import styles from "../../styles/Opportunities.module.css";
import RequestCard from "../../components/RequestCard";

const Requests = () => {
  return (
    <div
      style={{
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
      }}
      className="container"
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.requests_column}>
          <RequestCard source="requests_page" />
          <RequestCard source="requests_page" />
          <RequestCard source="requests_page" />
          <RequestCard source="requests_page" />
        </div>
        <div className={styles.requests_column}>
          <button className="button secondary_button" styles={{ width: "20%" }}>
            New Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
