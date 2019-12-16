const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

var ciclo=0;
var cont=0;
var glicolise_ch=1;
var oxid_ch=0;



//Textos
function texto_glicolise_1(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML='A respiração celular é um processo feito pela célula, que tem como principal objetivo gerar energia. É essencial para a célula, pois sem este não haveria energia para realizar as funções vitais.';
	tx2.innerHTML='A energia gerada (que vem da quebra das ligações das substâncias) é armazenada em várias moléculas, como ATP, NADH, etc.';
	tx3.innerHTML='A respiração celular é dividida em três fases: Glicólise, Ciclo de Krebs e Fosforilação Oxidativa.'
	tx4.innerHTML='A Glicólise é a primeira fase da respiração celular, sendo um processo Anaeróbico (que ocorre sem a presença de oxigênio). Esse processo ocorre no citoplasma da célula, e tem como objetivo degradar a Glicose.';
}

function texto_glicolise_2(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML='A quebra da Glicólise ocorre com o uso de 2ADP e 2NAD, que gera 2ATP e 2NADH (que carregam energia). Essa reação produz duas moléculas de Ácido Pirúvico, ou Piruvatos.';
}

function texto_ciclo_0(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "O Ciclo de Krebs é a segunda etapa da respiração celular. Ela ocorre na matriz das mitocôndrias, e apenas na presença de oxigênio, e sua função é gerar ATP (adenosina trifosfato), que são as moléculas que carregam energia.";
	tx2.innerHTML= "";
}

function texto_ciclo_1(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx2.innerHTML= "";
	tx1.innerHTML= "O ciclo de Krebs ocorre logo após a Glicólise, com as duas moléculas de ácido pirúvico ou piruvato (C3H4O3) sofrendo uma descarboxilação oxidativa. Está corresponde a remoção de um CO2 do piruvato, gerando o grupo acetil que se liga a coenzima A (CoA) e forma o Acetil-CoA.";
}

function texto_ciclo_2(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na segunda reação, a enzima ‘citrato sintetase’ catalisa a reação que combina o grupo Acetil (da molécula de acetil-CoA) com o ácido oxaloacético (ou oxaloacetato), liberando a Coenzima A e formando uma molécula com 6 carbonos, chamada ácido cítrico ou citrato.";
	tx2.innerHTML= "";
}

function texto_ciclo_3(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na terceira reação, o citrato recebe e perde uma molécula de H20 , sendo convertido no isômero, o isocitrato.";
}

function texto_ciclo_4(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na quarta reação, o isocitrato sofre oxidação recebendo um NAD+ e liberando CO2 e NADH+H.";
	tx2.innerHTML= "A molécula formada (composta por 5 corbonos) é chamada de Alfacetoglutarato.";
}

function texto_ciclo_5(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na quinta reação, o Alfacetoglutarato sofre oxidado, reduzindo o NAD para o NADH e liberando C02, formando uma molécula com quatro carbonos. Essa molécula se liga à Coenzima A. Essa molécula é chamada Succinil coA.";
	tx2.innerHTML= "";
}

function texto_ciclo_6(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na sexta reação, o coA é trocado por um fosfato, que se junta a um ADP (adenosina difosfato), formando um ATP. A molécula formada, com quatro carbonos, é chamada Succinato, ou Ácido Succínico.";

}

function texto_ciclo_7(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "O Succinato sofre oxidação, liberando FADH2, que também carrega energia. A molécula formada é chamada Ácido Fumárico.";
}

function texto_ciclo_8(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "O Ácido Fumárico recebe uma molécula de H20, gerando o Ácido Málico.";
}

function texto_ciclo_9(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Na última reação, o Ácido Málico sofre oxidação e se torna o oxaloacetato, molécula que iniciou todo o processo.";
	tx2.innerHTML= 'Essa molécula se juntara com o piruvato, e o ciclo de krebs se iniciará novamente';
}

function texto_oxid_0(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'A Fosforilação Oxidativa é a última fase da respiração celular, sendo a responsável pela maior parte da produção de ATP. Esta é uma etapa acontece nas cristas mitocondriais, e apenas na presença de oxigênio, ou seja, é uma etapa aeróbia.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
}


function texto_oxid_1(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= '';
	tx2.innerHTML= 'Durante o ciclo de krebs, a energia produzida foi armazenada em NADH, FADH e outras moléculas. Essas moléculas agora serão utilizadas para a produção de ATP, que armazenará essa energia. Para isso, durante a fosforilação oxidativa, essas moléculas serão quebradas, liberando prótons de hidrogênio e elétrons.';
	tx3.innerHTML= 'Esses elétrons serão utilizados para bombear os prótons contra o gradiente de concentração, para o espaço intermembrana da mitocôndria.';
}

