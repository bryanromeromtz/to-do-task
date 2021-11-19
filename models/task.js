const { v4: uuidv4 } = require('uuid');

class Task {
  _id = '';
  desc = '';
  completedIn = null;

  constructor(desc) {
    this._id = uuidv4();
    this.desc = desc;
    this.completedIn = null;
  }
}


module.exports = Task;
