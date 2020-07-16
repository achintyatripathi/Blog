function init_movement(){
	let background = document.querySelector('section')
	let x, y
	document.onmousemove = (e) => {
		if (x && y) {
			background.style.backgroundPositionX = `${-x}px`
  			background.style.backgroundPositionY = `${-y}px`
			
		}
		x = e.clientX / 5
		y = e.clientY / 5
	}	
}

init_movement()  


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


