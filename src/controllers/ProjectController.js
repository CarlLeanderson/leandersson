import React, { useState, useEffect, Suspense } from "react";
import "../App.css";

const Project = React.lazy(() => import("../views/project"));

const ProjectController = (props) => {
  const [filterState, setFilterState] = useState(props.data.filter);

  useEffect(function () {
    function obs() {
      setFilterState(props.data.filter);
    }
    props.data.addObserver(obs);
    return function () {
      props.data.removeObserver(obs);
    };
  });

  let projects = [...props.data.projects];

  if (filterState !== "All") {
    projects = props.data.projects.filter((x) => {
      return x.category === filterState;
    });
  }

  return projects.map((x) => (
    <Suspense key={x.id} fallback={<></>}>
      <Project data={x} />
    </Suspense>
  ));
};

export default ProjectController;
