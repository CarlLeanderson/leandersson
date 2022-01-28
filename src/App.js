import "./App.css";
import Header from "./views/header";
import Model from "./data/model";
import React, { Suspense } from "react";
const ProjectController = React.lazy(() =>
  import("./controllers/ProjectController")
);
let model = new Model();

function App() {
  return (
    <div className="App">
      <Header data={model} setFilter={(x) => model.setFilter(x)} />

      <div className="main-container">
        <Suspense
          fallback={
            <center>
              <h1>Loading...</h1>
            </center>
          }
        >
          <ProjectController data={model} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
