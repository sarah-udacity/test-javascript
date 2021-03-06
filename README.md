# Object Oriented Javascript 

## Instructor Instructions

### Big Picture

This project aims to give the student real-world scenarios of working with object-oriented javascript. The functionality being used serves two purposes: to improve the experience building objects with javascript as well as taking advantage of user interaction with the DOM. This project is a stepping stone in their journey which takes advantage of many of the topics learned in this course.

For the project, the student will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. Each title will contain the species, an image, and a fact. For the human tile, the student will display the name of the human rather than species and no fact. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”

### Getting Started

If the project is downloaded, simply open the index.html file in any browser to see/test the UI. If viewing on github, you can view the project online by accessing the index page at: https://github.com/path/to/project/index.html Then copy that URL into https://htmlpreview.github.io/ 
This method only works for public repositories. 

### Project Requirements

To complete this project, the UI must show the following:

- [ ] The form should contain a button which upon clicking, removes the form
- [ ] The button should append a grid with 9 tiles to the DOM with the Human located in the center
- [ ] The Human tile should display the name of the person and an image, the dino tiles should contain the species, an image and a fact, the bird title should contain the species, image, and "All birds are Dinosaurs."


To complete this project, the backend code must:

- [ ] Contain a class and all necessary objects
- [ ] Contain at least 3 methods for comparing dinosaurs to the human
- [ ] Get user data from the DOM
- [ ] Append tiles with object data to DOM

### Above and Beyond

There's no extra credit in this course, but it's possible the student may have completed some of the following that may cause the project to differ from the demo. 

Some ideas might be to validate the form data to ensure the data is acceptable and complete. Allow the user to generate a new infographic. Move the tile colors from CSS to JS for more control. Randomize the order of the tiles while keeping the human in the middle. Create a hover state on the tiles that displays the rest of the species statistics. Create additional methods for comparing data. Rewrite the project to use constructor functions, factory functions, the module pattern, and revealing module pattern. Change out data and images to generate an infographic of your own choosing. Allow the user to select different units for the numbers and update your methods to account for this. Make changes to the CSS, and HTML to make the project your own. 