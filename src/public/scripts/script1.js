function main() {

	document.querySelector(".btn1").addEventListener('click', function(evt) {
		evt.preventDefault();
		
		document.querySelector('.start').classList.add('hide');
		console.log("yatta!");
	});
}

document.addEventListener('DOMContentLoaded', main);