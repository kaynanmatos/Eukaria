const botao_pausa= document.querySelector('.pausa_avancar');
var check=false;
const membrana_1='M573,284c-28.8-27.4-150.056-6.5-187.956-3c-32.8,3-121.703-43-196.044,0 c-31.5,28.5-47,99.934-47,138.234c0,23.3,30.4,81.166,41,101.766c10.2,19.9,46,37.6,64,51c25.6,19.1,114.1-20,146-20 c44.2,0,166.7,24.2,191,4c29.3-24.4,41.8-76.8,44-130.6C629.8,384.1,603.6,313.1,573,284z';
const membrana_2='M573,284c-103.333,11.667-133.1,122.5-171,126c-32.8,3-5-181.667-213-129 c-64.667,23.333-70.667,97.981-70.667,136.281c0,23.3,40.067,99.786,50.667,120.386c10.2,19.9,50,28.667,78,34.333 c130.667,9,122.1-130,154-130c44.2,0,96,130.419,183,114c99-17,112.8-73.2,115-127C689,387,695,274.333,573,284z';

const citoplasma_1='M542,307c-24-22.8-125.756-0.9-156.956,2c-28,2.6-102.71-41.333-155.044-8 c-25.667,2.667-53.667,84.581-53.667,116.281c0,40.7,34.367,101.619,64.667,124.319c84.667,30.067,118.807-27.6,146.607-27.6 c38.5,0,120.393,40,174.726,16.333c24.1-20,31.433-79.867,33.333-126.667C590.333,335,567.9,331.6,542,307z';
const citoplasma_2='M593,301c-111,14-158.133,113.381-189.333,116.281c-28,2.6-68-165.614-173.667-116.281 c-101,29.333-83.667,81.633-83.667,113.333c0,40.7,64.667,131.584,94.667,127.266c84.667,30.067,132.128-106.764,159.928-106.764 c38.5,0,144.072,137.583,202.738,98.831c52.667-18,79.433-58.533,81.333-105.333C679.667,359.667,645,305,593,301z';


function mudar_botao(){
  if(check){
    botao_pausa.src ="../../imgs/play_symbol.png";
    check=false;
  } else{
    botao_pausa.src="../../imgs/pausa_symbol.png";
    check=true;
  }
}

  const separação_citoplasma= anime({
    targets: '.citoplasma',
    easing: 'linear',
     d: [
      {
        value: citoplasma_1,
        duration: 2000
      },
      {
        value: citoplasma_2,
        duration: 2000
      }//,
      // {
      //   value: expan_3,
      //   duration: 2000
      // }
    ], 
    opacity:{
      delay: 3900,
      value: 0
    },
    autoplay: false
  })

  const separação_membrana=anime({
    targets: '.membrana',
    easing: 'linear',
    d: [
      {
        value: membrana_1,
        duration: 2000
      },
      {
        value: membrana_2,
        duration: 2000
      }//,
      // {
      //   value: expan_3,
      //   duration: 2000
      // }
    ], 
    opacity:{
      delay: 4000,
      value: 0
    },
    autoplay: false
  })
  const separada=anime({
    targets: '.cell_filha',
    easing: 'linear',
    opacity: 1,
    delay: 3990,
    autoplay: false
  })

  const sep11=anime({
    targets: '.memb_esquerda',
    d: 'M380.25,413.083c0,0,16.75-184.75-191.25-132.083c-64.667,23.333-70.667,97.981-70.667,136.281 c0,23.3,40.067,99.786,50.667,120.386c10.2,19.9,50,28.667,78,34.333c130.667,9,133.736-122.928,133.736-122.928 c-0.236-9.947-2.486-14.322-1.736-18.822c-0.167-8.253,0.881-8.253,0.833-8.708C379.625,419.958,379.708,418.5,380.25,413.083z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: false
  })
  const sep12=anime({
    targets: '.cito_esquerda',
    d: 'M366,414c-10.493-27.286-30.333-162.333-136-113c-101,29.333-83.667,81.633-83.667,113.333 c0,40.7,64.667,131.584,94.667,127.266c84.667,30.067,120-74.599,126.5-92.974c1.168-1.769,2.437-6.75,1.75-10.75 c-0.294-6.405-0.913-7.427-1.5-13.875C367.625,420.793,366.512,414.795,366,414z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: false
  })

  const sep21=anime({
    targets: '.memb_direita',
    d: 'M573,284c-99.854,11.274-109,57.667-129,108c-7.333,23-8.667,48.333-0.805,66.623 C465.862,499.956,501.635,571.544,584,556c99-17,112.8-73.2,115-127C689,387,695,274.333,573,284z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: false
  })
  const sep22=anime({
    targets: '.cito_direita',
    d: 'M593,301c-107.65,13.578-128,78-139,104c0.587,6.449-2.668,35.467,3.832,41.467 c8.834,25.866,90.398,123.817,145.834,87.199c52.667-18,79.433-58.533,81.333-105.333C679.667,359.667,645,305,593,301z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: false
  })

  const sep2=anime({
    // targets: '.direita',
    d: 'M764.215,342.432c-266.121-56.521-254.333,122.833-265.333,177.063c0.733,6.106-2.667,9.437,2,20.937 c2.333,52.667-69.897,202.136,268.902,202.281c131.431,0.056,115.773-146.027,118.431-210.46 C890.258,482.643,877.215,366.432,764.215,342.432z',
    delay: 4500,
    easing: 'linear',
    duration: 1000,
    autoplay: false
  })


