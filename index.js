import select, { Separator } from '@inquirer/select';
import newProyect from './Routes/newProyect/newProyect.js';

/* Select the first option */
const selectValue = await select({

  /* Select message */
  message: 'What do you want to do',
  choices: [

    /* Create a new proyect */
    {
      name: 'Create a new proyect',
      value: 'newProyect',
      description: 'Init a new project template',
    },

    /* Add model, controller or route */
    {
      name: 'Add model, controller or route',
      value: 'addMCR',
      description: 'Add Model, controller or route in yout proyect',
    },

    new Separator(),
  ],
});

/* Redirect to the select option function */
switch (selectValue) {

  case "newProyect":
    /* ./Routes/newProyect/newProyect.js */
     newProyect()
    break;

  case "addMCR":
    console.log("Creating MCR");
    break;
}