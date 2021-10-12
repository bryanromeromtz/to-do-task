const Task = require('./task');

class Tareas {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task._id] = task;
  }
}

module.exports = Tareas;