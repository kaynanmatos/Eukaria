const width = Number(window.innerWidth);
var pc=false;
var cel=false;
var tablet=false;
var tabletM=false;

if(width<=500){
	cel=true;
} else {
	cel=false;
}

if(width>500 && width<=850){
	tablet= true;
} else {
	tablet=false;
}

if(width>850 && width<=1200){
	tabletM= true;
} else {
	tabletM=false;
}

if(width>1150){
	pc= true;
} else {
	pc= false;
}






anime({
	targets: '.botao',
	duration: 2000,
    easing: 'easeInOutSine',
	rotate: 360
});

if(cel){
	anime({
		targets: '.botao',
		delay: 3000,
		width: '175px',
		height: '50px',
		autoplay: cel
	});
}

if(tablet){
	anime({
		targets: '.botao',
		delay: 3000,
		width: '150px',
		height: '40px',
		autoplay: tablet
	});
}

if(tabletM){
	anime({
		targets: '.botao',
		delay: 3000,
		width: '200px',
		height: '50px',
		autoplay: tabletM
	});
}

if(pc){
	// alert(width)
	anime({
		targets: '.botao',
		delay: 3000,
		width: '200px',
		height: '50px',
		autoplay: pc
	});
	
}


function abrir() {
	window.location.href = 'Inicio/pagina_inicial.html';
}