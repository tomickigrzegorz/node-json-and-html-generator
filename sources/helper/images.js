const fs = require('fs');

const getAllFiles = dir => fs.readdirSync(dir).reduce((files, file) => {
  const name = `${dir}${file}`;
  const isDirectory = fs.statSync(name).isDirectory();
  return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
}, []);

const getAllDirectory = dir => fs.readdirSync(dir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = { getAllFiles, getAllDirectory };
