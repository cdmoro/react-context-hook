import React, { useContext } from "react";
import { Context } from "../store";

const About = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1>About me!</h1>
      <div>Hello! My name is {store.userName}</div>
      <div>and the theme is {store.theme}</div>
    </div>
  );
};

export default About;
