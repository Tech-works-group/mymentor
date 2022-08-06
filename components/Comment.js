import React from "react";
import Image from "next/image";

const Comment = ({ type }) => {
  return (
    <div className={type === "reply" ? "comment reply" : "comment"}>
      <div className="comment_image">
        <Image
          style={{ width: "220px" }}
          src="/avatar_man.jpg"
          alt="my mentor Logo"
          className="image"
          width={60}
          height={60}
        />
      </div>
      <div>
        <h3>Mohamed Salih</h3>
        <p>
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum
        </p>
        {type !== "reply" && <h3 style={{ justifySelf: "right" }}>Reply</h3>}
      </div>
    </div>
  );
};

export default Comment;
