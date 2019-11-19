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
function separacao(citocinese){
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
    autoplay: citocinese
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
    autoplay: citocinese
  })
  const separada=anime({
    targets: '.cell_filha',
    easing: 'linear',
    opacity: 1,
    delay: 3990,
    autoplay: citocinese
  })

  const sep11=anime({
    targets: '.memb_esquerda',
    d: 'M380.25,413.083c0,0,16.75-184.75-191.25-132.083c-64.667,23.333-70.667,97.981-70.667,136.281 c0,23.3,40.067,99.786,50.667,120.386c10.2,19.9,50,28.667,78,34.333c130.667,9,133.736-122.928,133.736-122.928 c-0.236-9.947-2.486-14.322-1.736-18.822c-0.167-8.253,0.881-8.253,0.833-8.708C379.625,419.958,379.708,418.5,380.25,413.083z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: citocinese
  })
  const sep12=anime({
    targets: '.cito_esquerda',
    d: 'M366,414c-10.493-27.286-30.333-162.333-136-113c-101,29.333-83.667,81.633-83.667,113.333 c0,40.7,64.667,131.584,94.667,127.266c84.667,30.067,120-74.599,126.5-92.974c1.168-1.769,2.437-6.75,1.75-10.75 c-0.294-6.405-0.913-7.427-1.5-13.875C367.625,420.793,366.512,414.795,366,414z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: citocinese
  })

  const sep21=anime({
    targets: '.memb_direita',
    d: 'M573,284c-99.854,11.274-109,57.667-129,108c-7.333,23-8.667,48.333-0.805,66.623 C465.862,499.956,501.635,571.544,584,556c99-17,112.8-73.2,115-127C689,387,695,274.333,573,284z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: citocinese
  })
  const sep22=anime({
    targets: '.cito_direita',
    d: 'M593,301c-107.65,13.578-128,78-139,104c0.587,6.449-2.668,35.467,3.832,41.467 c8.834,25.866,90.398,123.817,145.834,87.199c52.667-18,79.433-58.533,81.333-105.333C679.667,359.667,645,305,593,301z',
    easing: 'linear',
    delay: 4500,
    duration: 1000,
    autoplay: citocinese
  })

  const sep2=anime({
    // targets: '.direita',
    d: 'M764.215,342.432c-266.121-56.521-254.333,122.833-265.333,177.063c0.733,6.106-2.667,9.437,2,20.937 c2.333,52.667-69.897,202.136,268.902,202.281c131.431,0.056,115.773-146.027,118.431-210.46 C890.258,482.643,877.215,366.432,764.215,342.432z',
    delay: 4500,
    easing: 'linear',
    duration: 1000,
    autoplay: citocinese
  })
}

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

