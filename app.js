const colors = require('colors');

const {
  inquirerMenu,
  inquirerPause,
  readInput,
  listTasksToDelete,
  confirm,
  showChecklist
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/interactionDB');

const Tasks = require('./models/tasks');

const main = async () => {

  let opt = '';
  const tasks = new Tasks();
  const tasksDB = readDB();
  if (tasksDB) {
    tasks.loadTasksFromArray(tasksDB);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        // Create Task
        desc = await readInput('Description:');
        console.log(desc.green);
        tasks.createTask(desc);
        break;
      case '2':
        // List Tasks
        tasks.fullList();
        break;
      case '3':
        // List Completed Tasks
        tasks.listCompletedPending(true);
        break;
      case '4':
        // List Pending Tasks
        tasks.listCompletedPending(false);
        break;
      case '5':
        // Complete task(s)
        const ids = await showChecklist(tasks.listedArr);
        tasks.toggleCompleted(ids);
        break;
      case '6':
        // Delete Task
        const id = await listTasksToDelete(tasks.listedArr);
        if (id !== '0') {
          confirmToDelite = await confirm('Are you sure you want to delete the task?')
          if (confirmToDelite) {
            tasks.deleteTask(id);
          }
          console.log({ confirmToDelite });
          console.log(colors.blue("Task Deleted"));
        }
        break;
    }

    saveDB(tasks.listedArr);

    await inquirerPause();
  } while (opt !== '0');
}


main();