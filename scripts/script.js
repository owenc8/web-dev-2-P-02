const leftImg = document.getElementById('left-img'); // Select your image
let rotation = -90;
console.log("Element exists:", leftImg);

function rotateLeftImg(){
    setInterval(() => {
    rotation = (rotation - 90) ;
    leftImg.style.transform = `rotate(${rotation}deg)`;
    }, 4000);
}
rotateLeftImg();

const rightImg = document.getElementById('right-img'); // Select your image
let rotationR = 0;

function rotateRightImg(){
setInterval(() => {
  rotationR = (rotationR + 90) ;
  rightImg.style.transform = `rotate(${rotationR}deg)`;
}, 4000);
}
setTimeout(rotateRightImg,1000);