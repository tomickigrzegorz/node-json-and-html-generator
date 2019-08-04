const { statSync, readdirSync } = require('fs');

const getAllFiles = dir => readdirSync(dir).reduce((files, file) => {
  const name = `${dir}${file}`;
  const isDirectory = statSync(name).isDirectory();
  return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
}, []);

const getAllDirectory = dir => readdirSync(dir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);


const getAllJson = (dir, extension) => readdirSync(dir)
  .filter(file => file.match(new RegExp(`.*\\.(${extension})`, 'ig')));

module.exports = { getAllFiles, getAllDirectory, getAllJson };
