import select, { Separator } from '@inquirer/select';

const newProyect = async (consoleRoute) => {

  /* Select the frameWork */
const selectValue = await select({

  /* Select message */
  message: 'What frameWork do you want to use',
  choices: [

    /* Create a express proyect */
    {
      name: 'express.js',
      value: 'express',
      description: 'Init a express.js template',
    },

    new Separator(),
  ],
});

/* Redirect to the select option function */
switch (selectValue) {

  case "express":
    /* ./Routes/newProyect/newProyect.js */
     console.log(consoleRoute)
    break;
}

}

export default newProyect;