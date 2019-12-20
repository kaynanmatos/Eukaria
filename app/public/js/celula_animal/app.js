const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

var cont=1;

//Textos
function texto_mitocondria(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'Mitocôndrias são organelas que estão presentes tanto em células animais quanto em vegetais, mas apenas em Eucariontes. Elas ficam no citoplasma das células. São extremamente complexas, possuindo até mesmo um material genético próprio, chamado DNA Mitocondrial.'
	tx2.innerHTML= 'São vitais para a sobrevivência dos seres vivos, pois estas têm como principal função a produção de energia, através da quebra da molécula de glicose, no processo chamado de <span onclick="window.location.href=`/respiracao_celular`">respiração celular.</span>';
}

function texto_complex(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "O complexo de Golgi é uma organela presente em células animais e vegetais procariontes, se localizando no citoplasma e geralmente perto do núcleo celular."
	tx2.innerHTML= "  Sua principal função é a secretar proteínas que são produzidas no retículo endoplasmático liso e rugoso, sendo essas proteínas muito importantes para as funções das células. Também é responsável por produzir os lisossomos e os peroxissomos.";
}

function texto_reticul(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "O retículo endoplasmático é uma organela muito grande, presente em todas as células eucariontes, que forma um complexo sistema de “tubos”, que pode, percorrer toda a célula. Também envolve o núcleo celular, estando muitas vezes conectado diretamente a este.";
	tx2.innerHTML= "É possível observar uma divisão entre duas partes distintas desta organela: o retículo endoplasmático liso (responsável pela produção de lipídeos, fosfolipídeos e até hormônios, dependendo da célula) e o retículo endoplasmático liso (chamado assim por estar coberto por ribossomos, sendo sua principal função a produção de proteínas).";
}


function texto_riboss(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Ribossomos estão presentes em todos os indivíduos vivos, sejam estes procariontes ou eucariontes. Estão no citoplasma e no retículo endoplasmático rugoso das células, sendo pequenas estruturas que lembram granulado.";
	tx2.innerHTML= " Sua principal função é a síntese de proteína, sendo essenciais para o crescimento e manutenção da célula.";
}


function texto_lissos(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx2.innerHTML= "Sua principal função está na degradação e digestão de partes da célula (uma forma de reciclagem) e de partículas exteriores.";
	tx1.innerHTML= "Lisossomos estão presentes em quase todas as células eucariontes. Estes se localizam no citoplasma de célula, e são formados pelo Complexo de Golgi.";
}

function texto_peroxiss(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Peroxissomos estão presentes no citoplasma de células animais e vegetais, e são basicamente bolsas de enzimas digestivas. Porém, diferente dos lisossomos, os peroxissomos tem função de degradar principalmente água oxigenada, substância tóxica para a célula. Isso ocorre através da enzima Catalase.";
}

function texto_centri(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'Maecenas condimentum faucibus tincidunt. Proin sed luctus turpis, a porta lorem. Aenean et magna elit. Vivamus posuere eget ex et aliquam. Sed lectus mi, scelerisque eget purus a, tempus scelerisque orci. Pellentesque quis magna interdum, tempor magna id, convallis massa. Proin porta risus nec ipsum scelerisque gravida.';
	tx2.innerHTML= 'Sua função é auxiliar na <span onclick="window.location.href=`/mitose`">mitose</span> e <span onclick="window.location.href=`/meiose`">meiose</span> , formando o fuso acromático, estrutura que conduzem os cromossomos durante a separação da membrana plasmática.';
}

function texto_membr(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "A membrana plasmática é uma estrutura presente em todas as células, sendo a responsável por proteger o interior da célula do exterior, controlando a entrada e saída de substâncias, partículas e etc.";
	tx2.innerHTML= "A composição da membrana é de uma dupla camada fosfolipídica e de proteínas, que possui uma parte polar (que tem afinidade com a água, sendo voltada para o exterior da camada) e outra apolar (que não tem afinidade com a água, sendo virada para o interior da camada).";
}

function texto_cito(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= " O citoplasma é “recheio” das células eucariontes e procariontes. É nela onde ficam mergulhados diversas organelas e o núcleo celular. É constituído por uma substância chamada Citosol, que é composto por água, proteínas, açucar e sais minerais.";
}

function texto_celula(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'Células animais são aquelas que compõem os seres do reino animal. São eucariontes, ou seja, possuem um núcleo rodeado pela Carioteca.';
	tx2.innerHTML= 'A diferença destas para as <span onclick="window.location.href=`/celula_vegetal`">células vegetais</span> está na presença e ausência de algumas organelas. Por exemplo, as células vegetais, ao contrário das animais, não possuem centríolos, mas possuem cloroplastos, vacúolos e glioxissomos, além, de parede celular. ';
}

function texto_nucleo(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "A presença do núcleo celular é o que diferencia as células eucariontes e procariontes. Nele fica armazenado o material genético da célula, como o DNA e o RNA, que são usados para a produção de proteínas e lipídeos.";
	tx2.innerHTML= "O núcleo pode ser dividido entre nucleoplasma (onde fica maior parte do material genético da célula) e o nucléolo, onde são produzidos os RNAs ribossômicos.";
}