function start(){
  mudar_botao();
  botao_pausa.onclick= stop;
}

function stop(){
  mudar_botao();
  botao_pausa.onclick= start;
}

botao_pausa.onclick= stop;

  //Prófase

var condensar=anime({
  targets: '.dna',
  d: 'M418.249,348.85 c-3.3-0.4,1.307,0.694-1.593-1.006c-2.9-1.6,3.856,2.925,3.656-0.375c0-0.4,5.269-0.075,5.469-0.375 c0.2-0.4-2.944-1.965-2.544-2.165c2.2-1.2-10.612,1.54-8.112,1.54c0.7,0-3.684-3.869-3.084-3.469c1.7,1,1.8,3.5,1.7,5.5 c2.3-0.3,4.5-0.6,6.8-0.9c0.2,0.9,0.1,1.8-0.3,2.6c0.2-0.6,0.7-1.1,1.2-1.5c0.3,2-0.11-3.457-1.41-1.857 c-0.2,0.3-0.781,3.241-1.181,3.341s2.106,0.178,1.806-0.122c-2-1.4-7.115,1.138-6.715-1.262c0.4-2.6,3.7-3.8,6.3-3.4 c0.4,0.1,0.8,0.2,1,0.5s0.1,0.6,0,0.9c-0.4,1.5-1.5,2.8-3,3.4c-0.6,0.3-1.3,0.4-2,0.2c-1.6-0.3-2.7-2-2.8-3.7 c-0.1-2,1.3-4,3.2-4.6c1.9-0.6,4.3,0.4,5,2.3s-0.4,4.3-2.3,4.9c-0.9,0.2-2,0-2.3-0.9c-0.2-0.7,0.4-1.5,1.1-1.7s1.5-0.1,2.2,0.2 c2.3,0.7,4.5,2,6.2,3.7c0.6,0.6-8.172-3.806-8.072-3.006c0.3,2.1,3.191-0.278,1.191,0.122c-3.3,0.6-3.519,8.785-5.119,5.785 c-0.6-1.1-0.7-2.3-0.5-3.5c0.3-2.2,1.7-4.4,3.8-5.3c2.1-1,4.7-0.6,6.3,0.9c0.7,0.7,1.2,1.5,1.2,2.5c-0.1,1.2-0.9,2.1-1.8,2.9 c-2.6,2.3-0.494-5.55-3.794-4.55c-1.7,0.5,2.584,0.725,1.284-0.575c-0.5-0.5-4.164,5.086-4.364,4.386 c-1.1-4.2-6.127-5.161-2.327-7.361c1.4-0.9,3.2-1.5,4.8-1c1.1,0.4,1.8,1.3,2.5,2.2c1.5,1.8,2.8,4.1,2.4,6.4 c-0.3,1.4-4.697-1.944-5.697-0.844c-2.5,2.6,4.056-3.75,0.656-2.75c-1.6,0.5-0.356,4.406-1.656,3.406 c-0.7-0.5-0.013,0.05-0.313-0.75c-1.6-3.9-0.587,3.894,1.313,0.094c1.1-2.2-3.152-1.841-0.652-2.041c1-0.1-2.65-7.115-1.75-6.715 c3.7,1.6,6.6,4.9,7.6,8.8c-2.3,0.1-4.7-0.9-6.3-2.5c-0.7-0.7-1.3-1.6-1.3-2.5c-0.1-1.3,0.8-2.4,1.8-3.3c1.9-1.7,1.1,3.4,2.6,5.5 c1,1.4,4.8-2.5,4-0.9c-1.3,2.4-3.7,4.4-6.4,4.2c-0.6,0-1.1-0.2-1.6-0.5c-1.3-1.1-0.4-3.2,0.9-4.3c0.8-0.7,1.8-1.4,2.9-1.5 s2.3,0.4,2.7,1.4c0.4,0.9,0.1,1.9-0.3,2.7c-1.3,2.9-4.3,4.9-7.5,5.1c-0.6,0-1.4-0.1-1.6-0.7c-0.1-0.4,0-0.8,0.1-1.1 c0.6-1.6,1.4-3.1,2.6-4.3c1.2-1.1,3-1.8,4.6-1.4c2.8,0.7,4.1,4.2,3,6.9c-1,2.7,0.841-6.499-1.859-5.699 c-2.2,0.7,2.531-2.007,0.931-3.707c-0.6-0.7-1.984,6.419-2.284,5.519c-0.8-2.5-2.266,3.234-1.466,0.734 c0.8-2.5-6.922-7.647-4.322-7.447c1,0,2,0.4,3,0.9c2.6,1.2,5.1,3,6.2,5.6c1.4,3.4-6.766-8.811-9.566-6.511 s3.681,0.343-0.019,0.343c-2.1,0,1.101,1.461-0.199-0.139c-1.1-1.3,0.819,1.356,0.719-0.344c-0.2-3.2-2.069,2.975-0.969-0.125 s1.987,7.944,5.188,7.344c2.7-0.5-2.653-9.969-0.153-8.969c5.8,2.4-5.554,5.725,0.246,8.125',
  duration: 1000,
  easing: 'linear',
  opacity: 0,
  autoplay: false
});

