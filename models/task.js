const { v4: uuidv4 } = require('uuid');

class Task {
  _id = '';
  desc = '';
  CompletedIn = null;

  constructor(desc) {
    this._id = uuidv4();
    this.desc = desc;
    this.CompletedIn = null;
  }

}


module.exports = Task;
