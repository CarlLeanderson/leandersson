import projectsData from "../data/projects-data";

class Model {
  constructor() {
    this.projects = projectsData;
    this.filter = "All";
    this.observers = [];
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }
  removeObserver(callback) {
    this.observers = this.observers.filter((obs) => obs !== callback);
  }
  notifyObservers() {
    this.observers.forEach((cb) => {
      try {
        return cb();
      } catch (cb) {
        return console.error(cb);
      }
    });
  }
  setFilter(filter) {
    this.filter = filter;
    this.notifyObservers();
  }
}
export default Model;
