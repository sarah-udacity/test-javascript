/**
 * Example of minimum passing project
 * Document created based on information given in object-oriented javascript
 * Document uses airbnb linting, follows udacity js standards
*/

const prepareInfographic = () => {
    
    /**
    * Create Dino Constructor
    * @description Represents a Dinosaur
    * @constructor
    * @param {string} species - Species of the animal
    * @param {number} weight - Weight in lbs
    * @param {number} height - Height in inches
    * @param {string} diet - Diet options: herbavor, carnivor, omnivor
    * @param {string} where - What continent the species can be found on
    * @param {string} when - What epoch the species existed
    * @param {string} fact - Random fact about species
    */

    function Dino(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = "images/" + this.species + ".png";
    }

    // Create Dino Objects
    let triceratops = new Dino('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh.');
    let tyrannosaurus = new Dino('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');
    let anklyosaurus = new Dino('Anklyosaurus', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', 'The Anklyosaurus survived for approximately 135 million years.');
    let brachiosaurus = new Dino('Brachiosaurus', 70000, 372,'herbavor', 'North America', 'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991.');
    let stegosaurus = new Dino('Stegosaurus', 1160, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines.');
    let pteranodon = new Dino('Pteranodon', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur.');
    let elasmosaurus = new Dino('Elasmosaurus', 16000, 59, 'carnivor', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas.');
    let pigeon = new Dino('Pigeon');

    // Create Human Object
    let human = new Dino('human', 100, 'omnivor', 'World Wide', 50, '', 'anthropithicene');

    // Use IIFE to get human data from form
    (function getHumanData(){
        human.name = document.getElementById('name').value;
        human.height = (document.getElementById('feet').value * 12 ) + document.getElementById('inches').value;
        human.weight = document.getElementById('weight').value;
        human.diet = document.getElementById('diet').value;
    })();

    // Create Dino Compare Method 1
    Dino.prototype.dietCompare = function(){
        if (human.diet === this.diet){
            return `${this.species} was a ${this.diet}. You two could share dinner.`;
        } else if (this.diet === "carnivor"){
            return `${this.species} was a ${this.diet}. Better run before you become the meal.`;
        } else if (this.diet === "herbavor"){
            return `${this.species} was a ${this.diet}. You'll have to prepare an extra salad for dinner.`;
        } else {
            return `${this.species} was a ${this.diet}. Time to suggest a potluck.`;
        }
    }

    // Create Dino Compare Method 2
    Dino.prototype.weightCompare = function(){
        if (human.weight < this.weight + 20 && human.weight > this.weight - 20){
            return `Close match! They average ${this.weight} pounds. But you probably wouldn't want to wrestle.`;
        } else if (human.weight >= this.weight + 20){
            const weightDifference = Number.parseFloat(human.weight / this.weight).toPrecision(2);
            return `You're ${weightDifference} times larger than the ${this.species}. Still not a great pet idea.`;
        } else {
            const weightDifference = Number.parseFloat(this.weight/human.weight).toPrecision(2);
            return `The ${this.species} is ${weightDifference} times larger than you. Don't get in the way.`;
        }
    }
    
    // Create Dino Compare Method 3
    Dino.prototype.heightCompare = function(){
        if (human.height < this.height + 10 && human.height > this.height - 10){
            return `Close match! At their smallest they are ${this.height} inches.`;
        } else if (human.height >= this.height + 10){
            const heightDifference = Number.parseFloat(human.height / this.height).toPrecision(2);
            return `You're ${heightDifference} times taller than the ${this.species}.`;
        } else {
            const heightDifference = Number.parseFloat(this.height/human.height).toPrecision(2);
            return `The ${this.species} is ${heightDifference} times taller than you.`;
        }
    }

    // Create Dino Array
    const dinoArray = [triceratops, tyrannosaurus, anklyosaurus, brachiosaurus, human, stegosaurus, pigeon, pteranodon, elasmosaurus];

    // Generate Tiles for each Dino in Array
    dinoArray.forEach(dino => {
        // Generate tile elements
        const contain = document.createElement("div");
        const title = document.createElement("h3");
        const img = document.createElement("img");
        const fact = document.createElement("p");
        
        // Add class to tile for styling
        contain.className = "grid-item";
        // Set image src to dino image
        img.src = dino.image;

        if (dino.species === 'human'){
            // If human change species to human name
            title.innerHTML = human.name;
        } else if (dino.species ==='Pigeon'){
            // If pigeon, set title and fact
            title.innerHTML = "Columba livia domestica";
            fact.innerHTML = "All birds are living dinosaurs."
        } else {    
            // If dino, set title, set fact
            title.innerHTML = dino.species;
            fact.innerHTML = ( ()=> {
                let result = "";
                // Generate random number to choose fact from switch
                const rando =  Math.floor(Math.random()*7);

                switch(rando){
                    case 1:
                        result = dino.dietCompare();
                        break;
                    case 2:
                        result = dino.weightCompare();
                        break;
                    case 3:
                        result = dino.heightCompare();
                        break;
                    case 4:
                        result = `The ${dino.species} was found in the ${dino.when}.`;
                        break;
                    case 5:
                        result = `The ${dino.species} lived in what is now ${dino.where}.`;
                        break;
                    default:
                        result = dino.fact;
                        break;
                }
                return result;
            })();
        }

        // Add tiles to DOM
        const documentFragment = document.createDocumentFragment();
        documentFragment.appendChild(contain);
        contain.appendChild(title);
        contain.appendChild(img);
        contain.appendChild(fact);
        document.getElementById("grid").appendChild(documentFragment);
    });

    // Remove form from screen
    document.getElementById('dino-compare').innerHTML = "";
}

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', prepareInfographic);
