import fs from 'fs';
import { input } from '@inquirer/prompts';


const initExpressProyect = async () => {

  /* put proyect name */
  let proyectName = await input({ 
    message: "Enter your proyect name",
    default: "myProyect"
   });

  /* Delete spaces in proyectName */
  proyectName = proyectName.replace(/\s+/g, '');
  
  /* Take console actual dir */
  const consolePath = process.cwd()

  /* Build dir of the express template folder */
  const templateFolderDir = consolePath + "/Routes/newProyect/expressProyect/template"
  
  /* Create proyect folder dir */
  const proyectFolderDir = `${consolePath}/${proyectName}`

  /* Verify if dir already exist */
  if (fs.existsSync(proyectFolderDir)) {
    console.log(`Error folder "${proyectName}" already exists`);
  } else {
    /* Create proyect folder */
    fs.mkdirSync(proyectName);
  }

}

export default initExpressProyect;