const fs = require('fs');
const path = require('path');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')
const app = express();

// function
const getAllFiles = require('./sources/helper/images');
const template = require('./sources/helper/template');

const locals = {
  title: 'error',
  header: 'UPS !!! error occurred. The reason may be the wrong address.',
  info: 'The address should contain the name of the folder with photos.',
  address: 'http://localhost:3000/<b>name/folder-name</b>'
}

// template engine
app.engine('html', es6Renderer);
app.set('views', 'sources/views');
app.set('view engine', 'html');

// form
app.use(bodyParser.urlencoded({ extended: false }));

// path to css, images, favico
app.use('/name/images', express.static(path.join(__dirname, 'images')));
app.use('/name/vendor', express.static(path.join(__dirname, 'sources/vendor')));
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));

// get
app.get('/name/:imageFolder', (req, res) => {

  const imageFolder = req.params.imageFolder;
  // const imageFolder = req.query.name;
  const send = req.query.send;

  const index = path.join(__dirname, '/sources/views/images.html');
  const options = {
    imageFolder: imageFolder,
    size: 1200
  }

  if(!fs.existsSync(`./images/${options.imageFolder}`)) {
    res.render('404', {
      locals: locals
    });
    return;
  };

  res.render('index', {
    locals: {
      title: imageFolder,
      send: send !== undefined ? 'Json został zapisany' : '',
      features: getAllFiles(`./images/${options.imageFolder}/${options.size}/`)
    },
    partials: {
      partial: index,
    }
  });

  // get post z formularza
  app.post('/', (req, res) => {
    const postBody = req.body;
    const nameFolder = postBody.folderName;
    const imageAlt = postBody.imageAlt;
    const imageText = postBody.imageText;

    const imagePath = postBody.imageName.map((image, index) => {
      return `
      {
        "path": "./images/${nameFolder}/",
        "img": "${image}",
        "alt": "${imageAlt[index]}",
        "text": ${JSON.stringify(imageText[index])} 
      }`;
    });

    const options = {
      nameFolder: nameFolder,
      seoTitle: JSON.stringify(postBody.seoTitle),
      seoDescription: JSON.stringify(postBody.seoDescription),
      bodyTitle: JSON.stringify(postBody.bodyTitle),
      bodyDate: JSON.stringify(postBody.bodyDate),
      bodyText: JSON.stringify(postBody.bodyText),
      images: imagePath
    }

    // save json files
    template(options);

    res.redirect('./success');
  });

});

app.get('/success', (req, res) => {
  res.render('success', {
    locals: {
      title: 'success',
      test: 'JSON został zapisany do folderu data'
    }
  });
});

// 404 redirect
app.get('*', (req, res) => {
  res.status(404).render('404', {
    locals: locals
  });
});

// listen http://localhost:3000
app.listen(3000, function () {
  console.log('info', 'Server is runing at port: 3000');
});