var condensar2=anime({
  targets: '.acido_nucl1',
  d: 'M401.86,376.251 c0.417,2.084-7.922-12.762-6.575-11.118c0.967,1.18,2.134,2.182,3.35,3.104c4.736,3.591,10.323,6.051,16.169,7.12 c1.265,0.231,2.886,0.232,3.465-0.916c0.111-0.22,0.168-0.483,0.081-0.713c-0.16-0.425-0.697-0.545-1.151-0.576 c-2.509-0.174-5.001,0.402-7.473,0.865c-2.472,0.463-5.044,0.812-7.482,0.195c-2.438-0.617-4.731-2.412-5.236-4.876 c-0.05-0.246-0.081-0.51,0.018-0.74c0.258-0.599,1.112-0.552,1.747-0.404c1.837,0.429,3.674,0.857,5.512,1.286 c2.715,0.633,5.477,1.285,7.882,2.693c2.015,1.18,3.792,2.892,6.065,3.425c1.245,0.292-16.322,0.746-15.047,0.654 c0.64-0.046,1.507-2.298,1.563-2.938c-6.357-2.951,6.056-4.42-0.745-6.114c-2.164-0.539-4.456-0.992-6.173-2.417 c-1.469-1.219-2.331-3.005-3.08-4.761c-1.333-3.123,9.499,10.829,7.314,8.229c-0.644-0.766-3.501,2.368-3.63,1.375 c-0.209-1.616,0.015-0.43,1.188-1.563c1.654-1.598-0.39,1.473,0.326-0.714c-2.064,0.473-4.258-4.517-4.887-2.495 c-0.39,1.254-3.394-4.119-3.252-2.813c0.581,5.345,7.179,3.535,3.313,7.271c-0.352,0.341,1.218,0.459,1.125,0.94 c-0.191,0.982-3.39-4.396-2.5-3.94c4.562,2.336,0.747,4.796,4.049,8.716c0.73,0.866,1.475,1.739,2.405,2.386 c1.034,0.72,2.252,1.128,3.472,1.445c2.118,0.55,4.301,0.849,6.489,0.89c0.532,0.01,1.092-0.002,1.554-0.266 c0.45-0.256-8.271-6.865-7.907-7.234c1.081-1.095,4.926,2.841,6.438,3.125s-9.524-7.504-8.183-6.75',
  easing: 'linear',
  duration: 1200,
  opacity: 0,
  autoplay: false
})

var condensar3=anime({
  targets: '.acido_nucl2',
  d: 'M436.013,358.805 c0.088-0.091-4.584,4.682,3.821,8.245c-0.4-4.8-5.433-2.583-5.833-7.383c-0.1-1.3-0.433,4.833-0.833,3.633 c-0.2-0.7,0.767-5.867,0.467-6.567c-1.9-3.9,3.433,2.767,1.533-1.133c-0.2-0.3-3.101-2.538-2.801-2.838 c2.5,0-3.099-1.028-1.699,1.072c4.6,6.8-3.026-12.733,0.674-5.333c2.5,5.1,4.7,10.5,5.1,16.2c0.2,2.1,3.026-6.8,1.726-5.2 c-1.4,1.7,2.42,1.3,0.22,0.9s-1.679,2.941-3.479,1.641c-3.1-2.2,1.059,1.359-1.741-1.341c-4.2-4.1,8.7,3.4,5-1.2 c-2.5-3.1-1.038,4.9-2.638,1.2c-1-2.3-0.704,2.941,1.096,1.341c1.5-1.3-4.516-4.941-2.616-4.141 c2.2,0.9-2.008,0.367-0.008,1.767c8,5.8-7.767-9.433-0.367-2.933c3.3,2.9,3.808,3.367,7.508,5.767 c-2.808-4.6-7.374-3.4-2.974-3',
  duration: 1200,
  easing: 'linear',
  opacity: 0,
  autoplay: false
})

var cromossomos=anime({
  targets: '.cromossomo',
  opacity: 1,
  duration: 1000,
  easing: 'linear',
  autoplay: false
})

var desaparece=anime({
  targets: '.nucleotideo',
  opacity: 0,
  duration: 200,
  easing: 'linear',
  autoplay: false
})

var centr1=anime({
  targets: '.centr1',
  translateY: '-11%',
  translateX: [
    {value: '3%'},
    {value: '6%'}
  ],
  easing: 'linear',
  duration: 2500 ,
  autoplay: false
})

var centr2=anime({
  targets: '.centr2',
  translateY: '5%',
  translateX: '-3%',
  easing: 'linear',
  duration: 2500,
  autoplay: false
})

  //Prometáfase

var nucleo=anime({
  targets: '.nucl',
  opacity: 0,
  duration: 1000,
  autoplay: false
})

var mito_1=anime({
  targets: '.mito1',
  easing: 'linear',
  duration: 3000,
  translateY: '-8%',
  translateX: '-3%',
  autoplay: false
})

var mito_2=anime({
  targets: '.mito2',
  easing: 'linear',
  duration: 3000,
  translateY: '2%',
  autoplay: false
})

//  Metáfase

