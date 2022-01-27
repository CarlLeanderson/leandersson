import React from "react";
import "../style/header.css";
import projectsData from "../data/projects-data";

let categories = [];
projectsData.forEach((proj) => {
  if (!categories.includes(proj.category)) {
    categories.push(proj.category);
  }
});

class Header extends React.Component {
  render(props) {
    const filterHandler = () => {
      this.props.setFilter(document.getElementById("categories").value);
    };
    return (
      <nav className="navbar">
        <h1 className="title" href="index.html">
          Carl Leandersson
          <br />
          Projects
        </h1>

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
      </nav>
    );
  }
}

export default Header;
