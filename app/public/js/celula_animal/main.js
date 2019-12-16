var aberto=false;

function troca_1(){
	var sec1=document.querySelector('.animacao');
	var sec2=document.querySelector('.completo');
	sec1.style.display='none';
	sec2.style.display='block';
}
function troca_2(){
	var sec1=document.querySelector('.animacao');
	var sec2=document.querySelector('.completo');
	sec2.style.display='none';
	sec1.style.display='flex';
}

document.querySelector('.avan').onclick= avancar_setas;
document.querySelector('.voltar').onclick= voltar_setas;


function trocar(element){
	let indicador1=document.querySelector('.i1');
	let indicador2=document.querySelector('.i2');

	if(element.id=='anim'){
		let element2= document.querySelector('.op1');
		document.querySelector('.op1').setAttribute('onclick', 'trocar(this)');
		anime({
			targets: element,
			color:'#78c29c',
			duration: 300
		});
		anime({
			targets: indicador1,
			background:'#171127',
			width: '45%',
			borderRadius: 0,
			height: '3px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		anime({
			targets: element2,
			duration: 300,
			color:'#171127'
		});
		anime({
			targets: indicador2,
			background: '#78c29c',
			borderRadius: '50%',
			height: '10px',
			width: '10px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		troca_1();
	} else {
		let element2= document.querySelector('.op2');
		document.querySelector('.op2').setAttribute('onclick', 'trocar(this)');
		anime({
			targets: element,
			color:'#78c29c',
			duration: 300
		});
		anime({
			targets: indicador2,
			background:'#171127',
			width: '50%',
			borderRadius: 0,
			height: '3px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		anime({
			targets: element2,
			duration: 300,
			color:'#171127'
		});
		anime({
			targets: indicador1,
			background: '#78c29c',
			borderRadius: '50%',
			height: '10px',
			width: '10px',
			duration: 300,
			easing: 'easeInOutQuad'
		});	
		troca_2();
	}
}
document.querySelector('.op2').setAttribute('onclick', 'trocar(this)');

var aberto=false;

function abrir() { 
	anime({
		targets: '.hamburguer',
		duration: 100,
		easing: 'linear',
		rotate: '180deg'
	});

	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 0
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 0
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		// backgroundColor: '#27ae60',
		duration: 100
	});
	menu(aberto);
	aberto=true;
	document.querySelector('.mid').onclick=fechar;
	document.querySelector('.top').onclick=fechar;
	document.querySelector('.bottom').onclick=fechar;
};
function fechar() { 
	anime({
		targets: '.hamburguer',
		duration: 100,
		easing: 'linear',
		rotate: '-180deg'
	});
	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 1
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 1
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		width: '27px',
		height: '3px',
		borderRadius: '0%',
		// backgroundColor: '#000000',
		duration: 100
	});
	menu(aberto);
	aberto=false;
	document.querySelector('.mid').onclick=abrir;
	document.querySelector('.top').onclick=abrir;
	document.querySelector('.bottom').onclick=abrir;
};

function menu(status){
	let menu=document.querySelector('.menu');
	if(status){
		anime({
			targets: menu,
			right: '-70%',
			easing: 'easeInOutQuad',
			duration: 500
		});
		setTimeout(function(){
			(menu.style.display='none')
		}, 500);
	} else {
		anime({
			targets: menu,
			right: '0',
			easing: 'easeInOutQuad',
			duration: 500
		});
		menu.style.display='flex';
	}
}

document.querySelector('.mid').onclick=abrir;
document.querySelector('.top').onclick=abrir;
document.querySelector('.bottom').onclick=abrir;
