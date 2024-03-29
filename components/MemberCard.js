import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const MemberCard = ({ width, height }) => {
  return (
    <div className={styles.member_card}>
      <Image
        className={styles.member_image}
        src="/member1.jpg"
        alt="Jerome Bell"
        width={width}
        height={height}
      />
      <h1 className="member_name">Jerome Bell </h1>
      <h1 className="member_description">
        Senior Manager - Solutions Engineering
      </h1>
    </div>
  );
};

export default MemberCard;
