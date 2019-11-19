const botao_pausa= document.querySelector('.pausa_avancar');
var check=false;

function mudar_botao(){
	if(check){
		botao_pausa.src ="../../imgs/play_symbol.png";
		check=false;
	} else{
		botao_pausa.src="../../imgs/pausa_symbol.png";
		check=true;
	}
}

const mitocondria1_animacao=anime({
  targets: '.mitocondria_1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true,
  rotate: [
    {value:'-4deg',
    delay:7000,
    duration: 8000}
  ], 
  translateY: [
    {value: '-8%',
    duration: 8000},
    {value: '2%',
    duration: 8000},
    {value: '12%',
    duration: 8000}
  ],
  translateX:[{
    value:'-5%',
    duration:8000,
    delay:7000
  },
  {
    value: '2%',
    duration: 8000
  }
  ]
});

const mitocondria2_animacao=anime({
  targets: '.mitocondria_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {
      value: '-2%',
      duration: 14000
    },
    {
      value: '2%',
      duration: 14000
    }
  ],
  translateY: [
  {
    value: '6%',
    duration: 13500
  },
  {
    value: '-4%',
    duration: 13500
  }
  ]

});

const mitocondria3_animacao=anime({
  targets: '.mitocondria_3',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX:{
    value: '5%',
    duration: 10000
  },
  translateY:{
    value: '5%',
    duration: 8000
  }
});


const cloroplasto1_animacao=anime({
  targets: '.cloroplastos_1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {
      value: '2%',
      duration: 10000
    },
    {
      value: '-2%',
      duration: 12000
    }
  ],
  translateY: [
    {
      value: '-5%',
      duration: 9000
    },
    {
      value: '7%',
      duration: 11000
    } 
  ]

});

const cloroplasto2_animacao=anime({
  targets: '.cloroplastos_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  rotate:{
    value: '10deg',
    duration: 9000
  },
  // translateX: [
  //   {
  //     value: '2%',
  //     duration: 1000
  //   },
  //   {
  //     value: '-2%',
  //     duration: 1200
  //   }
  // ],
  translateY: [
    // {
    //   value: '-5%',
    //   duration: 900
    // },
    {
      value: '13%',
      duration: 13000
    } 
  ]

});

const cloroplasto3_animacao=anime({
  targets: '.cloroplastos_3',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true,
  rotate: {
    value:'75deg',
    duration: 4000
  },
  translateY:[
    {
      value: '-5%',
      duration: 10000
    },
    {
      value: '3%',
      duration: 12000
    }
  ]
});

const perossixomo_animacao=anime({
  targets: '.perossixomo',
  easing: 'linear',
  loop: true,
  autoplay: true, 
  direction: 'alternate',
  translateX: [
    {
      value: '-10%',
      duration: 10000
    },
    {
      value: '-20%',
      duration: 15000
    }
  ],
  translateY:{
    value: '-2%',
    duration: 8000
  }
});



const lisossomo_animacao=anime({
  targets: '.lisossomo',
  easing: 'linear',
  loop: true,
  autoplay: true,
  translateX: [
    {value: '-5%',
    duration: 9000}, 
    {value: '0%',
    duration: 11000}
  ],
  translateY: [
    {value: '2%',
    duration: 3000}
  ],
  direction: 'alternate'
});
const glioxissomos_animacao=anime({
  targets: '.glioxissomos',
  easing: 'linear',
  loop: true,
  autoplay: true,
  translateX:{
    value: '-2%',
    duration: 6000
  },
  translateY:{
    value: '-2%',
    duration: 6000
  },
  direction: 'alternate'
});
const glioxissomo_1_animacao=anime({
  targets: '.glioxi_1',
  easing: 'linear',
  loop: true,
  autoplay: true,
  translateX:{
    value: '-3%',
    duration: 7500
  },
  translateY:{
    value: '-3%',
    duration: 7500
  },
  direction: 'alternate'
});
const glioxissomo_2_animacao=anime({
  targets: '.glioxi_2',
  easing: 'linear',
  loop: true,
  autoplay: true,
  translateX:{
    value: '3%',
    duration: 8000
  },
  translateY:{
    value: '-3%',
    duration: 8000
  },
  direction: 'alternate'
});
const glioxissomo_3_animacao=anime({
  targets: '.glioxi_3',
  easing: 'linear',
  loop: true,
  autoplay: true,
  translateX:{
    value: '-3%',
    duration: 8000
  },
  translateY:{
    value: '1%',
    duration: 8000
  },
  direction: 'alternate'
});

const ribossomosLivres1_animacao=anime({
  targets: '.ribossomo_livre1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: function(){
    let a=anime.random(1, 4);
    let b= ''+a;
    return b+'%';
  },
  translateY: function(){
    let a=anime.random(3, 5);
    let b= ''+a;
    return b+'%';
  },
  duration: anime.stagger(3000)
});

const ribossomosLivres2_animacao=anime({
  targets: '.ribossomo_livre2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: function(){
    let a=anime.random(-5, -2);
    let b= ''+a;
    return b+'%';
  },
  translateY: function(){
    let a=anime.random(-3, -2);
    let b= ''+a;
    return b+'%';
  },
  delay: 500,
  duration: anime.stagger(4000)
});


function start(){
  mudar_botao();
  // membrana_animacao.play();
  // citoplasma_animacao.play();
  mitocondria1_animacao.play();
  mitocondria2_animacao.play();
  mitocondria3_animacao.play();
  cloroplasto1_animacao.play();
  cloroplasto1_animacao.play();
  cloroplasto2_animacao.play();
  cloroplasto3_animacao.play();
  perossixomo_animacao.play();
  lisossomo_animacao.play();
  // ribossomosLivres1_animacao.play();
  // ribossomosLivres2_animacao.play();
  botao_pausa.onclick= stop;
}

function stop(){
  mudar_botao();
  // membrana_animacao.pause();
  // citoplasma_animacao.pause();
  mitocondria1_animacao.pause();
  mitocondria2_animacao.pause();
  mitocondria3_animacao.pause();
  cloroplasto1_animacao.pause();
  cloroplasto1_animacao.pause();
  cloroplasto2_animacao.pause();
  cloroplasto3_animacao.pause();
  perossixomo_animacao.pause();
  lisossomo_animacao.pause();
  // ribossomosLivres1_animacao.pause();
  // ribossomosLivres2_animacao.pause();
  botao_pausa.onclick= start;
}

// stop();

botao_pausa.onclick= stop;

