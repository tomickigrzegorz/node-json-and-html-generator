## JSON AND HTML GENERATOR

This is a simple CMS application to generate json and html. This Json is used to generate static html files in another project, exactly including this one [photoBlog](https://github.com/tomik23/photoBlog)

> The problem that was solved, I had a script that generated an empty `Json` with only added photos, and the rest I had to enter manually. It was not easy because everything had to be inserted and formatted manually.

It is now possible to save html files after clicking the `"NEW"` and `"UPDATE"` buttons. Of course, html are very primitive, but you can build on your own just modify ```sources > views> html> * .pug```

A `.env` file has been added in root with which we can control the port at which the page will be displayed to us and whether the checkbox (HTML SAVE) will be selected by default in the cms preview - `HTML_GENERATOR=true`

## Initialization

Before the first use, clone this repository and install node dependencies: `yarn` or `npm install`

## Basic configuration

The application needs folders `images`, 
This folder should contain folders with individual photos. See the `images` folder in this repository. 

> Note the folder name is the name of the `html` and `json` file that will be generated. The name should not contain special characters or spaces. A valid example of `one-day-in-berlin`.

## Run the app

Run the app, just call: `yarn start` or `npm run start`

Open the address `http://localhost:3000`. A list of available folders should appear on this page.

## TODO

- [x] first adding a page with a list of available folders with photos to choose from
- [x] the possibility to update the generated json
- [x] adding grids to better sort
- [x] the ability to move photos (drag-and-drop), the problem occurs when the images are from different cameras, or the file names are mixed up
- [x] html generator
- [ ] small wysiwyg html editor
- [ ] validation of the form
- [ ] ...

## Other information

Most important part of it's technology stack:

* [express.js](https://expressjs.com/)
* [pug](https://github.com/pugjs/pug)
* [semantic-ui](https://semantic-ui.com/)
* [flatpickr](https://github.com/flatpickr/flatpickr)
* [zooom.js](https://github.com/tomik23/zooom.js)
* [SortableJS](https://github.com/SortableJS/Sortable)

---
### MAIN PAGE

![Screenshot1](https://github.com/tomik23/json-generator/blob/master/screenshot/page.png)

---
### OPEN THE GENERATED HTML FILE

![Screenshot2](https://github.com/tomik23/json-generator/blob/master/screenshot/page-html.png)

---
### CALENDAR

![Screenshot3](https://github.com/tomik23/json-generator/blob/master/screenshot/calendar.png)

---
### GRID-OFF

![Screenshot4](https://github.com/tomik23/json-generator/blob/master/screenshot/grid-off.png)

---
### GRID-ON

![Screenshot5](https://github.com/tomik23/json-generator/blob/master/screenshot/grid-on.png)