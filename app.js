require('colors');

const {
  inquirerMenu,
  inquirerPause,
  readInput
} = require('./helpers/inquirer');

const Tasks = require('./models/tasks');


const main = async () => {

  let opt = '';
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        desc = await readInput('Description:');
        console.log(desc.green);
        tasks.createTask(desc);
        break;
      case '2':
        console.log(tasks.listedArr);
        break;

    }


    await inquirerPause();
  } while (opt !== '0');
}


main();