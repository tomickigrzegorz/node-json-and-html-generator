## JSON GENERATOR

This is a simple CMS application to generate json. This Json is used to generate static html files in another project, exactly including this one [photoBlog](https://github.com/tomik23/photoBlog)

> The problem that was solved, I had a script that generated an empty `Json` with only added photos, and the rest I had to enter manually. It was not easy because everything had to be inserted and formatted manually.

Of course, nothing prevents you from generating final HTML files instead of JSON files.

## Initialization

Before the first use, clone this repository and install node dependencies: `yarn` or `npm install`

## Basic configuration

The application needs two folders:
* data
* images

The `date` folder for saving json files  
The `images` folder consists of `gallery-name/1200`, where 1200 is [breakpoints](https://github.com/tomik23/photoBlog/tree/master/sources/images/jeden-dzien-w-berlinie)

## Run the app

Run the app, just call: `yarn start` or `npm run start`

Open the address `http://localhost:3000`. A list of available folders should appear on this page.

## TODO

* ~~first adding a page with a list of available folders with photos to choose from~~
* ~~the possibility to update the generated json~~
* ~~adding grids to better sort~~
* ~~the ability to move photos (drag-and-drop), the problem occurs when the images are from different cameras, or the file names are mixed up~~
* small wysiwyg html editor
* validation of the form
* ...

## Other information

Most important part of it's technology stack:

* [express.js](https://expressjs.com/)
* [express-es6-template-engine](https://www.npmjs.com/package/express-es6-template-engine)
* [semantic-ui](https://semantic-ui.com/)
* [flatpickr](https://github.com/flatpickr/flatpickr)
* [zooom.js](https://github.com/tomik23/zooom.js)

### main page
![Screenshot1](https://github.com/tomik23/json-generator/blob/master/screenshot/page.png)

### calendar
![Screenshot2](https://github.com/tomik23/json-generator/blob/master/screenshot/calendar.png)

### grid-off
![Screenshot2](https://github.com/tomik23/json-generator/blob/master/screenshot/grid-off.png)

### grid-on 
![Screenshot2](https://github.com/tomik23/json-generator/blob/master/screenshot/grid-on.png)