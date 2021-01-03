var projectTiles = document.getElementsByClassName('project-tile');
var tileWidth = window.getComputedStyle(projectTiles[0]).height;
var allProjectButton = document.getElementById('all-projects-button');

allProjectButton.style.height = tileWidth;