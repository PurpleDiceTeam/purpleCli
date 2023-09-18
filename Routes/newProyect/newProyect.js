import select, { Separator } from '@inquirer/select';
import initExpressProyect from './expressProyect/expressProyect.js'

const newProyect = async () => {

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
     initExpressProyect()
    break;
}

}

export default newProyect;