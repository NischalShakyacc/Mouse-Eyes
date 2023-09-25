const face = document.getElementById('face');

// get bounds for the area of your character
const rect = face.getBoundingClientRect();

const eyes = document.querySelectorAll('.eye');
const anchorX = rect.left +window.scrollX+ rect.width/2;
const anchorY = rect.top +window.scrollY+ rect.height/2;

document.addEventListener("mousemove", (e) =>{
    const pointX = e.clientX;
    const pointY = e.clientY;
    const degree = angle(pointX, pointY, anchorX, anchorY);

    
    // to move each eye using rotate 
    eyes.forEach(eye =>{
        eye.style.transform = `rotate(${degree}deg`;
    })
})

//Calculates the angle to rotate the eye with respect to mouse position
function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    return (rad*180/Math.PI) +90
}