const Task = require('./task');

class Tareas {
  _listed = {};

  get listedArr() {
    const listed = [];
    Object.keys(this._listed).forEach(list => {
      const task = this._listed[list];
      listed.push(task);
    });
    return listed;
  }

  constructor() {
    this._listed = {};
  }

  loadTasksFromArray(tasks) {
    tasks.forEach((task) => {
      return this._listed[task._id] = task;
    })
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._listed[task._id] = task;
  }
}

module.exports = Tareas;