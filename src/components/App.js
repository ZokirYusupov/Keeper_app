import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Movies } from "./Movies";

// import { Note } from "./Note";


export const App = () => {
  return (
<div >
  <Header />
  <Movies  movies/>
  {/* <Heading /> */}
  {/* <Note /> */}
  <Footer />
</div>
  )
}