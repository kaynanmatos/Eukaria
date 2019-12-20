var check_anima=1;
// var ativo=1;
var aberto=false;

document.querySelector('.pausa_avancar').onclick= pausa;


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

function trocar_anima(valor){
	let op_1=document.querySelector('.op_anima_1');
	let op_2=document.querySelector('.op_anima_2');
	let op_3=document.querySelector('.op_anima_3');
	var el2, el1;
	if(check_anima==1){
		el1='.l'+check_anima;
	} else if(check_anima==2){
		el1='.l'+check_anima;
	} else if(check_anima==3){
		el1='.l'+check_anima;
	}
	if(valor==1){
		op_1.style.background='#636e72';
		op_2.style.background='#95a5a6';
		op_3.style.background='#95a5a6';
		check_anima=valor;
		el2='.l'+valor;
		checar_glico();
	} else if(valor==2){
		op_1.style.background='#95a5a6';
		op_2.style.background='#636e72';
		op_3.style.background='#95a5a6';
		check_anima=valor;
		el2='.l'+valor;
		checar_ciclo();
	} else if(valor==3){
		op_1.style.background='#95a5a6';
		op_2.style.background='#95a5a6';
		op_3.style.background='#636e72';
		check_anima=valor;
		el2='.l'+valor;
		checar_oxid();
	}

	anime({
		targets: el1,
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
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}

function checar_ciclo(){
	if (ciclo==0) {
		document.querySelector('.avan').onclick= piru_acetil;
		texto_ciclo_0();
	} else if(ciclo==1){
		document.querySelector('.avan').onclick= acetil_citrato;
		texto_ciclo_1();
	} else if(ciclo==2){
		document.querySelector('.avan').onclick= citrato_isocitrato;
		texto_ciclo_2();
	} else if(ciclo==3){
		document.querySelector('.avan').onclick= isocitrato_alfacetoglurato;
		texto_ciclo_3();
	} else if(ciclo==4){
		document.querySelector('.avan').onclick= alfacetoglurato_succinio;
		texto_ciclo_4();
	} else if(ciclo==5){
		document.querySelector('.avan').onclick= succinio_succinato;
		texto_ciclo_5();
	} else if(ciclo==6){
		document.querySelector('.avan').onclick= succinato_fumarico;
		texto_ciclo_6();
	} else if(ciclo==7){
		document.querySelector('.avan').onclick= fumarico_malico;
		texto_ciclo_7();
	} else if(ciclo==8){
		document.querySelector('.avan').onclick= malico_oxaloacetico;
		texto_ciclo_8();
	} else if(ciclo==9){
		document.querySelector('.avan').onclick= malico_oxaloacetico;
		texto_ciclo_9();
	}
}

function checar_glico(){
	if(glicolise_ch==1){
		document.querySelector('.avan').onclick= glicolise;
		texto_glicolise_1();
	} else if(glicolise_ch==2){
		document.querySelector('.avan').onclick= glicolise;
		texto_glicolise_2();
	}
}
		
function checar_oxid(){
	if(oxid_ch==1){
		document.querySelector('.avan').onclick= geracao_Atp;
		texto_oxid_1();
	} else if(oxid_ch==2){
		document.querySelector('.avan').onclick= geracao_Atp;
		texto_oxid_2();
	} else {
		document.querySelector('.avan').onclick= oxid_nadh;
		texto_oxid_0();
	}
}

document.querySelector('.avan').onclick= glicolise;




function pausa(){
	if(check_anima==1){
			if(glicolise_ch==1){
				nad.pause();
				adp.pause();
				nadh.pause();
				atp.pause();
				degradacao_glicose.pause();
				surgimento_piruvatos.pause();
				document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
				document.querySelector('.pausa_avancar').onclick= continuar;
			}
	} else if(check_anima==2){
		if(ciclo==1){
			nad_1_ciclo.pause();
			coA_1_ciclo.pause();
			nadh_1_ciclo.pause();
			co2_1.pause();
			acetiL_coA_1.pause();
			piruvatos_ciclo_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==2){
			acido_oxaloacetico_1.pause();
			h2o_1.pause();
			acetiL_coA_2.pause();
			citrato_1.pause();
			coA_2_ciclo.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==3){
			h2o_2.pause();
			citrato_2.pause();
			isocitrato_1.pause();
			h2o_3.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==4){
			nad_2.pause();
			isocitrato_2.pause();
			alfacetoglurato_1.pause();
			nadh_2.pause();
			co2_2.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==5){
			coA_3_ciclo.pause();
			nad_3.pause();
			alfacetoglurato_2.pause();
			siccinio_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==6){
			adp_1.pause();
			fosfato.pause();
			siccinio_2.pause();
			succinato_1.pause();
			atp_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==7){
			fad_1.pause();
			succinato_2.pause();
			fumarico_1.pause();
			fadh2_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==8){
			fumarico_2.pause();
			h2o_4.pause();
			malico_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(ciclo==9){
			nad_4.pause();
			nadh_4.pause();
			acido_oxaloacetico_2.pause();
			malico_2.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		}
	}else if(check_anima==3){
		if(oxid_ch==1){
			nadh_fosfo_1.pause();
			nad_fosfo_1.pause();
			h_fosfo_1.pause();
			document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
			document.querySelector('.pausa_avancar').onclick= continuar;
		} else if(oxid_ch==2){
			h_fosfo_2.pause();
			atp_fosfo_1.pause();
		}
	}
}	

function continuar(){
	if(check_anima==1){
			if(glicolise_ch==1){
				nad.play();
				adp.play();
				nadh.play();
				atp.play();
				degradacao_glicose.play();
				surgimento_piruvatos.play();
				document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
				document.querySelector('.pausa_avancar').onclick= pausa;
			}
	} else if(check_anima==2){
		if(ciclo==1){
			nad_1_ciclo.play();
			coA_1_ciclo.play();
			nadh_1_ciclo.play();
			co2_1.play();
			acetiL_coA_1.play();
			piruvatos_ciclo_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==2){
			acido_oxaloacetico_1.play();
			h2o_1.play();
			acetiL_coA_2.play();
			citrato_1.play();
			coA_2_ciclo.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==3){
			h2o_2.play();
			citrato_2.play();
			isocitrato_1.play();
			h2o_3.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==4){
			nad_2.play();
			isocitrato_2.play();
			alfacetoglurato_1.play();
			nadh_2.play();
			co2_2.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==5){
			coA_3_ciclo.play();
			nad_3.play();
			alfacetoglurato_2.play();
			siccinio_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==6){
			adp_1.play();
			fosfato.play();
			siccinio_2.play();
			succinato_1.play();
			atp_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==7){
			fad_1.play();
			succinato_2.play();
			fumarico_1.play();
			fadh2_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==8){
			fumarico_2.play();
			h2o_4.play();
			malico_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(ciclo==9){
			nad_4.play();
			nadh_4.play();
			acido_oxaloacetico_2.play();
			malico_2.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		}
	}else if(check_anima==3){
		if(oxid_ch==1){
			nadh_fosfo_1.play();
			nad_fosfo_1.play();
			h_fosfo_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		} else if(oxid_ch==2){
			h_fosfo_2.play();
			atp_fosfo_1.play();
			document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
			document.querySelector('.pausa_avancar').onclick= pausa;
		}
	}
}	