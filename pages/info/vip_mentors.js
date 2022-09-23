import React from "react";
import styles from "../../styles/Info.module.css";
import classNames from "classnames";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Vip_mentors = () => {
  return (
    <div className={styles.body}>
      <div
        className={styles.main_container}
        style={{ backgroundColor: "transparent" }}
      >
        <div>
          <div className={styles.title}>
            <h1>Join us as a VIP Mentor</h1>
          </div>
          <div className={styles.card_container}>
            {/* <div className={styles.mentor_card}>
              <div className={styles.image_box}>
                <Image
                  style={{ width: "220px" }}
                  src="/old_man.jpg"
                  className={styles.avatar}
                  width={100}
                  height={100}
                ></Image>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon
                    icon={faCrown}
                    className={classNames("icon_yellow", styles.crown)}
                    style={{ marginRight: "10px" }}
                  />
                  <h1>VIP MENTOR</h1>
                </div>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className={classNames("icon_yellow", styles.crown)}
                    style={{ marginRight: "10px" }}
                  />
                  Offer paid mentroship
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className={classNames("icon_yellow", styles.crown)}
                    style={{ marginRight: "10px" }}
                  />
                  Gain profit from mentoring
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className={classNames("icon_yellow", styles.crown)}
                    style={{ marginRight: "10px" }}
                  />
                  Become a recognized mentor
                </li>
              </ul>
              <button className="main_button button"> Apply </button>
            </div> */}
            {/* <div className={classNames(styles.mentor_card, styles.super)}></div> */}
            <div style={{ fontSize: "20px" }}>
              <p>
                Our VIP mentors are highly selected people of high profiles,
                with an astonishing background and a career full of achievements
                and outstanding performance.
              </p>
              <p>
                VIP MENTORS recive an offer from us or they can apply and
                provide the required documents, go through the interview and the
                selection process and after that start to offer VIP mentoring
              </p>
            </div>
          </div>
        </div>

        <div class="pricingTable">
          <h2 class="pricingTable-title">
            Looking for a VIP Mentor? Find a plan that's right for you.
          </h2>
          <h3 class="pricingTable-subtitle">
            Every plan comes with a 30-day free trial.
          </h3>

          <ul class="pricingTable-firstTable">
            <li class="pricingTable-firstTable_table">
              <h1 class="pricingTable-firstTable_table__header">
                Bronze Packege
              </h1>
              <p class="pricingTable-firstTable_table__pricing">
                <span>$</span>
                <span>10</span>
                <span>Month</span>
              </p>
              <ul class="pricingTable-firstTable_table__options">
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart">
                Get Started Now
              </button>
            </li>
            <li class="pricingTable-firstTable_table">
              <h1 class="pricingTable-firstTable_table__header">
                Gold Packege
              </h1>
              <p class="pricingTable-firstTable_table__pricing">
                <span>$</span>
                <span>19</span>
                <span>Month</span>
              </p>
              <ul class="pricingTable-firstTable_table__options">
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
                <li>Take Booking Online</li>
                <li>24/7 Support Service</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart">
                Get Started Now
              </button>
            </li>
            <li class="pricingTable-firstTable_table">
              <h1 class="pricingTable-firstTable_table__header">
                Platinum Packege
              </h1>
              <p class="pricingTable-firstTable_table__pricing">
                <span>$</span>
                <span>49</span>
                <span>Month</span>
              </p>
              <ul class="pricingTable-firstTable_table__options">
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart">
                Get Started Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vip_mentors;
