import React from "react"

export const Footer = () => {
  return (
    <div className="footer" style={{
      position: "absolute",
      bottom: "30px",
      left: "-50%",
      right: "-45%",
      transform: "translate(50%, -59%)"
    }}>
    <h5>  &copy; Copyright {new Date().getFullYear()} </h5>
  </div>
  )
}