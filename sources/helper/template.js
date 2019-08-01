const fs = require('fs');

// dane to jsona
// const now = new Date();
// const date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
const datePublished = new Date().toISOString().slice(0, 10);
const dateModified = datePublished;
const author = 'Grzegorz Tomicki';

const template = (options) => {
  const {
    nameFolder,
    seoTitle,
    seoDescription,
    bodyTitle,
    bodyDate,
    bodyText,
    images
  } = options;

  const template = `{
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

  fs.writeFile(`./data/${nameFolder}.json`, template, (err) => {
    if(err) return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
   });

}

module.exports = template;