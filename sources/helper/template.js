const { writeFile } = require('fs');

const datePublished = new Date().toISOString().slice(0, 10);
const dateModified = datePublished;
const author = 'XXXXXXXXX';

const template = (options) => {
  const {
    nameFolder,
    seoTitle,
    seoDescription,
    bodyTitle,
    bodyDate,
    bodyText,
    images,
  } = options;

  const templateJson = `{
  "head": {
    "title": ${seoTitle},
    "description": ${seoDescription}
  },
  "body": {
    "title": ${bodyTitle},
    "date": ${bodyDate},
    "text": ${bodyText},
    "items": [${images}
    ]
  },
  "schema": {
    "datePublished": "${datePublished}",
    "dateModified": "${dateModified}",
    "author": "${author}"
  }
}
  `;

  writeFile(`./data/${nameFolder}.json`, templateJson, (err) => {
    if (err) return console.log(err);
    return console.log('json has been saved');
  });
};

module.exports = template;