const cent_desp_1=anime({
  targets: '.centr1',
  opacity: 0,
  duration: 5000,
  autoplay: false,
  delay: 2000
})
const cent_desp_2=anime({
  targets: '.centr2',
  opacity: 0,
  duration: 5000,
  autoplay: false,
  delay: 2000
})

const centralizar_1=anime({
  targets: '.C_1',
  translateX: '-1%',
  translateY: '-3%',
  easing: 'linear',
  duration: 2000,
  autoplay: false
  // delay: 2300
})

const centralizar_2=anime({
  targets: '.C_2',
  translateX: '-4.5%',
  translateY: '3%',
  easing: 'linear',
  duration: 2000,
  autoplay: false
  // delay: 2300
})

const centralizar_3=anime({
  targets: '.C_3',
  translateY: '12%',
  translateX: '-2%',
  easing: 'linear',
  duration: 2000,
  autoplay: false
  // delay: 2300
})

const centralizar_4=anime({
  targets: '.C_4',
  translateY: '16%',
  translateX: '-2%',
  easing: 'linear',
  duration: 2000,
  autoplay: false
  // delay: 2300
})

const deform_1=anime({
  targets: '.centr1_d',
  opacity: 1,
  delay: 2100,
  duration: 500,
  easing: 'linear',
  autoplay: false
})

const deform_2=anime({
  targets: '.centr2_d',
  opacity: 1,
  delay: 2100,
  duration: 500,
  easing: 'linear',
  autoplay: false
})

//  Anáfase e Telofase

const mover_esq=anime({
  targets: '.mover_esq',
  easing: 'linear',
  duration: 4300,
  autoplay: false,
  translateX: '-12%'
})

const mover_C_1=anime({
  targets: '.C_1',
  easing: 'linear',
  duration: 4300,
  autoplay: false,
  translateX: '-12%',
  translateY:{
    value:'-3%',
    duration:10
  }
})
const mover_C_2=anime({
  targets: '.C_2',
  easing: 'linear',
  autoplay: false,
  translateX:[
    {
      value:'-4.5%',
      duration:10
    },
    {
      value:'11%',
      duration: 4300
    } 
  ],
  translateY:{
    value:'3%',
    duration:10
  }
})

const mover_C_3=anime({
  targets: '.C_3',
  easing: 'linear',
  duration: 4300,
  autoplay: false,
  translateX: '-14%',
  translateY:{
    value:'12%',
    duration:10
  }
})

const mover_C_4=anime({
  targets: '.C_4',
  easing: 'linear',
  autoplay: false,
  translateX:[
    {
      value:'-2%',
      duration:10
    },
    {
      value:'13%',
      duration: 4300
    } 
  ],
  translateY:{
    value:'16%',
    duration:10
  }
})

const mover_dir_mito1=anime({
  targets: '.mito1',
  easing: 'linear',
  duration: 4200,
  autoplay: false,
  translateX: '15%',
  translateY:{
    value: '-6%',
    duration:10
  }
})
const mover_esq_mito2=anime({
  targets: '.mito2',
  easing: 'linear',
  translateY: {
    value: '2%',
    duration:10
  },
  duration: 4300,
  autoplay: false,
  translateX: '-12%'
})
const mover_dir_Cen1=anime({
  targets: '.centr1',
  easing: 'linear',
  translateY: {
    value:'-11%',
    duration:10
  },
  duration: 4300,
  autoplay: false,
  translateX: '15%'
})

const mover_esq_Cen2=anime({
  targets: '.centr2',
  easing: 'linear',
  translateY: {
    value:'5%',
    duration:10
  },
  duration: 4300,
  autoplay: false,
  translateX: '-12%'
})

const mover_dir=anime({
  targets: '.mover_dir',
  easing: 'linear',
  duration: 4200,
  autoplay: false,
  translateX: '15%'
})


const desfazer_deform=anime({
  targets: '.deformado',
  opacity: 0,
  delay: 2500,
  duration: 5000,
  easing: 'linear',
  autoplay: false
})
const desfazer_centriolo1=anime({
  targets: '.centr2',
  opacity: 1,
  easing: 'linear',
  duration: 2500,
  autoplay: false
})
const desfazer_centriolo2=anime({
  targets: '.centr1',
  opacity: 1,
  easing: 'linear',
  duration: 2500,
  autoplay: false
})

const novo_nucleo_esquerdo_1=anime({
  targets: '.C_1',
  translateY: [
    {
      value:'-3%',
      duration:10
    },
    {
      value:'12%',
      duration:1000
    }
  ],
  translateX: {
    value:'-12%',
    duration: 1
  },
  easing: 'linear',
  // duration: 1000,
  autoplay:false
})
const novo_nucleo_esquerdo_2=anime({
  targets: '.C_3',
  translateY: [
    {
      value:'12%',
      duration:10
    },
    {value:'13%',
    duration:1000
    }
  ],
  translateX: {
    value:'-13%',
    duration: 1
  },
  easing: 'linear',
  // duration: 1000,
  autoplay:false
})

