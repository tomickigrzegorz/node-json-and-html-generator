const {
  statSync, existsSync, readdirSync, readFileSync, mkdirSync,
} = require('fs');

const getAllFiles = (dir) => readdirSync(dir).reduce((files, file) => {
  const name = `${dir}${file}`;
  const isDirectory = statSync(name).isDirectory();
  return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
}, []);

const getAllDirectory = (dir) => readdirSync(dir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const getAllJson = (dir, extension) => readdirSync(dir)
  .filter((file) => file.match(new RegExp(`.*\\.(${extension})`, 'ig')))
  .map((map) => map.replace(`.${extension}`, ''));

const readJson = (dir) => {
  const fileContents = readFileSync(dir, 'utf8');
  const images = JSON.parse(fileContents);
  return images.body.items.map((image) => `${image.path}${image.img}`);
};

const checkFolders = (dir) => {
  try {
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
  } catch (err) {
    console.error(err);
  }
};


module.exports = {
  checkFolders, getAllFiles, getAllDirectory, getAllJson, readJson,
};
