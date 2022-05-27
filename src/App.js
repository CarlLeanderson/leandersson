import "./App.css";
import Header from "./views/header";
import Model from "./data/model";
import React, { Suspense, useState } from "react";
const ProjectController = React.lazy(() =>
  import("./controllers/ProjectController")
);
let model = new Model();

function App() {
  const [profile, setProfile] = useState(true);

  const _setProfile = (x) => {
    setProfile(x);
  };
  return (
    <div className="App">
      <Header
        data={model}
        setFilter={(x) => model.setFilter(x)}
        setProfile={(x) => _setProfile(x)}
        profile={profile}
      />

      <div className="main-container">
        <Suspense
          fallback={
            <center>
              <h1>Loading...</h1>
            </center>
          }
        >
          <ProjectController data={model} profile={profile} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
