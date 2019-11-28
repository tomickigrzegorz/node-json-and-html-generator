# Change Log
All notable changes to this project will be documented in this file.

## 2019-11-28
### Changed
- Style repair with enlarged contenteditable field.

## 2019-11-19
### Changed
- Separator in contenteditable div
- Change authorarticle to author so that the variable from .env can be read correctly

## 2019-11-18
### Added
- Adding the author field, default setting in the `.env AUTHOR=your name` configuration file

### Changed
- The publication date is no longer overwritten with the update date
- Change the line-height of the main text field when this field is enlarged to fill the entire screen

## 2019-11-12
### Change
- Photo path repair when creating new json - "NEW"

### Added
- WYSIWYG text editor
- Expanding WYSIWYG capabilities by clearing formatting and enlarging the main text field.

## 2019-11-08
### Changed
- Save html files, dependent on .env (HTML_GENERATOR=true/false) and checkbox (HTML SAVE)

## 2019-10-18
### Added
- Installation dotenv
- Create configuration files .env, config.js
- Function checking and creating main html/data folders
- Ability to generate html files

### Changed 
- Update `screenshot`
- Update README.md
- Remove html branche

## 2019-10-02
### Changed
- Delete unnecessary folder in photos
- Update devDependencies

## 2019-08-10
### Added
- PUG template

### Changed
- server.js -> app.js
- Return to vivid colors

### Removed
- HTML template
- express-es6-template-engine library

## 2019-08-07
### Added
- New sorting library - sortablejs and zoomjs. The possibility of enlarging and changing the position of photos.
- Displaying photos in the grid for better UX when sorting
- Button smooth-scroll to top of page
- Date of last modification of the json file under the title

### Changed
- Adding 'min' to zooom.js and zooom.css

### Removed
- Draggable.js library incompatible with zoom.js

## 2019-08-05
### Added 
- Responsive section "LIST OF PHOTOS"
- Caching vendor - css, js
- Drag-and-drop in the photos section

### Removed
- Conflict between zoom.js and drag-and-drop, zoom has been removed

## 2019-08-03
### Added
- Possibility to modify the already generated json file
- Support for 400 and 500 server status
- Picture caching - 1h

### Changed
- Change the appearance of the main page

## 2019-08-01
### Added
- First adding a page with a list of available folders with photos to choose from
- Preparation of the form with the possibility of adding seo elements as well as page content
- Calendar to the field with the date
- Zoom.js library with the possibility of enlarging photos
- Favicon support
- Semantic.min.css styles
- Form construction