const condensar=anime({
  targets: '.dna',
  d: 'M418.249,348.85 c-3.3-0.4,1.307,0.694-1.593-1.006c-2.9-1.6,3.856,2.925,3.656-0.375c0-0.4,5.269-0.075,5.469-0.375 c0.2-0.4-2.944-1.965-2.544-2.165c2.2-1.2-10.612,1.54-8.112,1.54c0.7,0-3.684-3.869-3.084-3.469c1.7,1,1.8,3.5,1.7,5.5 c2.3-0.3,4.5-0.6,6.8-0.9c0.2,0.9,0.1,1.8-0.3,2.6c0.2-0.6,0.7-1.1,1.2-1.5c0.3,2-0.11-3.457-1.41-1.857 c-0.2,0.3-0.781,3.241-1.181,3.341s2.106,0.178,1.806-0.122c-2-1.4-7.115,1.138-6.715-1.262c0.4-2.6,3.7-3.8,6.3-3.4 c0.4,0.1,0.8,0.2,1,0.5s0.1,0.6,0,0.9c-0.4,1.5-1.5,2.8-3,3.4c-0.6,0.3-1.3,0.4-2,0.2c-1.6-0.3-2.7-2-2.8-3.7 c-0.1-2,1.3-4,3.2-4.6c1.9-0.6,4.3,0.4,5,2.3s-0.4,4.3-2.3,4.9c-0.9,0.2-2,0-2.3-0.9c-0.2-0.7,0.4-1.5,1.1-1.7s1.5-0.1,2.2,0.2 c2.3,0.7,4.5,2,6.2,3.7c0.6,0.6-8.172-3.806-8.072-3.006c0.3,2.1,3.191-0.278,1.191,0.122c-3.3,0.6-3.519,8.785-5.119,5.785 c-0.6-1.1-0.7-2.3-0.5-3.5c0.3-2.2,1.7-4.4,3.8-5.3c2.1-1,4.7-0.6,6.3,0.9c0.7,0.7,1.2,1.5,1.2,2.5c-0.1,1.2-0.9,2.1-1.8,2.9 c-2.6,2.3-0.494-5.55-3.794-4.55c-1.7,0.5,2.584,0.725,1.284-0.575c-0.5-0.5-4.164,5.086-4.364,4.386 c-1.1-4.2-6.127-5.161-2.327-7.361c1.4-0.9,3.2-1.5,4.8-1c1.1,0.4,1.8,1.3,2.5,2.2c1.5,1.8,2.8,4.1,2.4,6.4 c-0.3,1.4-4.697-1.944-5.697-0.844c-2.5,2.6,4.056-3.75,0.656-2.75c-1.6,0.5-0.356,4.406-1.656,3.406 c-0.7-0.5-0.013,0.05-0.313-0.75c-1.6-3.9-0.587,3.894,1.313,0.094c1.1-2.2-3.152-1.841-0.652-2.041c1-0.1-2.65-7.115-1.75-6.715 c3.7,1.6,6.6,4.9,7.6,8.8c-2.3,0.1-4.7-0.9-6.3-2.5c-0.7-0.7-1.3-1.6-1.3-2.5c-0.1-1.3,0.8-2.4,1.8-3.3c1.9-1.7,1.1,3.4,2.6,5.5 c1,1.4,4.8-2.5,4-0.9c-1.3,2.4-3.7,4.4-6.4,4.2c-0.6,0-1.1-0.2-1.6-0.5c-1.3-1.1-0.4-3.2,0.9-4.3c0.8-0.7,1.8-1.4,2.9-1.5 s2.3,0.4,2.7,1.4c0.4,0.9,0.1,1.9-0.3,2.7c-1.3,2.9-4.3,4.9-7.5,5.1c-0.6,0-1.4-0.1-1.6-0.7c-0.1-0.4,0-0.8,0.1-1.1 c0.6-1.6,1.4-3.1,2.6-4.3c1.2-1.1,3-1.8,4.6-1.4c2.8,0.7,4.1,4.2,3,6.9c-1,2.7,0.841-6.499-1.859-5.699 c-2.2,0.7,2.531-2.007,0.931-3.707c-0.6-0.7-1.984,6.419-2.284,5.519c-0.8-2.5-2.266,3.234-1.466,0.734 c0.8-2.5-6.922-7.647-4.322-7.447c1,0,2,0.4,3,0.9c2.6,1.2,5.1,3,6.2,5.6c1.4,3.4-6.766-8.811-9.566-6.511 s3.681,0.343-0.019,0.343c-2.1,0,1.101,1.461-0.199-0.139c-1.1-1.3,0.819,1.356,0.719-0.344c-0.2-3.2-2.069,2.975-0.969-0.125 s1.987,7.944,5.188,7.344c2.7-0.5-2.653-9.969-0.153-8.969c5.8,2.4-5.554,5.725,0.246,8.125',
  duration: 1000,
  easing: 'linear',
  opacity: 0,
  autoplay: false
})

const condensar2=anime({
  targets: '.acido_nucl1',
  d: 'M401.86,376.251 c0.417,2.084-7.922-12.762-6.575-11.118c0.967,1.18,2.134,2.182,3.35,3.104c4.736,3.591,10.323,6.051,16.169,7.12 c1.265,0.231,2.886,0.232,3.465-0.916c0.111-0.22,0.168-0.483,0.081-0.713c-0.16-0.425-0.697-0.545-1.151-0.576 c-2.509-0.174-5.001,0.402-7.473,0.865c-2.472,0.463-5.044,0.812-7.482,0.195c-2.438-0.617-4.731-2.412-5.236-4.876 c-0.05-0.246-0.081-0.51,0.018-0.74c0.258-0.599,1.112-0.552,1.747-0.404c1.837,0.429,3.674,0.857,5.512,1.286 c2.715,0.633,5.477,1.285,7.882,2.693c2.015,1.18,3.792,2.892,6.065,3.425c1.245,0.292-16.322,0.746-15.047,0.654 c0.64-0.046,1.507-2.298,1.563-2.938c-6.357-2.951,6.056-4.42-0.745-6.114c-2.164-0.539-4.456-0.992-6.173-2.417 c-1.469-1.219-2.331-3.005-3.08-4.761c-1.333-3.123,9.499,10.829,7.314,8.229c-0.644-0.766-3.501,2.368-3.63,1.375 c-0.209-1.616,0.015-0.43,1.188-1.563c1.654-1.598-0.39,1.473,0.326-0.714c-2.064,0.473-4.258-4.517-4.887-2.495 c-0.39,1.254-3.394-4.119-3.252-2.813c0.581,5.345,7.179,3.535,3.313,7.271c-0.352,0.341,1.218,0.459,1.125,0.94 c-0.191,0.982-3.39-4.396-2.5-3.94c4.562,2.336,0.747,4.796,4.049,8.716c0.73,0.866,1.475,1.739,2.405,2.386 c1.034,0.72,2.252,1.128,3.472,1.445c2.118,0.55,4.301,0.849,6.489,0.89c0.532,0.01,1.092-0.002,1.554-0.266 c0.45-0.256-8.271-6.865-7.907-7.234c1.081-1.095,4.926,2.841,6.438,3.125s-9.524-7.504-8.183-6.75',
  easing: 'linear',
  duration: 1200,
  opacity: 0,
  autoplay: false
})