const novo_nucleo_direito_1=anime({
  targets: '.C_2',
  translateY: [
    {
      value:'11%',
      duration:10
    },
    {value:'13%',
    duration:1000
    }
  ],
  translateX: {
    value:'12%',
    duration: 1
  },
  easing: 'linear',
  // duration: 1000,
  autoplay:false
})
const novo_nucleo_direito_2=anime({
  targets: '.C_4',
  // translateY: '15%',
  translateY: [
    {
      value:'13%',
      duration:10
    },
    {
    value:'15%',
    duration:1000
    }
  ],
  translateX: {
    value:'12%',
    duration: 1
  },
  easing: 'linear',
  duration: 1000,
  autoplay:false
})

const formacao=anime({
  targets: '.n_filho',
  opacity: 1,
  duration: 1500,
  delay: 1000,
  easing:'linear',
  autoplay:false
})

//Meiose

//organelas
const organelas=anime({
  targets:'.novos',
  opacity:1,
  duration:1000,
  easing:'linear',
  autoplay:false
});

const nucleo_antigo=anime({
  targets:'.n_filho',
  easing:'linear',
  duration:500,
  opacity:0,
  autoplay:false
})

const alinhar_mito_dir_1=anime({
  targets:'.mito1',
  easing:'linear',
  autoplay:false,
  translateX:[
    {
      value:'15%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-6%',
      duration:10
    },
    {
      value:'-8%',
      duration: 1000
    } 
  ]
})
const alinhar_mito_esq_2=anime({
  targets:'.mito2',
  easing:'linear',
  autoplay:false,
  translateX:[
    {
      value:'-12%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'2%',
      duration:10
    },
    {
      value:'-12%',
      duration: 1500
    } 
  ]
})

const alinhar_mito_esq_3=anime({
  targets:'.mito3',
  easing:'linear',
  autoplay:false,
  translateX:'5%',
  duration:1000
})

const alinhar_mito_dir_4=anime({
  targets:'.mito4',
  easing:'linear',
  duration:1000,
  autoplay:false,
  translateX:'3%'
  // translateY:'%'
});

const alinhar_centr_dir_1=anime({
  targets:'.centr1',
  easing:'linear',
  duration:1000,
  autoplay:false,
   translateX:[
    {
      value:'15%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-11%',
      duration:10
    },
    {
      value:'-15%',
      duration: 1000
    } 
  ]
});

const alinhar_centr_esq_3=anime({
  targets:'.centr3',
  easing:'linear',
  duration:1000,
  autoplay:false,
  translateX:'-5%',
  translateY:'12%'
});

const alinhar_centr_dir_4=anime({
  targets:'.centr4',
  easing:'linear',
  duration:1000,
  autoplay:false,
  translateX:{
    value:'-5%',
    duration: 1000
  } 
});

const centr_dir_desp=anime({
  targets:'.centr1, .centr2, .centr3, .centr4',
  easing:'linear',
  duration:1000,
  autoplay:false,
  opacity:0
})

const def_dir=anime({
  targets:'.def_dir',
  easing:'linear',
  duration:1500,
  autoplay:false,
  opacity:1
})
const def_esq=anime({
  targets:'.def_esq',
  easing:'linear',
  duration:1500,
  autoplay:false,
  opacity:1
})
//cromossomos
const alinhar_esq_1=anime({
  targets:'.C_1',
  translateY: [
    {
      value:'12%',
      duration:10
    },
    {
    value:'3%',
    duration:1000
    }
  ],
  translateX: [
    {
      value:'-12%',
      duration:10
    },
    {
    value:'-15%',
    duration:1000
    }
  ],
  easing:'linear',
  duration:2000,
  autoplay:false
})

const alinhar_esq_2=anime({
  targets:'.C_3',
  translateY: [
    {
      value:'13%',
      duration:10
    },
    {
    value:'7%',
    duration:1000
    }
  ],
  translateX: [
    {
      value:'-13%',
      duration:10
    },
    {
    value:'-20%',
    duration:1000
    }
  ],
  easing:'linear',
  duration:2000,
  autoplay:false
})

const alinhar_dir_1=anime({
  targets:'.C_2',
  translateY: [
    {
      value:'13%',
      duration:10
    },
    {
    value:'5%',
    duration:1000
    }
  ],
  translateX: [
    {
      value:'12%',
      duration:10
    },
    {
    value:'20%',
    duration:1000
    }
  ],
  easing:'linear',
  duration:2000,
  autoplay:false
})

const alinhar_dir_2=anime({
  targets:'.C_4',
  translateY: [
    {
      value:'15%',
      duration:10
    },
    {
    value:'8%',
    duration:1000
    }
  ],
  translateX: [
    {
      value:'12%',
      duration:10
    },
    {
    value:'16%',
    duration:1000
    }
  ],
  easing:'linear',
  duration:2000,
  autoplay:false
})

//separacao organelas
//subir esquerda
var subir_esq=anime({
  targets:'.def_cima_esq',
  easing:'linear',
  duration:5200,
  delay:100,
  autoplay:false,
  translateY:'-13%'
})

var subir_esq_C=anime({
  targets:'.C_1',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateY: [
    {
    value:'7%',
    duration:10
    },
    {
    value:'-7%',
    duration:5100
    }
  ],
  translateX: [
    {
    value:'-15%',
    duration:10
    }
  ]
})

var subir_R_3=anime({
  targets:'.r3',
  easing:'linear',
  autoplay:false,
  duration:3000,
  translateY:'-3%',
  translateX:{
    value:'-12%',
    duration:10
  }
})

