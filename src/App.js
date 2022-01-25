import "./App.css";
import Header from "./views/header";
import ProjectController from "./controllers/ProjectController";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main-container">
        <ProjectController />
      </div>
    </div>
  );
}

export default App;
