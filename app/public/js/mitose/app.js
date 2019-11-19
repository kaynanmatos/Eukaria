const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

var status=1;
function texto_profase(){
	tx1.innerHTML= 'Ocorre a condensação do DNA que foi duplicado durante a Interfase. Além disso, o núcleo aumenta de tamanho e o nucléolo se desfaz.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_prometafase(){
	tx1.innerHTML= 'Ocorre a desintegração total do núcleo da célula, e os cromossomos ficam soltos no ambiente';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_metafase(){
	tx1.innerHTML= 'Os cromossomos vão para o centro da célula (ou plano equatorial) onde se ligam com os microtúbulos. Além disso, eles atingem sua máxima condensação';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_anafase(){
	tx1.innerHTML= 'Os cromossomos são separados em duas cromátides irmãs, sendo essas duas geneticamente iguais. Metade é puxada para um dos lados da célula, e a outra metade para o polo oposto';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_telofase(){
	tx2.innerHTML= '';
	tx1.innerHTML= 'A célula se divide de fato. Ocorre um alongamento da célula e a membrana plasmática divide a célula em duas. Após isso, o núcleo celular se reconstrói ao redor dos cromossomos de cada célula';
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
	setTimeout(function(){ document.querySelector('.avan').onclick= prometafase;}, 1500);
	texto_profase();
	status=2;
}
function prometafase(){
	nucleo.play();
	centr1.play();
	centr2.play();
	mito_1.play();
	mito_2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= metafase;}, 5500);
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
	mover_esq.play();
	mover_dir.play();
	separacao(true);
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
document.querySelector('.avan').onclick= profase;

