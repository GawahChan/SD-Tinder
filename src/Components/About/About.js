import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutParagraph,
  AboutList
} from "./Style";

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>SD-Tinder</AboutHeader>
      <AboutParagraph>
        Are you a director looking for the next perfect stunt double for your
        new movie? Then try out SD-Tinder, the quick and easy way to find the
        perfect candidate for you!
      </AboutParagraph>
      <AboutParagraph>
        This personal project is inspired by Tinder and utilises a similar UI.
        The user is presented with a stack of profile cards of different stunt
        doubles, where the user can 'like', 'dislike' or 'superlike' the profile
        by either clicking on the buttons or utilise a swiping mechanism similar
        to Tinder. The actions of the user will be displayed on the home page
        either at the end of going through all the profiles or using the "Home"
        link in the menu section.
      </AboutParagraph>
      <AboutParagraph>
        This project uses the following:
        <AboutList>
          <li>JavaScript throughout the project</li>
          <li>Create React App</li>
          <li>PropTypes for declaring props</li>
          <li>Styled components for custom/re-usable stylings</li>
          <li>Redux for state management</li>
          <li>Framer-Motion for implementing gestures and animations</li>
        </AboutList>
      </AboutParagraph>
      <AboutParagraph>
        If you're interested, feel free to check out the code for this project
        on Github{" "}
        <a
          href="https://github.com/GawahChan/SD-Tinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          here!
        </a>
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
