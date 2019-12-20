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

//Glicolise

const adp=anime({
  targets:'.adp',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:1000
    },
    {
      value:0,
      duration:500,
      delay:1800
    }
  ],
  duration:1000,
  translateX: [
    {
      value:'-150%',
      duration:1200
    }
  ],
  translateY: [
    {
      value:'300%',
      duration:1200
    }
  ]
})

const nad=anime({
  targets:'.nad',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:1000
    },
    {
      value:0,
      duration:500,
      delay:1800
    }
  ],
  duration:1000,
  translateX: [
    {
      value:'150%',
      duration:1200
    }
  ],
  translateY: [
    {
      value:'300%',
      duration:1200
    }
  ]
})

const nadh=anime({
  targets:'.nadh',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:1000
    }
  ],
  duration:1000,
  translateX: [
    {
      value:'100%',
      duration:1200
    }
  ],
  translateY: [
    {
      value:'100%',
      duration:1200
    }
  ]
})

const atp=anime({
  targets:'.atp',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:1000
    }
  ],
  duration:1000,
  translateX: [
    {
      value:'-100%',
      duration:1200
    }
  ],
  translateY: [
    {
      value:'100%',
      duration:1200
    }
  ]
})

const degradacao_glicose=anime({
  targets:'.glicose',
  easing:'linear',
  autoplay:false,
  opacity:0,
  duration:500
})

const surgimento_piruvatos=anime({
  targets:'.piruvatos',
  easing:'linear',
  autoplay:false,
  opacity:1,
  duration:500
})

//Ciclo de Krebs
//reacao 1
const nad_1_ciclo=anime({
  targets:'.nad_1_ciclo',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:100
    },
    {
      value:0,
      delay:800,
      duration:200
    }
  ],
  translateY:'5%',
  translateX:'5%',
  duration:500
})

const coA_1_ciclo=anime({
  targets:'.coA_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:100
    },
    {
      value:0,
      delay:800,
      duration:200
    }
  ],
  translateY:'5%',
  translateX:'-5%',
  duration:500
})

const nadh_1_ciclo=anime({
  targets:'.nadh_1_ciclo',
  easing:'linear',
  autoplay:false,
  delay:1000,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    },
    {
      value:0,
      delay:900,
      duration:200
    }
  ],
  translateY:'5%',
  translateX:'-5%',
  duration:500
})

const co2_1=anime({
  targets:'.co2_1',
  easing:'linear',
  autoplay:false,
  delay:1000,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    },
    {
      value:0,
      delay:800,
      duration:200
    }
  ],
  translateY:'5%',
  translateX:'5%',
  duration:500
});

const acetiL_coA_1=anime({
  targets:'.acetiL_coA',
  easing:'linear',
  autoplay:false,
  delay:1000,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    }
  ],
  translateY:[
    {
      value:'-5%',
      duration:10
    },
    {
      value:'-3%',
      duration:500
    }
  ],
  duration:500
});

const piruvatos_ciclo_1=anime({
  targets:'.piruvatos_ciclo',
  easing:'linear',
  autoplay:false,
  delay:800,
  opacity:0,
  duration:500
});

//reacao 2

const acido_oxaloacetico_1=anime({
  targets:'.acido_oxaloacetico_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    },
    {
      value:0,
      duration:200,
      delay:600
    }
  ],
  translateX:'5%',
  duration:500
});

const h2o_1=anime({
  targets:'.h2o_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    },
    {
      value:0,
      duration:200,
      delay:600
    }
  ],
  translateX:'5%',
  translateY:'5%',
  duration:500
});

const acetiL_coA_2=anime({
  targets:'.acetiL_coA',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
  duration:500
});

const citrato_1=anime({
  targets:'.citrato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:0,
      duration:200,
      delay:800
    },
    {
      value:1,
      duration:200,
    }
  ],
  translateX:[
    {
      value:'-5%',
      duration:10
    },
    {
      value:'-4%',
      delay:1000,
      duration:500
    }
  ],
  duration:500
});

