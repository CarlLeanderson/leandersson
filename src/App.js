import "./App.css";
import Header from "./views/header";
import Model from "./data/model";
import ProjectController from "./controllers/ProjectController";

let model = new Model();

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header data={model} setFilter={(x) => model.setFilter(x)} />
      </div>
      <div className="main-container">
        <ProjectController data={model} />
      </div>
    </div>
  );
}

export default App;
