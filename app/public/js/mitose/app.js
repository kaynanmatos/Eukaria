const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

var status=1;
function texto_profase(){
	tx1.innerHTML= 'Essa etapa é chamada de Prófase. É nela na qual ocorre a condensação do DNA no núcleo da célula, formando os cromossomos. Essa condensação é mediada pela ação de uma proteína chamada condensina, que torna os cromossomos mais densos.';
	tx2.innerHTML= 'Além disso, o nucléolo (parte do núcleo no qual esta concentrado o DNA) se desintegra, e a célula se prepara pra de dividir. Os centríolos migram para os polos da célula.';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_prometafase(){
	tx1.innerHTML= 'A Prometafase é a fase que sucede a Prófase e antecede a Metáfase. Nela, ocorre a desintegração do Núcleo Celular, e continua a concentração dos cromossomos.';
	tx2.innerHTML= 'Além disso, as organelas restantes finalizam a concentração nos polos das células';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_metafase(){
	tx1.innerHTML= 'Os cromossomos, já no auge da sua concentração, se alinham no centro da célula (também chamado de Plano Equatorial, ou Metafásica).';
	tx2.innerHTML= 'Os Centríolos formam os microtúbulos, que juntos constituem Fuso Miótico. Este tem a função de "capturar" os cromossomos, e movê-los durante a separação.';
	tx3.innerHTML= 'No fim da metáfase, o Fuso miótico se liga aos cromossomos para iniciar a divisão.';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_anafase(){
	tx1.innerHTML= 'Na anáfase, os cromossomos são separados em duas cromátides irmãs, sendo essas duas geneticamente iguais. Metade é puxada para um dos lados da célula, e a outra metade para o polo oposto';
	tx2.innerHTML= 'Já na telófase, ocorre o alongamento da célula, e a membrana plasmática se divide em duas, formando duas células.';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_telofase(){
	tx1.innerHTML= 'A célula se divide de fato. Ocorre um alongamento da célula e a membrana plasmática divide a célula em duas. Após isso, o núcleo celular se reconstrói ao redor dos cromossomos de cada célula';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}

function profase(){
	condensar.play();
	condensar2.play();
	condensar3.play();
	cromossomos.play();
	desaparece.play();
	centr1.play();
	centr2.play();
	setTimeout(function(){ document.querySelector('.avan').onclick= prometafase;}, 2000);
	texto_profase();
	status=2;
}

function prometafase(){
	nucleo.play();
	mito_1.play();
	mito_2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= metafase;}, 2000);
	texto_prometafase();
	status=3;
}

function metafase(){
	centralizar_1.play();
	centralizar_2.play();
	centralizar_3.play();
	cent_desp_1.play();
	cent_desp_2.play();
	deform_1.play();
	deform_2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= anafase;}, 2500);
	texto_metafase();
	status=4;
}
function anafase(){
	mover_dir_mito1.play();
	mover_esq_mito2.play();
	mover_dir_Cen1.play();
	mover_esq_Cen2.play();
	mover_esq.play();
	mover_dir.play();
	// separacao(true);
	separação_citoplasma.play();
	separação_membrana.play();
	separada.play();
	sep11.play();
	sep12.play();
	sep21.play();
	sep22.play();
	sep2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= formacao_filho;}, 5000);
	texto_anafase();
	status=5;
}
function formacao_filho(){
	novo_nucleo_esquerdo_1.play();
	novo_nucleo_esquerdo_2.play();
	novo_nucleo_esquerdo_3.play();
	novo_nucleo_direito_1.play();
	novo_nucleo_direito_2.play();
	desfazer_centriolo1.play();
	desfazer_centriolo2.play();
	desfazer_deform.play();
	formacao.play();
	texto_telofase();
	status=6;
}

function pausa(){
	if(status==2){
		condensar.pause();
		condensar2.pause();
		condensar3.pause();
		cromossomos.pause();
		desaparece.pause();
		centr1.pause();
		centr2.pause();
		document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
		document.querySelector('.pausa_avancar').onclick= continuar;
	} else if(status==3){
		nucleo.pause();
		mito_1.pause();
		mito_2.pause();
		document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
		document.querySelector('.pausa_avancar').onclick= continuar;
	}else if(status==4){
		centralizar_1.pause();
		centralizar_2.pause();
		centralizar_3.pause();
		cent_desp_1.pause();
		cent_desp_2.pause();
		deform_1.pause();
		deform_2.pause();
		document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
		document.querySelector('.pausa_avancar').onclick= continuar;
	}else if(status==5){
		mover_dir_mito1.pause();
		mover_esq_mito2.pause();
		mover_dir_Cen1.pause();
		mover_esq_Cen2.pause();
		mover_esq.pause();
		mover_dir.pause();
		separação_citoplasma.pause();
		separação_membrana.pause();
		separada.pause();
		sep11.pause();
		sep12.pause();
		sep21.pause();
		sep22.pause();
		sep2.pause();
		document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
		document.querySelector('.pausa_avancar').onclick= continuar;
	}else if(status==6){
		novo_nucleo_esquerdo_1.pause();
		novo_nucleo_esquerdo_2.pause();
		novo_nucleo_esquerdo_3.pause();
		novo_nucleo_direito_1.pause();
		novo_nucleo_direito_2.pause();
		desfazer_centriolo1.pause();
		desfazer_centriolo2.pause();
		desfazer_deform.pause();
		formacao.pause();
		document.querySelector('.pausa_avancar').src= "../../imgs/pausa_symbol.png";
		document.querySelector('.pausa_avancar').onclick= continuar;
	}
}

function continuar(){
	if(status==2){
		condensar.play();
		condensar2.play();
		condensar3.play();
		cromossomos.play();
		desaparece.play();
		centr1.play();
		centr2.play();
		document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
		document.querySelector('.pausa_avancar').onclick= pausa;
	} else if(status==3){
		nucleo.play();
		mito_1.play();
		mito_2.play();
		document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
		document.querySelector('.pausa_avancar').onclick= pausa;
	}else if(status==4){
		centralizar_1.play();
		centralizar_2.play();
		centralizar_3.play();
		cent_desp_1.play();
		cent_desp_2.play();
		deform_1.play();
		deform_2.play();
		document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
		document.querySelector('.pausa_avancar').onclick= pausa;
	}else if(status==5){
		mover_dir_mito1.play();
		mover_esq_mito2.play();
		mover_dir_Cen1.play();
		mover_esq_Cen2.play();
		mover_esq.play();
		mover_dir.play();
		separação_citoplasma.play();
		separação_membrana.play();
		separada.play();
		sep11.play();
		sep12.play();
		sep21.play();
		sep22.play();
		sep2.play();
		document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
		document.querySelector('.pausa_avancar').onclick= pausa;
	}else if(status==6){
		novo_nucleo_esquerdo_1.play();
		novo_nucleo_esquerdo_2.play();
		novo_nucleo_esquerdo_3.play();
		novo_nucleo_direito_1.play();
		novo_nucleo_direito_2.play();
		desfazer_centriolo1.play();
		desfazer_centriolo2.play();
		desfazer_deform.play();
		formacao.play();
		document.querySelector('.pausa_avancar').src= "../../imgs/play_symbol.png";
		document.querySelector('.pausa_avancar').onclick= pausa;
	}
}
// if(check){
// 		botao_pausa.src ="../../imgs/play_symbol.png";
// 		check=false;
// 	} else{
// 		botao_pausa.src="../../imgs/pausa_symbol.png";
// 		check=true;
// 	}


document.querySelector('.pausa_avancar').onclick= pausa;
document.querySelector('.avan').onclick= profase;