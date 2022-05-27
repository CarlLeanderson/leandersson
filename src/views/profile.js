import React from "react";
import "../style/header.css";
import projectsData from "../data/projects-data";
import carljpeg from "../data/Carl-jpeg.jpg";
import carlwebp from "../data/Carl-webp.webp";

let categories = [];
projectsData.forEach((proj) => {
  if (!categories.includes(proj.category)) {
    categories.push(proj.category);
  }
});

const Profile = () => {
  return (
    <center>
      <div>
        <picture>
          <source className="profile-img" srcSet={carlwebp} alt="It's a me" />
          <img className="profile-img" src={carljpeg} alt="It's a me" />
        </picture>
      </div>
      <p className="text-style">
        Hello! My name is Carl and i'm currently an Interactive Media Technology
        student at KTH - Royal institute of technology.
      </p>
      <p className="text-style">
        I have a strong passion for the front-end. I've mainly worked with
        JavaScript/TypeScript and React with different state handling (Redux,
        Context, etc.). I have also acquired proficient knowledge within cloud
        technologies through his previous employments and worked with many
        companies of different shapes and sizes. You can get in touch with me{" "}
        <a className="mailto" href="mailto:carl.leandersson99@gmail.com">
          here
        </a>
      </p>
    </center>
  );
};

export default Profile;
