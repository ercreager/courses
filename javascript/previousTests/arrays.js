var xPositions = [100, 200];
var yPositions = [200, 300];

var drawStars = function() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

drawStars();

mouseClicked = function() {
    xPositions.push(mouseX); 
    yPositions.push(mouseY); 
    drawStars(); 
};