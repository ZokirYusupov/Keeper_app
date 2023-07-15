import {React} from "react";
import movies from "../db/movies";

import { Card } from "./Card";

export const Movies = () => {
  return (
    <div className="card_box">
      {
        movies.map(item => <Card 
                          name = {item.name} 
                          imgUrl = {item.imgUrl}
                          liked = {item.liked}
                          produced = {item.produced}
                          />
                          )
      }
    </div>
  )
}