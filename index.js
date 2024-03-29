
// Shooting stars start.
(function animateStars() {
    const nightSkyContainer = document.getElementsByClassName("night-sky-container")[0];
    const star0 = document.getElementById("star-zero");
    const star1 = document.getElementById("star-one");
    const star2 = document.getElementById("star-two");
    const star3 = document.getElementById("star-three");
    
    setInterval(moveStar, 1700, star0);
    setInterval(moveStar, 2900, star1);
    setInterval(moveStar, 4100, star2);
    setInterval(moveStar, 5300, star3);

    function moveStar(star) {
        let xAxisFromLeft = getNextPosition(nightSkyContainer.clientWidth);
        let yAxisFromTop = getNextPosition(nightSkyContainer.clientHeight);

        let directionAngle = getRotation(star, xAxisFromLeft, yAxisFromTop)
        star.style.rotate = directionAngle + "deg";

        star.style.opacity = 1;
        star.style.top = yAxisFromTop + "px";
        star.style.left = xAxisFromLeft + "px";
        star.ontransitionend = () => star.style.opacity = 0;
    }

    function getNextPosition(max) {
        min = 0;
        max = max; 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getRotation(star, newPositionX, newPositionY) {
      let pi = Math.PI;
      let starValues = window.getComputedStyle(star);
      let initialX = parseInt(starValues.getPropertyValue("left"), 10);
      let initialY = parseInt(starValues.getPropertyValue("top"), 10);
      let angleInRadians = Math.atan((initialY - newPositionY) / (initialX - newPositionX));
      let degree = angleInRadians * (180/pi);

      // 1st and 4th quadrants are 180deg off.
      if ((newPositionX >= initialX && newPositionY >= initialY) || (newPositionX >= initialX && newPositionY <= initialY)) {
        return degree + 180
      } else {
        return degree;
      }
    }
})();

// Modal display start.
const modal = document.getElementById("cert-modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");

const certificates = document.getElementsByClassName("certificate");

for (let certificate of certificates) {
    certificate.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementById("close");

span.onclick = function() {
  modal.style.display = "none";
}


// Scroll to top button start.
const topButton = document.getElementById("top-button");

let previousScrollPosition = window.scrollY;

window.onscroll = function() {
  if(previousScrollPosition > window.scrollY){
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

  previousScrollPosition = window.scrollY;
}