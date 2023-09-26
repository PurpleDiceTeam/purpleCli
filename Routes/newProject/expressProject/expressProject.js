import fs from 'fs';
import { input } from '@inquirer/prompts';
import copyFolder from '../utils/copyFolder.js'

const initExpressProject = async () => {

  /* put proyect name */
  let projectName = await input({ 
    message: "Enter your project name",
    default: "myProject"
   });

  /* Delete spaces in proyectName */
  projectName = projectName.replace(/\s+/g, '');
  
  /* Take console actual dir */
  const consolePath = process.cwd()

  /* Build dir of the express template folder */
  const templateFolderDir = consolePath + "/Routes/newProject/expressProject/template"
  
  /* Create proyect folder dir */
  const projectFolderDir = `${consolePath}/${projectName}`

  /* Verify if dir already exist */
  if (fs.existsSync(projectFolderDir)) {
    console.error(`Error folder "${projectName}" already exists`);
    process.exit(0);
  } else {
    /* Create proyect folder */
    fs.mkdirSync(projectName);
  }
  
  copyFolder(templateFolderDir, projectFolderDir)
  
}

export default initExpressProject;