const condensar3=anime({
  targets: '.acido_nucl2',
  d: 'M436.013,358.805 c0.088-0.091-4.584,4.682,3.821,8.245c-0.4-4.8-5.433-2.583-5.833-7.383c-0.1-1.3-0.433,4.833-0.833,3.633 c-0.2-0.7,0.767-5.867,0.467-6.567c-1.9-3.9,3.433,2.767,1.533-1.133c-0.2-0.3-3.101-2.538-2.801-2.838 c2.5,0-3.099-1.028-1.699,1.072c4.6,6.8-3.026-12.733,0.674-5.333c2.5,5.1,4.7,10.5,5.1,16.2c0.2,2.1,3.026-6.8,1.726-5.2 c-1.4,1.7,2.42,1.3,0.22,0.9s-1.679,2.941-3.479,1.641c-3.1-2.2,1.059,1.359-1.741-1.341c-4.2-4.1,8.7,3.4,5-1.2 c-2.5-3.1-1.038,4.9-2.638,1.2c-1-2.3-0.704,2.941,1.096,1.341c1.5-1.3-4.516-4.941-2.616-4.141 c2.2,0.9-2.008,0.367-0.008,1.767c8,5.8-7.767-9.433-0.367-2.933c3.3,2.9,3.808,3.367,7.508,5.767 c-2.808-4.6-7.374-3.4-2.974-3',
  duration: 1200,
  easing: 'linear',
  opacity: 0,
  autoplay: false
})

const cromossomos=anime({
  targets: '.cromossomo',
  opacity: 1,
  duration: 1000,
  easing: 'linear',
  autoplay: false
})

const desaparece=anime({
  targets: '.nucleotideo',
  opacity: 0,
  duration: 200,
  easing: 'linear',
  autoplay: false
})

  //Prometáfase

const nucleo=anime({
  targets: '.nucl',
  opacity: 0,
  duration: 1000,
  autoplay: false
})

const centr1=anime({
  targets: '.centr1',
  translateY: '-11%',
  translateX: [
    {value: '3%'},
    {value: '6%'}
  ],
  easing: 'linear',
  duration: 5000 ,
  autoplay: false
})

const centr2=anime({
  targets: '.centr2',
  translateY: '5%',
  translateX: '-3%',
  easing: 'linear',
  duration: 5000,
  autoplay: false
})

const mito_1=anime({
  targets: '.mito1',
  easing: 'linear',
  duration: 5000,
  translateY: '-8%',
  translateX: '-3%',
  autoplay: false
})

const mito_2=anime({
  targets: '.mito2',
  easing: 'linear',
  duration: 5000,
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
  targets: '.C_esquerdo_1',
  translateY: '13%',
  translateX: {
    value:'-12%',
    duration: 1
  },
  easing: 'linear',
  duration: 1000,
  autoplay:false
})
const novo_nucleo_esquerdo_2=anime({
  targets: '.C_esquerdo_2',
  translateY: '10%',
  translateX: {
    value:'-12%',
    duration: 1
  },
  easing: 'linear',
  duration: 1000,
  autoplay:false
})
const novo_nucleo_esquerdo_3=anime({
  targets: '.C_esquerdo_3',
  translateY: '2%',
  translateX: [
    {
      value:'-10%',
      duration: 1
    },
    {
      value:'-13%',
      duration: 1000
    }
  ],
  easing: 'linear',
  duration: 1000,
  autoplay:false
})


const novo_nucleo_direito_1=anime({
  targets: '.C_direito_1',
  translateY: '13%',
  translateX: {
    value:'15%',
    duration: 1
  },
  easing: 'linear',
  duration: 1000,
  autoplay:false
})
const novo_nucleo_direito_2=anime({
  targets: '.C_direito_2',
  translateY: '10%',
  translateX: {
    value:'15%',
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