function texto_oxid_2(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'Esses prótons apenas podem atravessar a bicamada fosfolipídica passando por uma enzima, chamada ATP Sintase. Ao passarem por ela, esta será acionada com a energia do próton e começará a catalisar a adição de um fosfato para uma molécula de ADP.';
	tx2.innerHTML= 'A energia do próton então será adicionada a essa nova molécula, chamada ATP, que irá armazena-lá. Essa etapa é chamada de Quimiosmose, é responsável pela maior parte da produção de ATP.';
	tx3.innerHTML= 'Após isso, a respiração celular terá sido encerrada, tendo como saldo final a produção de 30 - 32 ATPs.';
}

//Glicolise
function glicolise(){
	texto_glicolise_2();
	nad.play();
	adp.play();
	setTimeout(function(){ nadh.play();}, 2800);
	setTimeout(function(){ atp.play();}, 2800);
	setTimeout(function(){degradacao_glicose.play();}, 2800)
	setTimeout(function(){surgimento_piruvatos.play();}, 2850)
	document.querySelector('.avan').onclick= '';
}
//Ciclo 


function comeco_ciclo(){
	texto_ciclo_0();
	ciclo=0;
}

function piru_acetil(){
	nad_1_ciclo.play();
	coA_1_ciclo.play();
	nadh_1_ciclo.play();
	co2_1.play();
	acetiL_coA_1.play();
	piruvatos_ciclo_1.play();
	document.querySelector('.avan').onclick= acetil_citrato;
	ciclo=1;
	texto_ciclo_1();
}

function acetil_citrato(){
	acido_oxaloacetico_1.play();
	h2o_1.play();
	acetiL_coA_2.play();
	citrato_1.play();
	coA_2_ciclo.play();
	document.querySelector('.avan').onclick= citrato_isocitrato;
	ciclo=2;
	texto_ciclo_2();
}	

function citrato_isocitrato(){
	h2o_2.play();
	citrato_2.play();
	isocitrato_1.play();
	h2o_3.play();
	document.querySelector('.avan').onclick= isocitrato_alfacetoglurato;
	ciclo=3;
	texto_ciclo_3();
}

function isocitrato_alfacetoglurato(){
	nad_2.play();
	isocitrato_2.play();
	alfacetoglurato_1.play();
	nadh_2.play();
	co2_2.play();
	document.querySelector('.avan').onclick= alfacetoglurato_succinio;
	ciclo=4;
	texto_ciclo_4();
}

function alfacetoglurato_succinio(){
	coA_3_ciclo.play();
	nad_3.play();
	alfacetoglurato_2.play();
	siccinio_1.play();
	document.querySelector('.avan').onclick= succinio_succinato;
	ciclo=5;
	texto_ciclo_5();
}

function succinio_succinato(){
	adp_1.play();
	fosfato.play();
	siccinio_2.play();
	succinato_1.play();
	atp_1.play();
	document.querySelector('.avan').onclick= succinato_fumarico;
	ciclo=6;
	texto_ciclo_6();
}

function succinato_fumarico(){
	fad_1.play();
	succinato_2.play();
	fumarico_1.play();
	fadh2_1.play();
	document.querySelector('.avan').onclick= fumarico_malico;
	ciclo=7;
	texto_ciclo_7();
}

function fumarico_malico(){
	fumarico_2.play();
	h2o_4.play();
	malico_1.play();
	document.querySelector('.avan').onclick= malico_oxaloacetico;
	ciclo=8;
	texto_ciclo_8();
}

function malico_oxaloacetico(){
	nad_4.play();
	nadh_4.play();
	acido_oxaloacetico_2.play();
	malico_2.play();
	document.querySelector('.avan').onclick= malico_oxaloacetico;
	ciclo=9;
	texto_ciclo_9();
}

function oxid_nadh(){
	nadh_fosfo_1.play();
	nad_fosfo_1.play();
	h_fosfo_1.play();
	texto_oxid_1();
	document.querySelector('.avan').onclick= geracao_Atp;
	oxid_ch=1;
}

function geracao_Atp(){
	h_fosfo_2.play();
	atp_fosfo_1.play();

	texto_oxid_2();
	document.querySelector('.avan').onclick= geracao_Atp;
	oxid_ch=2;
}