function trocar_clique(valor){
	let el1=document.querySelector('.celula')
	cont=(parseInt(valor)+1)
	let el2='.l'+cont;
	if(cont==1){
		texto_celula();
	}else if(cont==2){
		texto_mitocondria();
	} else if(cont==3){
		texto_complex();
	}else if(cont==4){
		texto_reticul();
	}else if(cont==5){
		texto_riboss();
	}else if(cont==6){
		texto_lissos();
	}else if(cont==7){
		texto_peroxiss();
	}else if(cont==8){
		texto_centri();
	}else if(cont==9){
		texto_membr();
	}else if(cont==10){
		texto_cito();
	} else if(cont==11){
		texto_nucleo();
	}
	anime({
		targets: el1,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear',
		display: 'none'
	});
	document.querySelector(el2).style.display='flex';
	anime({
		targets: el2,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear',
		display: 'block'
	});
	document.querySelector('.avan').onclick= avancar_clique;
	document.querySelector('.voltar').onclick= voltar_clique;
}
function avancar_clique(){
	let el1='.l'+cont;
	let el2='.l1';
	anime({
		targets: el1,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear',
		display: 'none'
	});
	document.querySelector(el1).style.display='none';
	document.querySelector(el2).style.display='flex';
	anime({
		targets: el2,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear',
		display: 'block'
	});
	texto_celula();
	document.querySelector('.avan').onclick= avancar_setas;
	document.querySelector('.voltar').onclick= voltar_setas;
	cont=1;
}
function voltar_clique(){
	let el1='.l'+cont;
	let el2='.l1';
	texto_celula();
	anime({
		targets: el1,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	document.querySelector(el1).style.display='none';
	document.querySelector(el2).style.display='flex';
	anime({
		targets: el2,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
	document.querySelector('.avan').onclick= avancar_setas;
	document.querySelector('.voltar').onclick= voltar_setas;
	cont=1;
}
function avancar_setas(){
	let el1,el2;
	if(cont==1){
		el1='.l1';
		el2='.l2';
		texto_mitocondria();
		cont++
	}else if(cont==2){
		el1='.l2';
		el2='.l3'; 
		texto_complex();
		cont++
	} else if(cont==3){
		el1='.l3'
		el2='.l4'
		texto_reticul();
		cont++
	}else if(cont==4){
		el1='.l4'
		el2='.l5'
		texto_riboss();
		cont++
	}else if(cont==5){
		el1='.l5'
		el2='.l6'
		texto_lissos();
		cont++
	}else if(cont==6){
		el1='.l6'
		el2='.l7'
		texto_peroxiss();
		cont++
	}else if(cont==7){
		el1='.l7'
		el2='.l8'
		texto_centri();
		cont++
	}else if(cont==8){
		el1='.l8'
		el2='.l9'
		texto_membr();
		cont++
	}else if(cont==9){
		el1='.l9'
		el2='.l10'
		texto_cito();
		cont++
	}else if(cont==10){
		el1='.l10'
		el2='.l11'
		texto_nucleo();
		cont++
	}else if(cont==11){
		el1='.l11'
		el2='.l1'
		texto_celula();
		cont=1
	}

	anime({
		targets: el1,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear',
		display: 'none'
	});
	document.querySelector(el1).style.display='none';
	document.querySelector(el2).style.display='flex';
	anime({
		targets: el2,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear',
		display: 'block'
	});

}

function voltar_setas(){
	let el1,el2;
	if(cont==1){
		el1='.l1';
		el2='.l11';
		texto_nucleo();
		cont=11
	}else if(cont==11){
		el1='.l11'
		el2='.l10'
		texto_cito();
		cont--
	}else if(cont==10){
		el1='.l10';
		el2='.l9'; 
		texto_membr();
		cont--
	} else if(cont==9){
		el1='.l9'
		el2='.l8'
		texto_centri();
		cont--
	}else if(cont==8){
		el1='.l8'
		el2='.l7'
		texto_peroxiss();
		cont--
	}else if(cont==7){
		el1='.l7'
		el2='.l6'
		texto_lissos();
		cont--
	}else if(cont==6){
		el1='.l6'
		el2='.l5'
		texto_riboss();
		cont--
	}else if(cont==5){
		el1='.l5'
		el2='.l4'
		texto_reticul();
		cont--
	}else if(cont==4){
		el1='.l4'
		el2='.l3'
		texto_complex();
		cont--
	}else if(cont==3){
		el1='.l3'
		el2='.l2'
		texto_cito();
		cont--
	}else if(cont==2){
		el1='.l2'
		el2='.l1'
		texto_celula();
		cont--
	}

	anime({
		targets: el1,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: el2,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
	document.querySelector(el1).style.display='none';
	document.querySelector(el2).style.display='flex';
}