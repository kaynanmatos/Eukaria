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

const membrana_caminho= "M373.921,253.041c-1.883-40.581,4.579-49.791-25.049-118.206 c-19.392-49.809-12.205-58.502-81.579-109.941c-6.626-2.561-0.96-19.227-68.5-24.324c-26.206-2.389-51.071,2.772-71.914,14.925 c-9.544,5.565-11.629,2.862-25.609,18.617c-4.673,3.797-4.937,1.055-13.61,10.611c-4.693,3.35-11.725,1.804-17.41,9.277 c-7.32,4.539-12.49,9.706-19.776,15.412h-0.001C22.502,91.315,13.333,86,0.87,165.077c-3.587,35.538,4.018,73.495,20.862,104.138 c8.092,14.72,18.854,27.072,28.35,37.972c15.286,17.542,11.918,27.146,56.836,56.471c34.293,26.029,54.082,40.071,115.223,40.071 c3.277,0,6.559-0.093,9.83-0.28c46.806-2.665,79.779-8.449,117.887-60.857c7.676-10.072,12.892-14.092,17.309-30.966 C374.612,291.153,370.667,285.333,373.921,253.041z";
const membrana_caminho2='M373.921,253.041c2.285-65.041-10.311-80.351-25.049-118.206 c-19.392-49.809-46.84-86.799-81.579-109.941c-20.568-13.702-44.256-22.113-68.5-24.324c-26.206-2.389-51.071,2.772-71.914,14.925 c-20.546,8.505-17.711,12.2-25.609,18.617c-7.77,4.388-9.088,7.383-13.61,10.611c-10.993,4.777-9.705,6.459-15.012,9.75 c-13.481,5.694-14.888,9.233-22.174,14.939h-0.001C3,111,4.886,125.29,0.87,165.077c-3.87,58.59,4.018,73.495,20.862,104.138 c14.518,30.535,18.854,27.072,28.35,37.972c15.286,17.542,34.309,39.373,56.836,56.471c49.415,36.009,74.854,40.071,115.223,40.071 c3.277,0,6.559-0.093,9.83-0.28c80.529-8.449,90.875-25.415,117.887-60.857c16.142-17.092,13.5-20.49,17.309-30.966 C381.5,271,374.687,269.564,373.921,253.041z';


const citoplasma_caminho= "M61.79,83.864c11.506-9.01,24.64-15.711,36.534-24.201c23.176-28.663,24.19-20.375,37.8-28.312 c91.051-27.328,85.522-14.811,120.992,8.818s70.551,82.164,74.65,101.324c30.734,68.007,22.035,73.972,23.818,112.398 c0.805,17.355,0.269,35.134-5.668,51.461c-3.425,9.417-8.584,18.144-14.658,26.113c-23.925,44.202-64.049,51.363-104.331,53.657 c-62.26,4.545-80.775-11.693-112.913-36.087c-20.315-15.419-37.339-34.681-54.094-53.909c-9.537-10.946-19.11-22.031-26.104-34.754 C7.5,173.5,21.5,119,61.79,83.864z";
const citoplasma_caminho2= "M61.79,83.864c10.248-14.913,23.776-19.766,36.534-24.201c26.459-18.305,36.839-29.054,37.8-28.312 c36.818-21.469,85.522-14.811,120.992,8.818s67.11,44.944,74.65,101.324c13.956,35.846,27.398,56.007,23.818,112.398 c0.805,17.355,10.416,26.109-5.668,51.461c-3.425,9.417,2.584,11.648-14.658,26.113c-24.457,32.089-37.758,54.96-104.331,53.657 c-40.281,2.294-59.427,6.378-112.913-36.087c-20.315-15.419-29.347-20.702-54.094-53.909c-9.537-10.946-14.587-6.459-26.104-34.754 C7.879,205.909,22.333,110,61.79,83.864z";

const membrana_animacao= anime({
  targets: '.membrana',
  d: [
    {value: membrana_caminho,
    duration: 1100},
    
    {value: membrana_caminho2,
    duration: 1100}
  ],
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true
});

const citoplasma_animacao= anime({
  targets: '.citoplasma',
  d: [
    {value: citoplasma_caminho,
    duration: 1100},
    {value: citoplasma_caminho2,
    duration: 1100}
  ],
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true
});


const mitocondria1_animacao=anime({
  targets: '.mitocondria_1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true,
  rotate: [
    {value:'4deg',
    duration: 8000},
    {value:'4deg',
    duration:8000},
  ], 
  translateY: [
    {value: '-10%',
    duration: 8000},
    {value: '2%',
    duration: 8000}
  ]
});

const mitocondria2_animacao=anime({
  targets: '.mitocondria_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '-25%',
    duration: 16000},
    {value: '-40%',
    duration: 14000}
  ],
  translateY: {
    value: '-15%',
    delay: 9990,
    duration: 14000
  }
});

const mitocondria3_animacao=anime({
  targets: '.mitocondria_3',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '15%',
    delay: 9990,
    duration: 10000}
    // {value: '-45%',
    // duration: 1000}
  ],
  translateY: [
    {value: '15%',
    duration: 12000},
    {value: '17%',
    duration:10000}
  ],
  rotate:[ 
    {value:'-120deg',
    duration: 12000},
    {value: '-130deg',
    duration: 10000}
  ]
});

