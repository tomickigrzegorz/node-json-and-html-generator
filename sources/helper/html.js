const { writeFile } = require('fs');
const path = require('path');

const pug = require('pug');

const htmlFile = (options) => {
  const {
    nameFolder,
    seoTitle,
    seoDescription,
    bodyTitle,
    bodyDate,
    bodyText,
    images,
  } = options;

  const html = pug.renderFile(path.join(__dirname, '../views/html/index.pug'), {
    nameFolder,
    seoTitle: JSON.parse(seoTitle),
    seoDescription: JSON.parse(seoDescription),
    bodyTitle: JSON.parse(bodyTitle),
    bodyDate: JSON.parse(bodyDate),
    bodyText: JSON.parse(bodyText),
    images: images.map((image) => JSON.parse(image)),
  });

  writeFile(`./html/${nameFolder}.html`, html, (err) => {
    if (err) return console.log(err);
    return console.log('json has been saved');
  });
};

module.exports = htmlFile;
