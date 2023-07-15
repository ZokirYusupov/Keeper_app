import React from "react";
import { CurrentTime } from "../services/currentTime";

const currentTime = new CurrentTime().changeColor()


export const Heading = () => {
  return (
    <div className="heading">
      <h1 style={{color: currentTime.color}}>{currentTime.text}</h1>
    </div>
  )
}