import React from "react";
import Links from "./Links";


function About({github, linkedin, bio}) {

  function check() {
    if (bio === '' || bio === undefined) {
      return null
    } else {
      return <p>{bio}</p>
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {check()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />

    </div>
  );
}

export default About;
