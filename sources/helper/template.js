const { writeFile } = require('fs');

const dateModified = new Date().toISOString().slice(0, 10);

const template = (options) => {
  const {
    nameFolder,
    seoTitle,
    seoDescription,
    bodyTitle,
    bodyDate,
    bodyText,
    bodyAuthor,
    images,
  } = options;

  const date = bodyDate.replace(/"/g, '').split('.');
  const datePublished = `${date[2]}-${date[1]}-${date[0]}`;

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
    "author": ${bodyAuthor}
  }
}
  `;

  writeFile(`./data/${nameFolder}.json`, templateJson, (err) => {
    if (err) return console.log(err);
    return console.log('json has been saved');
  });
};

module.exports = template;