const coA_2_ciclo=anime({
  targets:'.coA_2',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:0,
      duration:200,
      delay:800
    },
    {
      value:1,
      duration:200,
    },
    {
      value:0,
      delay:500,
      duration:200
    }
  ],
  delay:1000,
  translateY:'-5%',
  translateX:'5%',
  duration:500
})

//reacao 3

const h2o_2=anime({
  targets:'.h2o_2',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    },
    {
      value:0,
      duration:200,
      delay:600
    }
  ],
  translateX:'5%',
  translateY:'5%',
  duration:500
});

const citrato_2=anime({
  targets:'.citrato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
  duration:500
});

const isocitrato_1=anime({
  targets:'.isocitrato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    }
  ],
  translateX:'2%',
  delay:1000,
  duration:500
});

const h2o_3=anime({
  targets:'.h2o_3',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200,
      delay:1000
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
  delay:1000,
  translateX:'5%',
  translateY:'-5%',
  duration:500
});

// reacao 4

const nad_2=anime({
  targets:'.nad_2',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    },
    {
      value:0,
      duration:200,
      delay:600
    }
  ],
  translateY:'5%',
  duration:500
});

const isocitrato_2=anime({
  targets:'.isocitrato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
});

const alfacetoglurato_1=anime({
  targets:'.alfacetoglurato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    }
  ],
  translateY:'5%'
});

const nadh_2=anime({
  targets:'.nadh_2',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
  delay:1000,
  translateX:'-5%',
  translateY:'5%',
  duration:500
});

const co2_2=anime({
  targets:'.co2_2',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200,
      delay:800
    },
    {
      value:0,
      duration:200,
      delay:800
    }
  ],
  delay:1000,
  translateX:'-5%',
  translateY:'-7%',
  duration:500
});

// reacao 5

const coA_3_ciclo=anime({
  targets:'.coA_3',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:100
    },
    {
      value:0,
      delay:800,
      duration:300
    }
  ],
  translateY:'5%',
  translateX:'-5%',
  duration:500
})

const nad_3=anime({
  targets:'.nad_3',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:200
    },
    {
      value:0,
      duration:300,
      delay:800
    }
  ],
  translateX:'5%',
  duration:500
});

const alfacetoglurato_2=anime({
  targets:'.alfacetoglurato_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay:800
    }
  ],
});

const siccinio_1=anime({
  targets:'.siccinio_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300,
      delay:800
    }
  ],
  translateY:'5%',
  translateX:'-3%',
  duration:1000
});

// reacao 6

const adp_1=anime({
  targets:'.adp_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:110
    },
    {
      value:0,
      delay:800,
      duration:300
    }
  ],
  translateY:'-5%',
  translateX:'2%',
  duration:500
})

const fosfato=anime({
  targets:'.fosfato',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:110
    },
    {
      value:0,
      delay:800,
      duration:300
    }
  ],
  translateY:'-5%',
  translateX:'-2%',
  duration:500
})

const siccinio_2=anime({
  targets:'.siccinio_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay:800
    }
  ],
});

const succinato_1=anime({
  targets:'.succinato',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300,
      delay:800
    }
  ],
  translateY:[
    {
      value:'-2%',
      duration:10
    },
    {
      value:'1%',
      duration: 910
    }
  ],
  translateX:'-5%',
  duration:1000,
  delay:800
});

const atp_1=anime({
  targets:'.atp_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300,
      delay:800
    },
    {
      value:0,
      duration:300,
      delay:800
    }
  ],
  translateY:[
    {
      value:'-10%',
      duration: 910
    }
  ],
  translateX:'-5%',
  delay:1000,
  duration:1000
});

// reacao 7

const fad_1=anime({
  targets:'.fad_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300
    },
    {
      value:0,
      duration:300,
      delay:600
    }
  ],
  translateY:[
    {
      value:'5%',
      duration: 500
    }
  ],
  translateX:'10%',
  duration:500
});

