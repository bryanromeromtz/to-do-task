const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Create task`
      },
      {
        value: '2',
        name: `${'2.'.green} List Tasks`
      },
      {
        value: '3',
        name: `${'3.'.green} List Completed Tasks`
      },
      {
        value: '4',
        name: `${'4.'.green} List Pending Tasks`
      },
      {
        value: '5',
        name: `${'5.'.green} Complete Task(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Delete Task`
      },
      {
        value: '0',
        name: `${'0.'.green} Get Out`
      },

    ]
  }
]




const inquirerMenu = async () => {
  console.clear();
  console.log('======================'.green);
  console.log('   Select an option   '.green);
  console.log('======================\n'.green);
  const { option } = await inquirer
    .prompt(questions);
  return option;
}

const inquirerPause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'ENTER'.bgWhite.black} to continue`,
    }
  ]
  console.log('\n');
  await inquirer.prompt(question);
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return `please insert a value`.red;
        }
        return true;
      }
    }
  ]
  console.log('\n');
  const { desc } = await inquirer.prompt(question);
  return desc;
}

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput
}