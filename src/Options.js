import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
export default function Options({ title, check }) {
  return (
    <>
      {!check ? (
        <div className="option">
          <span>{title}</span>
          <BiPlus />
        </div>
      ) : (
        <div className="option">
          <span style={{ color: "#ccc" }}>{title}</span>
          <BsCheck color="#ccc" />
        </div>
      )}
    </>
  );
}
