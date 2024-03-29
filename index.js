import select, { Separator } from '@inquirer/select';
import newProject from './Routes/newProject/newProject.js';

/* Select the first option */
const selectValue = await select({

  /* Select message */
  message: 'What do you want to do',
  choices: [

    /* Create a new proyect */
    {
      name: 'Create a new project',
      value: 'newProject',
      description: 'Init a new project template',
    },

    /* Add model, controller or route */
    {
      name: 'Add model, controller or route',
      value: 'addMCR',
      description: 'Add Model, controller or route in yout project',
    },

    new Separator(),
  ],
});

/* Redirect to the select option function */
switch (selectValue) {

  case "newProject":
    /* ./Routes/newProyect/newProyect.js */
     newProject()
    break;

  case "addMCR":
    console.log("Creating MCR");
    break;
}