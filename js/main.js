var angle = 3 * Math.PI / 180;
var cx = 200;
var cy = 200;
var a = 1;
var b = 1
var centerx = 0
var centery = 0

var radius = 30;
var frames = 200;

var fps = 220;
var div = document.getElementById('hit');

div.addEventListener('click', animate);


function animate(){

    angle = 0.1 * frames;
    x = centerx + (a+ b * angle) * Math.cos(angle);
    y = centery + (a + b * angle) * Math.sin(angle)
    


    if (frames > 0){
        frames--
    

    if (frames != 0) {
     setTimeout(animate, 1)
    
    }
    if (frames == 0) {
        frames = 200
    }

    }


    div.style.transform = "rotateX("+x+"deg) rotateY("+y+"deg) translate3d(0,0,0)";
    // console.log("x: " + x + " y: " + y)

}



// function animate() {

// angle += 3 * Math.PI / 180;
// var newX = (cx + radius * Math.cos(angle));
// var newY = (cy + radius * Math.sin(angle));

// console.log("x: " + newX + " y: " + newY)

// if (frames>0){
//     frames--;
//     setTimeout(animate, 1000 / fps);
// }

// div.style.transform = "rotateX("+newX+"deg) rotateY("+newY+"deg) translate3d(0,0,0)";
// }


// animate()

