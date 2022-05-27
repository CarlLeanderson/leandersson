import React from "react";
import "../style/header.css";
import projectsData from "../data/projects-data";

let categories = [];
projectsData.forEach((proj) => {
  if (!categories.includes(proj.category)) {
    categories.push(proj.category);
  }
});

const Header = (props) => {
  const filterHandler = () => {
    this.props.setFilter(document.getElementById("categories").value);
  };
  return (
    <div className="header">
      <div className="title-container">
        <h1 className="title" href="index.html">
          <a href="#" onClick={() => props.setProfile(true)} className="link">
            Carl Leandersson
          </a>
          <br />
          <a href="#" onClick={() => props.setProfile(false)} className="link">
            Projects
          </a>
        </h1>
      </div>
      {!props.profile ? (
        <div className="filter-class">
          <select
            onChange={filterHandler}
            className="filter-drop"
            name="Categories"
            id="categories"
          >
            <option value="All">All</option>
            {categories.map((x, index) => {
              return (
                <option key={index} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