var subir_esq_centr=anime({
  targets:'.centr2',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'15%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-15%',
      duration: 10
    },
    {
      value:'-20%',
      duration:3600
    } 
  ]
})

var subir_esq_mito=anime({
  targets:'.mito2',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'-12%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-12%',
      duration: 10
    },
    {
      value:'-15%',
      duration:3600
    } 
  ]
})

var desap_def_esq_cima=anime({
  targets:'.def_cima_esq',
  easing:'linear',
  // delay:4600,
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      delay:5700,
      duration:1000
    }
  ]
})

// desce esquerda
var descer_esq=anime({
  targets:'.def_baix_esq',
  easing:'linear',
  duration:5200,
  delay:100,
  autoplay:false,
  translateY:'10%'
})

var descer_esq_C=anime({
  targets:'.C_3',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateY: [
    {
    value:'7%',
    duration:10
    },
    {
    value:'18%',
    duration:5100
    }
  ],
  translateX: [
    {
    value:'-20%',
    duration:10
    }
  ]
})

var desce_R_4=anime({
  targets:'.r4',
  easing:'linear',
  autoplay:false,
  duration:3000,
  translateY:'15%',
  translateX:{
    value:'-12%',
    duration:10
  }
})

var descer_esq_centr=anime({
  targets:'.centr3',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'-5%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'12%',
      duration: 10
    },
    {
      value:'15%',
      duration:3600
    } 
  ]
})

var descer_esq_mito=anime({
  targets:'.mito3',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'5%',
      duration:10
    },
    {
      value:'8%',
      duration:3500
    }
  ],
  translateY:[
    {
      value:'8%',
      duration: 3600
    } 
  ]
})


var desap_def_esq_baixo=anime({
  targets:'.def_baix_esq',
  easing:'linear',
  // delay:4600,
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      delay:5700,
      duration:1000
    }
  ]
})

//desce direita
var descer_dir=anime({
  targets:'.def_baix_dir',
  easing:'linear',
  duration:5200,
  delay:100,
  autoplay:false,
  translateY:'10%'
})

var descer_dir_C=anime({
  targets:'.C_4',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateY: [
    {
    value:'8%',
    duration:10
    },
    {
    value:'18%',
    duration:5100
    }
  ],
  translateX: [
    {
    value:'16%',
    duration:10
    }
  ]
})

var descer_dir_centr=anime({
  targets:'.centr1',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'15%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-15%',
      duration: 10
    },
    {
      value:'15%',
      duration:3600
    } 
  ]
})

var descer_dir_mito=anime({
  targets:'.mito4',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'3%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'8%',
      duration: 3600
    } 
  ]
})


var desap_def_dir_baixo=anime({
  targets:'.def_baix_dir',
  easing:'linear',
  // delay:4600,
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      delay:5700,
      duration:1000
    }
  ]
})

//subir direita

var subir_dir=anime({
  targets:'.def_cima_dir',
  easing:'linear',
  duration:5300,
  delay:100,
  autoplay:false,
  translateY:'-12%'
})

var subir_dir_C=anime({
  targets:'.C_2',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateY: [
    {
    value:'5%',
    duration:10
    },
    {
    value:'-7%',
    duration:5100
    }
  ],
  translateX: [
    {
    value:'20%',
    duration:10
    }
  ]
})

var subir_dir_centr=anime({
  targets:'.centr2',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'15%',
      duration:10
    },
  ],
  translateY:[
    {
      value:'-15%',
      duration: 10
    },
    {
      value:'-20%',
      duration:3600
    } 
  ]
})

var subir_dir_mito=anime({
  targets:'.mito1',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateX:[
    {
      value:'15%',
      duration:10
    },
    {
      value:'7%',
      duration:4100
    }
  ],
  translateY:[
    {
      value:'-8%',
      duration: 10
    },
    {
      value:'-15%',
      duration:3600
    } 
  ]
})

var desap_def_dir_cima=anime({
  targets:'.def_cima_dir',
  easing:'linear',
  // delay:4600,
  autoplay:false,
  opacity:[
    {
      value:1,
      duration:10
    },
    {
      value:0,
      delay:5700,
      duration:1000
    }
  ]
})

//separacao celulas
var membrana_esq_1="M392,271.28c0,0,6-131.667-202-79c-64.667,23.333-71.667,186.701-71.667,225.001 c0,23.3,27.067,157.399,37.667,177.999c10.2,19.9,61,44.334,89,50c130.667,9,142.607-87.108,142.607-87.108 c-0.236-9.947-9.357-123.422-8.607-127.922c-0.167-8.253,13.066-99.515,13.018-99.97C393.808,306.226,391.458,276.697,392,271.28z"

var membrana_esq_2="M373,237.78c0,0-92.493-103.333-178.5-24c-116.5,136,36.447,200.864,63.464,210.466 c21.955,7.803-131.464-9.42-102.683,105.034c6.673,20.573,0.719,73.5,89.719,116c130.667,9,142.607-126.667,142.607-126.667 c-1.107-73.833-80.107-88.231-79.357-92.731c-0.167-8.253,41.25-16.102,67.605-66.602C399,301,387.754,254.78,373,237.78z";

