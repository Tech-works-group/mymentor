import React from 'react'
import styles from "../styles/Search.module.css";
import OpportunityCard from '../components/OpportunityCard';
import RequestCard from '../components/RequestCard';
function search() {
  return (
    <div className={styles.card}>
        <div className={styles.oppurtunities_box}>
        <p className="sub_title">Open <b>mentoring oppurtunities</b></p>
        <div className={styles.oppurtunities}>
        <OpportunityCard className={styles.opportunity_card}/>
        <OpportunityCard/>
        </div>
        <div className={styles.oppurtunities}>
        <OpportunityCard/>
        <OpportunityCard/>
        </div>
        </div>
        <div className={styles.requests_box}>
<RequestCard/>
<RequestCard/>
<RequestCard/>
<RequestCard/>
        </div>
    </div>
  )
}

export default search