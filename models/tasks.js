const Task = require('./task');

class Tasks {
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

  deleteTask(id = "") {
    if (this._listed[id]) {
      delete this._listed[id];
    }
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

  fullList() {
    console.log();

    this.listedArr.forEach((task, i) => {
      const idx = `${i + 1}.`.green;
      const { desc, completedIn } = task
      const state = (completedIn) ? "Completed".green : "Pending Task".red;
      console.log(`${idx} ${desc} :: ${state}`);
    })
  }

  listCompletedPending(completed = true) {
    console.log();
    let idx = 0;
    this.listedArr.forEach(task => {
      const { desc, completedIn } = task
      const state = (completedIn) ? "Completed".green : "Pending Task".red;
      if (completed) {
        if (completedIn) {
          idx += 1;
          console.log(`${(idx + `.`).green} ${desc} :: ${completedIn.green}`);
        }
      }
      else {
        if (!completedIn) {
          idx += 1;
          console.log(`${(idx + `.`).green} ${desc} :: ${state}`);
        }
      }
    })
  }

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const task = this._listed[id];
      if (!task.completedIn) {
        task.completedIn = new Date().toISOString()
      }
    });
    this.listedArr.forEach(task => {
      if (!ids.includes(task._id)) {
        this._listed[task._id].completedIn = null;
      }
    })
  }

}

module.exports = Tasks;