import fs from 'fs';

const copyFolder = (templateFolderDir, projectFolderDir) => {
  /* Reading template folder content */
  const items = fs.readdirSync(templateFolderDir);

  /* For content template folder */
  items.forEach(item => {
    const sourcePath = `${templateFolderDir}/${item}`
    const targetPath = `${projectFolderDir}/${item}`

    if (fs.lstatSync(sourcePath).isDirectory()) {
      /* if folder copy with content */
      fs.mkdirSync(targetPath);
      copyFolder(sourcePath, targetPath);
    } else {
      /* if file copy */
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

export default copyFolder;