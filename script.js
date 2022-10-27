'use stric'
let endBox = document.querySelector('.animation-box');
let boxLeft = document.querySelector('.animation-box-left');
let boxRight = document.querySelector('.animation-box-right');

document.addEventListener('scroll', () => {
	let coord = document.documentElement.getBoundingClientRect().top;
	if( window.pageYOffset == document.pageYOffset ){
		//document.getElementById('left').style.transform = `rotate(90deg)`;
		console.log('hi!');
  	} else if ( coord == 0 ){
  		//document.getElementById('right').style.opacity = 0;
	}
})
console.log(window.pageYOffset);
console.log(document.documentElement.pageYOffset);

let aBox = document.querySelector('.animation-box');
let pos = 1;
aBox.addEventListener('click', () => {
	pos ++;
	if( pos % 2 == 0) {
		//boxLeft.style.transform = `rotate(90deg)`;
		//boxRight.style.tranform = `rotate(-90deg)`;
		aBox.style.width = `100%`;
	} else if ( pos % 2 != 0) {
		//boxLeft.style.transform = `rotate(-90deg)`;
		//boxRight.style.tranform = `rotate(90deg)`;
		aBox.style.width = `150px`;
	}
	console.log('hi');
})

window.addEventListener('scroll', function() {
  let pos = document.getElementById('scroll').innerHTML = pageYOffset + 'px';
  if( pos >= 1800 + 'px') {
		//boxLeft.style.transform = `rotate(90deg)`;
		//boxRight.style.tranform = `rotate(-90deg)`;
		aBox.style.width = `100%`;
	} else if ( pos <= 2183 + 'px') {
		//boxLeft.style.transform = `rotate(-90deg)`;
		//boxRight.style.tranform = `rotate(90deg)`;
		aBox.style.width = `150px`;
  }
  console.log(pos);
});

