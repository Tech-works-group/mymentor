import React from "react";
import styles from "../../styles/Opportunities.module.css";
import OpportunityCard from "../../components/OpportunityCard";

const Opportunities = () => {
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
        <div className={styles.opportunities_column}>
          <OpportunityCard />
          <OpportunityCard />
          <OpportunityCard />
          <OpportunityCard />
        </div>
        <div className={styles.opportunities_column}>
          <button className="button main_button" styles={{ width: "20%" }}>
            New Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