const separacao_membrana_esq=anime({
  targets: '.memb_esquerda',
  easing: 'linear',
  d: [
    {
      value: membrana_esq_1,
      duration: 2000
    },
    {
      value: membrana_esq_2,
      duration: 2100
    },
    // {
    //   value: expan_3,
    //   duration: 2000
    // }
  ], 
  // opacity:{
  //   delay: 4000,
  //   value: 0
  // },
  autoplay: false
})

var membrana_dir_1="M573,215c-99.854,11.274-109,126.667-129,177c-7.333,23,26.471,174.323,34.333,192.613 C501,625.946,540.635,661.253,623,645.709c80-26,73.8-162.909,76-216.709C689,387,695,205.333,573,215z";

var membrana_dir_2="M573,215c-58.667-10.834-210.772,144.475-14,211.113c-7.333,23-179.891,49.167-90.667,178.5 C491,645.946,538.635,672.824,621,657.28c148.667-98,8.357-195.074-8-226.5C768.333,363.947,703.667,208.613,573,215z";

const separacao_membrana_dir=anime({
  targets: '.memb_direita',
  easing: 'linear',
  d: [
    {
      value: membrana_dir_1,
      duration: 2000
    },
    {
      value: membrana_dir_2,
      duration: 2100
    },
    // {
    //   value: expan_3,
    //   duration: 2000
    // }
  ], 
  // opacity:{
  //   delay: 4000,
  //   value: 0
  // },
  autoplay: false
})

var cito_esq_1="M375.468,294.613c-8.167-30.167-39.845-104.938-127.802-87.974 c-123.851,29.333-101.334,175.994-101.334,207.694c0,40.7,17.475,190.799,67.334,197.614 c84.667,30.067,115.711-4.132,133.333-24.667c1.168-1.769,20.02-33.333,19.333-37.333c-0.294-6.405,2.004-119.499,1.417-125.947 C367.625,420.793,384.302,304.78,375.468,294.613z";

var cito_esq_2="M375.468,294.613c-8.167-30.167-39.845-104.938-127.802-87.974c-178,76.775-6,214.154,34,221.307 c3.852,0.689-214,10.667-68,184c40,33.928,115.711-4.132,133.333-24.667c1.168-1.769,36-45.516,18.667-88 c-16.667-58.667-69.413-66.885-70-73.333C295.542,422.74,382.333,379.947,375.468,294.613z";

const separacao_citoplasma_esq=anime({
  targets: '.cito_esquerda',
  easing: 'linear',
  d: [
    {
      value: cito_esq_1,
      duration: 2000
    },
    {
      value: cito_esq_2,
      duration: 2000
    },
    // {
    //   value: expan_3,
    //   duration: 2000
    // }
  ], 
  // opacity:{
  //   delay: 4000,
  //   value: 0
  // },
  autoplay: false
})

var cito_dir_1="M593,246c-107.65,13.578-128,133-139,159c0.587,6.449,49.167,178.28,55.667,184.28 c8.834,25.866,73.231,61.285,128.667,24.667c52.667-18,44.766-138.814,46.666-185.614C679.667,359.667,645,250,593,246z";

var cito_dir_2="M593,237c-126.667,22.28-154.667,112.28-22.667,189.113c0.587,6.449-182.726,92.5-74,175.833 c48,50.667,88.564,55.285,144,18.667c86-92.48-42.567-147.7-40.667-194.5C757,335.28,657,222.28,593,237z";

const separacao_citoplasma_dir=anime({
  targets: '.cito_direita',
  easing: 'linear',
  d: [
    {
      value: cito_dir_1,
      duration: 2000
    },
    {
      value: cito_dir_2,
      duration: 2000
    },
    // {
    //   value: expan_3,
    //   duration: 2000
    // }
  ], 
  // opacity:{
  //   delay: 4000,
  //   value: 0
  // },
  autoplay: false
})

//surgindo as novas

const desap=anime({
  targets:'.memb_esquerda, .cito_esquerda, .memb_direita, .cito_direita',
  opacity:0,
  delay:4500,
  easing:'linear',
  duration:200,
  autoplay:false
});

const apar=anime({
  targets:'.cima, .baixo, .cima_d, .baixo_d',
  opacity:1,
  delay:4400,
  easing:'linear',
  duration:200,
  autoplay:false
});



//formando as novas

var cito_cima_1="M304.333,415.947c-0.125-3.207,78-36,71.135-121.333 c-8.167-30.167-39.845-104.938-127.802-87.974c-175.483,75.69-23,208.974,32.833,212.266c5.63,0,5.37,0.75,11,0.75 C290.824,419.088,304.381,416.465,304.333,415.947z"

const formacao_2=anime({
  targets:'.cito_cima',
  delay:4600,
  d:[
    {
      value: cito_cima_1,
      duration:2000
    }
  ],
  easing:'linear',
  autoplay:false
})

var cito_baixo_2="M576.5,444.905c-18.5,6.875-186.817,75.3-80.167,157.042c48,50.667,88.564,55.285,144,18.667 c84.716-91.099-43.833-174.083-45.583-174.708C586.417,442.78,586.583,443.613,576.5,444.905z"

const formacao_6=anime({
  targets:'.cito_baixo_d',
  delay:4600,
  d:[
    {
      value: cito_baixo_2,
      duration:2000
    }
  ],
  easing:'linear',
  autoplay:false
})

