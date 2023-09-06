
// Lupa e menu, efeitos.

function effects(){
	
	let barraDePesquisa = document.querySelector(".search-box");

	document.querySelector("#search-icon").onclick = () => {
		barraDePesquisa.classList.toggle("active");
		menuIcon.classList.remove("active");
	}

	let menuIcon = document.querySelector(".navbar");

	document.querySelector("#menu-icon").onclick = () => {
		menuIcon.classList.toggle("active");
		barraDePesquisa.classList.remove("active");
	}

	window.onscroll = () => {
		menuIcon.classList.remove("active");
		barraDePesquisa.classList.remove("active");
	} 
}

// Header, evento de scroll.

function headerEffect(){
	
	let header = document.querySelector('header');

	window.addEventListener("scroll", () => {
		header.classList.toggle('shadow', window.scrollY > 0);
	});	
}


effects();
headerEffect();