const mitocondria4_animacao=anime({
  targets: '.mitocondria_4',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  rotate: [
    {value: '-3deg',
    delay: 5500,  //delay: 7990,
    duration: 8000}
  ],
  translateY: [
    {value: '5%',
    duration: 8000},
    {value: '6%',
    duration: 10000}
    // {value: '17%',
    // duration:8000}
  ],
  translateX:[ 
    {value:'3%',
    delay: 6500,
    duration: 12000}
    // {value: '-130deg',
    // duration: 8000}
  ]
});

const centriolo1_animacao=anime({
  targets: '.centriolo_1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '-5%',
    duration: 10000},
    {value: '5%',
    duration: 10000}
  ],
  translateY: [
    {value: '-5%',
    duration: 9000},
    {value: '5%',
    duration: 9000} 
  ]
  // rotate:[ 
  //   {value:'-deg',
  //   duration: 500} //duration: 5000}
  // ]
});

const centriolo2_animacao=anime({
  targets: '.centriolo_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  rotate: [
    {value:'3deg',
    duration:8000} 
  ], 
  translateX: [
    {value: '-12%',
    delay:7990, 
    duration:8000}  
  ]
});

const perossixomo1_animacao=anime({
  targets: '.perossixomo_1',
  easing: 'linear',
  loop: true,
  autoplay: true, 
  direction: 'alternate',
  translateX: [
    {value: '-10%',
    delay: 7990,  //delay: 7990, 
    duration: 10000}
  ],
  translateY: [
    {value: '10%',
    duration: 8000},  //duration: 8000}, 
    {value: '15%',
    delay: 7990,  //delay: 7990,
    duration: 8000},  //duration: 8000},
  ]
});

const perossixomo2_animacao=anime({
  targets: '.perossixomo_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '25%',
    delay: 4990, 
    duration: 20000},  
    {value: '40%',
    duration: 6000}, 
    {value: '50%',
    duration: 15000} 
  ],
  translateY: [
    {value: '-5%',
    duration: 5000}, 
    {value: '-18%',
    duration: 20000},
    {value: '-10%',
    delay: 5900, 
    duration: 15000} 
  ]
});

const lisossomo1_animacao=anime({
  targets: '.lisossomo_1',
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
    {value: '10%',
    duration: 13000} ,
    {value: '12%', 
    duration: 6000}
  ],
  direction: 'alternate'
});

const lisossomo2_animacao=anime({
  targets: '.lisossomo_2',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '-7%',
    duration: 25000},  
    {value: '5%',
    duration: 25000}
  ],
  translateY: [
    {value: '-3%',
    duration: 15000}, 
    {value:'3%',
    duration: 25000}
  ]
});

const lisossomo3_animacao=anime({
  targets: '.lisossomo_3',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: [
    {value: '10%',
    duration: 14000}, 
    {value: '0%',
    duration: 14000}
  ],
  translateY: [
    {value: '10%',
    duration: 14000},
    {value: '15%',
    duration: 14000} 
  ]
});



const ribossomosLivres1_animacao=anime({
  targets: '.ribossomo_livre1',
  easing: 'linear',
  direction: 'alternate',
  loop: true,
  autoplay: true, 
  translateX: function(){
    let a=anime.random(3, 8);
    let b= ''+a;
    return b+'%';
  },
  translateY: function(){
    let a=anime.random(3, 8);
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
    let a=anime.random(-5, -2);
    let b= ''+a;
    return b+'%';
  },
  delay: 500,
  duration: anime.stagger(1000)
});


function start(){
  mudar_botao();
  membrana_animacao.play();
  citoplasma_animacao.play();
  mitocondria1_animacao.play();
  mitocondria2_animacao.play();
  mitocondria3_animacao.play();
  mitocondria4_animacao.play();
  centriolo1_animacao.play();
  centriolo2_animacao.play();
  perossixomo1_animacao.play();
  perossixomo2_animacao.play();
  lisossomo1_animacao.play();
  lisossomo2_animacao.play();
  lisossomo3_animacao.play();
  ribossomosLivres1_animacao.play();
  ribossomosLivres2_animacao.play();
  botao_pausa.onclick= stop;
}

function stop(){
  mudar_botao();
  membrana_animacao.pause();
  citoplasma_animacao.pause();
  mitocondria1_animacao.pause();
  mitocondria2_animacao.pause();
  mitocondria3_animacao.pause();
  mitocondria4_animacao.pause();
  centriolo1_animacao.pause();
  centriolo2_animacao.pause();
  perossixomo1_animacao.pause();
  perossixomo2_animacao.pause();
  lisossomo1_animacao.pause();
  lisossomo2_animacao.pause();
  lisossomo3_animacao.pause();
  ribossomosLivres1_animacao.pause();
  ribossomosLivres2_animacao.pause();
  botao_pausa.onclick= start;
}

// stop();

botao_pausa.onclick= stop;

