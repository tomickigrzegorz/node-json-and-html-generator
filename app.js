const { existsSync, statSync } = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

const port = 3000;

// compression static files
app.use(compression());

// function
const {
  getAllFiles, getAllDirectory, getAllJson, readJson,
} = require('./sources/helper/images');

const fileTemplate = require('./sources/helper/template');
// const fileHtml = require('./sources/helper/html');

// time for caching - maxAge
const oneHour = 60 * 1000 * 60;

const locals = {
  title: 'error',
  header: 'UPS !!! error occurred. The reason may be the wrong address.',
  info: 'The address should contain the name of the folder with photos.',
  address: `http://localhost:${port}/<b>name/folder-name</b>`,
};

// load View Engine
app.set('views', path.join(__dirname, 'sources/views'));
app.set('view engine', 'pug');

// form
app.use(bodyParser.urlencoded({ extended: false }));

// path to css, images, favico
app.use('/vendor', express.static(path.join(__dirname, 'sources/vendor')));
app.use('/images', express.static(path.join(__dirname, 'images'), { maxAge: oneHour }));

// json data
app.use('/update', express.static(path.join(__dirname, 'data')));

// favicon
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));

// get post z formularza
app.post('/', (req, res) => {
  const {
    folderName,
    seoTitle,
    seoDescription,
    bodyTitle,
    bodyDate,
    bodyText,
    imageName,
    imageAlt,
    imageText,
  } = req.body;

  const imagePath = imageName.map((image, index) => `
    {
      "path": "images/${folderName}/",
      "img": "${image}",
      "alt": "${imageAlt[index]}",
      "text": ${JSON.stringify(imageText[index])} 
    }`);

  const config = {
    nameFolder: folderName,
    seoTitle: JSON.stringify(seoTitle),
    seoDescription: JSON.stringify(seoDescription),
    bodyTitle: JSON.stringify(bodyTitle),
    bodyDate: JSON.stringify(bodyDate),
    bodyText: JSON.stringify(bodyText),
    images: imagePath,
  };

  // save html files
  // fileHtml(config);

  // save json filess
  fileTemplate(config);

  res.redirect('./success');
});

const keys = getAllDirectory('./images/');
const values = getAllJson('./data/', 'json');

const merged = keys.reduce((obj, key) => ({ ...obj, [key]: values.includes(key) }), {});

// showing all directory
app.get('/', (req, res) => {
  res.render('directory', {
    siteType: 'home',
    port,
    title: 'All directory',
    folders: Object.entries(merged),
  });
});

// get
app.get('/name/:imageFolder', (req, res) => {
  const { imageFolder } = req.params;

  const options = {
    imageFolder,
    size: 1200,
  };

  if (!existsSync(`./images/${options.imageFolder}`)) {
    res.render('404', {
      siteType: '404',
      port,
      title: locals.title,
      header: locals.header,
      info: locals.info,
      address: locals.address,
    });
    return;
  }

  const allImages = getAllFiles(`./images/${options.imageFolder}/${options.size}/`);

  res.render('template', {
    siteType: 'new',
    port,
    title: imageFolder,
    count: allImages.length,
    images: allImages,
  });
});

// update
app.get('/update/:imageFolder', (req, res) => {
  const { imageFolder } = req.params;
  const options = {
    imageFolder,
    size: 1200,
  };

  if (!existsSync(`./data/${imageFolder}.json`)) {
    res.render('404', {
      siteType: '404',
      port,
      title: locals.title,
      header: locals.header,
      info: locals.info,
      address: locals.address,
    });
    return;
  }

  const allImages = getAllFiles(`./images/${options.imageFolder}/${options.size}/`);

  const readimg = readJson(`./data/${options.imageFolder}.json`);

  const optionsDate = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  let dateCreateJsonFile = statSync(`./data/${imageFolder}.json`).atime;
  dateCreateJsonFile = (new Date(dateCreateJsonFile).toLocaleString('pl', optionsDate));

  res.render('template', {
    siteType: 'update',
    port,
    title: imageFolder,
    data: dateCreateJsonFile,
    count: allImages.length,
    images: readimg,
    // features: readimg,
  });
});

// success
app.get('/success', (req, res) => {
  res.render('success', {
    siteType: 'success',
    port,
    title: 'success',
    text: 'JSON has been saved to the data folder',
  });
});

// 404 redirect
app.use((req, res) => {
  res.status(404)
    .render('404', {
      siteType: '404',
      port,
      title: locals.title,
      header: locals.header,
      info: locals.info,
      address: locals.address,
    });
});

// 500 error
app.use((err, req, res) => {
  res.type('text/plain')
    .status(500)
    .send('500 Server Error');
});

// listen http://localhost:3000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is runing at port: http://localhost:3000');
});
