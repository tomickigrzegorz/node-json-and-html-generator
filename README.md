## JSON GENERATOR :wrench:

This is a simple application to generate json. This Json is used to generate static html files in another project, exactly including this one [photoBlog](https://github.com/tomik23/photoBlog)

> Problem that occurred, I had a script in the node that generated an empty json only with added photos and the rest I had to enter manually. Which was not easy due to the fact that everything had to be inserted and formatted.

### Initialization

Before the first use, clone this repository and install node dependencies: `yarn` or `npm install`

### Basic configuration

The application needs two folders:
* data
* images

The `date` folder for saving json files  
The `images` folder consists of `gallery-name/1200`, where 1200 is [breakpoints](https://github.com/tomik23/photoBlog/tree/master/sources/images/jeden-dzien-w-berlinie)

### Run the app

Run the app, just call: `yarn start` or `npm run start`

Open the address `http://localhost:3000/name/lwow` the last part of the address is the name of your photo folder.

### TODO

* first adding a page with a list of available folders with photos to choose from
* validation of the form
* the ability to move photos (drag-and-drop), the problem occurs when the images are from different cameras, or the file names are mixed up
* ...

### Other information

Most important part of it's technology stack:

* [express.js](https://expressjs.com/)
* [express-es6-template-engine](https://www.npmjs.com/package/express-es6-template-engine)
* [semantic-ui](https://semantic-ui.com/)
* [flatpickr](https://github.com/flatpickr/flatpickr)
* [zooom.js](https://github.com/tomik23/zooom.js)