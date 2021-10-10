const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      'opt1',
      'opt2',
      'opt3',
      'opt4',
    ]
  }
]
const inquirerMenu = async () => {
  console.clear();
  console.log('======================'.green);
  console.log('   Select an option   '.green);
  console.log('======================\n'.green);
  const option = await inquirer
    .prompt(questions);
  return option;
}

module.exports = {
  inquirerMenu
}