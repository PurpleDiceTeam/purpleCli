import fs from 'fs';
import { input } from '@inquirer/prompts';
import copyFolder from '../utils/copyFolder.js'

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
    console.error(`Error folder "${proyectName}" already exists`);
    process.exit(0);
  } else {
    /* Create proyect folder */
    fs.mkdirSync(proyectName);
  }
  
  copyFolder(templateFolderDir, proyectFolderDir)
  
}

export default initExpressProyect;