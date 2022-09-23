import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const MemberCard = ({ width, height }) => {
  return (
    <Link href="/profile/userProfile">
      <div className={styles.member_card}>
        <Image
          className={styles.member_image}
          src="/member1.jpg"
          alt="Jerome Bell"
          style={{ cursor: "pointer" }}
          width={width}
          height={height}
        />
        <h1 className="member_name">Jerome Bell </h1>
        <h1 className="member_description">
          Senior Manager - Solutions Engineering
        </h1>
      </div>
    </Link>
  );
};

export default MemberCard;