const succinato_2=anime({
  targets:'.succinato',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay:890
    }
  ],
});

const fumarico_1=anime({
  targets:'.fumarico',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300
    }
  ],
  translateY:[
    {
      value:'-5%',
      duration: 500
    }
  ],
  translateX:'-5%',
  delay:900,
  duration:500
});

const fadh2_1=anime({
  targets:'.fadh2_1',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300
    },
    {
      value:0,
      duration:300,
      delay:600
    }
  ],
  translateY:[
    {
      value:'-10%',
      duration: 500
    }
  ],
  translateX:'-5%',
  delay:900,
  duration:500
});

// reacao 8

const fumarico_2=anime({
  targets:'.fumarico',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay:890
    }
  ],
});

const h2o_4=anime({
  targets:'.h2o_4',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300
    },
    {
      value:0,
      duration:300,
      delay:600
    }
  ],
  translateY:'-15%',
  translateX:'15%',
  duration:400
});

const malico_1=anime({
  targets:'.malico',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:300,
    }
  ],
  translateY:[
    {
      value:'-15%',
      duration: 500
    }
  ],
  delay:900,
  duration:800
});

// reacao 9

const nad_4=anime({
  targets:'.nad_4',
  autoplay:false,
  easing:'linear',
  opacity:[
    {
      value:1,
      duration:300
    },
    {
      value:0,
      delay:600,
      duration:300
    }
  ],
  translateX:'-5%',
  translateY:'5%',
  duration:300
})
const malico_2=anime({
  targets:'.malico',
  easing:'linear',
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay:810
    }
  ]
});
const nadh_4=anime({
  targets:'.nadh_4',
  autoplay:false,
  easing:'linear',
  opacity:[
    {
      value:1,
      duration:300,
      delay:900
    },
    {
      value:0,
      delay:1000,
      duration:300
    }
  ],
  translateX:'15%',
  translateY:'-15%',
  duration:500,
  delay:1000
})

const acido_oxaloacetico_2=anime({
  targets:'.acido_oxaloacetico_2',
  autoplay:false,
  easing:'linear',
  opacity:{
      value:1,
      duration:300,
      delay:800
  },
  translateY:'-15%'
})

//Fosforilacao oxidativa

const nadh_fosfo_1=anime({
  targets:'.nadh_fosfo',
  autoplay:false,
  easing:'linear',
  translateX:'2%',
  translateY:'-5%',
  duration:500,
  opacity:{
    delay:1000,
    value:0,
    duration:300
  }
});

const nad_fosfo_1=anime({
  targets:'.nad_fosfo',
  autoplay:false,
  easing:'linear',
  translateX:'2%',
  translateY:'5%',
  delay:1000,
  duration:500,
  opacity:[
    {
      value:1,
      duration:300
    },
    {
      value:0,
      delay:1000,
      duration:300
    }
  ]
});

const h_fosfo_1=anime({
  targets:'.h_fosfo',
  autoplay:false,
  easing:'linear',
  translateX:'2%',
  translateY:'-55%',
  delay:1000,
  duration:2000,
  opacity:{
    value:1,
    duration:300
  }
});

//reacao fosfo 2

const h_fosfo_2=anime({
  targets:'.h_fosfo',
  autoplay:false,
  easing:'linear',
  translateX:[
    {
      value:'2',
      duration:10,
    },
    {
      value:'20%',
      duration:1000
    }
  ],
  translateY:[
    {
      value:'-55%',
      duration:10,
    },
    {
      value:'-5%',
      delay:1500,
      duration:1000
    }
  ],
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      duration:300,
      delay: 3000
    }
  ]
});

const atp_fosfo_1=anime({
  targets:'.atp_fosfo',
  autoplay:false,
  easing:'linear',
  translateY:[
    {
      value:'15%',
      duration:1000,
      delay:4000
    }
  ],
  opacity:[
    {
      value:1,
      duration:300,
      delay: 3500
    }
  ]
});