var meb_cima_1="M303.5,424.03c11.75-5.125,46.561-15.325,72.355-64.75 C399,301,387.755,254.78,373,237.78c0,0-92.493-103.333-178.5-24c-116.5,136,35.736,203.166,63.464,210.466 c5.295,1.394,26.476,1.532,26.536,1.868C291.25,425.822,290.875,424.947,303.5,424.03z"

const formacao_3=anime({
  targets:'.meb_cima',
  delay:4600,
  d:[
    {
      value: meb_cima_1,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})

var meb_cima_2="M573,215c-58.667-10.834-210.772,144.475-14,211.113c-0.177,0.556,31.615,3.265,31.25,3.826 c19.085,0.51,6.75,2.09,24.662,0C767.786,362.657,703.125,208.64,573,215z"

const formacao_9=anime({
  targets:'.memb_cima_d',
  delay:4600,
  d:[
    {
      value: meb_cima_2,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})

var cito_cima_2="M604.862,423.05C762.196,332.216,657,222.28,593,237c-126.667,22.28-165.5,104.78-33.5,181.613 c0.011,0.123,9.536,2.319,9.417,2.5c9.85,0.383,12.94,1.623,22.833,2.083C591.721,422.494,604.834,423.749,604.862,423.05z"

const formacao_8=anime({
  targets:'.cito_cima_d',
  delay:4600,
  d:[
    {
      value: cito_cima_2,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})


var meb_baixo_1="M306.5,424.113c-3.688-0.956-17.2-1.991-17.167-2.167 c-13.679-0.145-8.5,1.947-27.167,2.979c-6.103,1.456-133.821-2.759-106.886,104.354c6.672,20.573,0.719,73.5,89.719,116 c130.667,9,142.607-126.667,142.607-126.667C386.5,444.78,316.215,429.178,306.5,424.113z"

const formacao_4=anime({
  targets:'.meb_baixo',
  delay:4600,
  d:[
    {
      value: meb_baixo_1,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})

var meb_baixo_2="M593.667,435.934c-19.001-1.856-14.336,0.478-33.833,2.513c-11.5,6-178.566,39.962-91.5,166.167 C491,645.946,538.635,672.824,621,657.28c148.667-98,7.375-211.25-1.5-214.833C621,441.655,593.03,436.214,593.667,435.934z"

const formacao_7=anime({
  targets:'.memb_baixo_d',
  delay:4600,
  d:[
    {
      value: meb_baixo_2,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})

var cito_baixo_1="M297.063,431.092c-5.63,0-6.745-0.313-12.375-0.313 c0.617,0.153-3.753,0.211-3.188,0.313c3.852,0.689-213.833,7.521-67.833,180.854c40,33.928,115.711-4.132,133.333-24.667 c1.168-1.769,36-45.516,18.667-88C350.34,445.33,310.5,434.03,297.063,431.092z"

const formacao_5=anime({
  targets:'.cito_baixo',
  delay:4600,
  d:[
    {
      value: cito_baixo_1,
      duration:2000
    }
  ],
  autoplay:false,
  easing:'linear'
})

const separacao_definitiva_1=anime({
  targets:'.cima, .cima_d',
  easing:'linear',
  delay:4500,
  translateY: '-2%',
  autoplay:false,
  duration:2000
})

const separacao_definitiva_2=anime({
  targets:'.baixo, .baixo_d',
  easing:'linear',
  delay:4500,
  translateY: '2%',
  autoplay:false,
  duration:2000
})


//fim da animação

const formar_nucleos=anime({
  targets:'.n_direito, .n_esquerdo',
  easing:'linear',
  delay:2000,
  duration:500,
  opacity:1,
  autoplay:false
})


const nucleo_C_1=anime({
  targets:'.C_1',
  easing:'linear',
  autoplay:false,
  translateY: [
    {
    value:'-7%',
    duration:10
    },
    {
    value:'-12.5%',
    duration:1000
    }
  ],
  translateX: [
    {
    value:'-15%',
    duration:10
    },
    {
    value:'-20%',
    duration:10
    }
  ]
})

var nucleo_C_2=anime({
  targets:'.C_2',
  easing:'linear',
  autoplay:false,
  translateY: [
    {
    value:'-7%',
    duration:10
    },
    {
    value:'-8.5%',
    duration:1000
    }
  ],
  translateX: [
    {
    value:'20%',
    duration:10
    }
  ]
})

var nucleo_C_3=anime({
  targets:'.C_3',
  easing:'linear',
  autoplay:false,
  translateY: [
    {
    value:'18%',
    duration:10
    },
    {
    value:'25%',
    duration:2000
    }
  ],
  translateX: [
    {
    value:'-20%',
    duration:10
    },
    {
    value:'-22%',
    duration:2000
    }
  ]
})

var nucleo_C_4=anime({
  targets:'.C_4',
  easing:'linear',
  delay:100,
  autoplay:false,
  translateY: [
    {
    value:'18%',
    duration:10
    },
    {
    value:'29%',
    duration:2400
    }
  ],
  translateX: [
    {
    value:'16%',
    duration:10
    },
    {
    value:'22%',
    duration:2100
    }
  ]
})