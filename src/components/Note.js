import React from "react";

export const Note = () => {
  return (
    <div className="note_box" style={{
      margin: "15px 30px",
      padding: "15px",
      width: "300px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px #444"
    }}>
      <h1>Title</h1>
      <p>Info</p>
    </div>
  )
}