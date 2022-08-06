import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  return (
    <div className="message_body">
      <div>
        <Image
          src="/avatar_man.jpg"
          alt="avatar man"
          className="image"
          width={60}
          height={60}
        />
      </div>
      <div>
        <h1>Mostafa Yasen</h1>
        <p>hello can you help me with ..</p>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        style={{ fontSize: "15px", color: "#c3c3c3" }}
      />
    </div>
  );
};

export default Message;
