let bacteria_roxa = 'M91.8,56c1.7-0.4,3.2,0.8,4.7,0.1c0.4-0.2,0.7-0.3,1.1-0.5c7.6-3.6,16.1-9,24.3-10.5 c0.8-0.1,1.6-0.1,2.3,0.1l12.5,3.4l-0.3-1.6L124,43.7c-0.8-0.2-1.6-0.3-2.4-0.1c-8.3,1.6-16.9,7-24.7,10.7 c-0.4,0.2-0.7,0.3-1.1,0.5c-1.4,0.7-2.9-0.6-4.4-0.2c-0.3,0.1-0.7,0.2-1,0.2c0.4-2.1,0.3-4.2-0.1-6.2c-0.1-0.5-0.2-0.9-0.4-1.4 c8.7-4.9,19.2-4.7,28.3-6.1c2.5-0.4,6.5-3.3,8.5-4.2l0.8-0.7l-0.1-1.3l-0.8,0.2c-2.7,0.5-6,4-8.7,4.4c-8.9,1.4-18.3,0.5-28.6,6.1 c-0.3-0.6-0.6-1.2-0.9-1.7l-0.1-0.1c-0.2-0.4-0.5-0.8-0.8-1.2c0.6-0.1,0.9-0.8,1.5-0.9c1.7-0.1,3.7-2.6,5.4-3.3 c2.5-1,2.3,0.2,4.1-1.6c0.8-0.8,1.7-1.7,2.6-2.4c1.6-1.3,4.5-0.4,6.3-1.4c2.1-1.2,2.3-4.5,4.2-6.1c2.5-2.3,8.3-2.2,10-5l0.3-0.5 l-1.4-0.8l-0.3,0.5c-1.6,2.7-7.3,2.5-9.7,4.6c-1.7,1.6-1.9,4.8-3.9,5.9c-1.9,1.1-4.8,0.2-6.5,1.6c-0.9,0.8-1.8,1.6-2.7,2.5 c-1.7,1.7-1.4,0.4-3.6,1.2c-1.5,0.6-3.4,2.8-5,3c-1,0.1-1.7,1.1-2.7,1.2c-0.3-0.2-0.6-0.4-1-0.6c-1.8-0.9-3.7-0.6-5.1-0.3 c-4.5,1-8.5,3.2-12.4,5.2L47.4,56.1c-4.4,2.4-8.9,4.5-12.2,7.5c-1.4,1.3-2.8,2.6-4.3,3.8c-6,4.9-8,12.9-4.9,19.5 c0.9,1.9,2.6,4.5,5.6,5.9c2.3,1.1,4.7,1.2,6.9,0.7c3-0.7,5.7-2.4,7.5-4.2c1.7-1.7,3.1-3.5,4.4-5.3c1-1.4,3-1.8,4.2-3 c4.4-4.7,11-7.6,17.4-10.4c3.6-1.6,7.3-3.2,10.7-5.2c2-1.2,3.7-2.7,5-4.6c4.1,0.1,8.1,2.6,12,1.4c0.7-0.2,1.5-0.5,2.2-0.7 c1.9-0.6,3.8-1.3,5.7-1.5c4.3-0.5,8.7-5.8,12.5-4.1l0.2,0.1c2.1,0.9,4.2,2.8,6.6,2.8c4.5,0,8,4.8,11.1,1.4l0.4-0.4l-1.1-1.1 l-0.4,0.4c-3,3.1-6.2-1.9-10-1.9c-2,0-4-1.9-6-2.7l-0.2-0.1c-4-1.7-8.6,3.5-13.3,4c-2.1,0.2-4.1,0.9-6,1.5 c-0.7,0.2-1.4,0.5-2.1,0.7c-3.4,1-7-1.4-10.6-1.4c0.5-0.9,0.9-1.9,1.2-2.9C90.7,56.3,91.3,56.1,91.8,56z'

// CELULA VERDE INFERIOR DIREIRO
anime({
  targets: '.anima1',
  translateX: [
      {value: '5px'},
      {value: '-5px'}
  ],
  translateY: '15px',
  direction: 'alternate',
  rotate: '-1deg',
  easing: 'easeInOutSine',
  loop: true,
  duration: 6000
});

//CELULA VERDE CANTO SUPERIOR DIREITO
anime({
  targets: '.anima2',
  delay: 100,
  translateX: [
      {value: 15},
      {value: -5}
  ],
  translateY: -10,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 6500
});


// BASTONETES VERDES
anime({
  targets: '.anima31',
  delay: 100,
  translateX: [
      {value: '3px'},
      {value: '-7px',
       delay: 200},
  ],
  translateY: '5px',   
  direction: 'alternate',
  easing: 'easeInOutSine',
  rotate: '0.3deg',
  loop: true,
  duration: 5000
});
anime({
  targets: '.anima32',
  delay: 100,
  translateX: [
      {value: '2px'},
      {value: '-5px'}
  ],
  translateY: '5px',   
  direction: 'alternate',
  rotate: '0.3deg',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5000
});
anime({
  targets: '.anima33',
  delay: 100,
  translateX: [
      {value: '-3px'},
      {value: '7px',
       delay: 200},
  ],
  translateY: '5px',
  direction: 'alternate',
  rotate: '0.3deg',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5000
});
anime({
  targets: '.anima34',
  delay: 100,
  translateX: [
      {value: '-3px'},
      {value: '5px',
       delay: 200},
  ],
  translateY: '5px',
  direction: 'alternate',
  rotate: '0.3deg',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5000
});

// MITOCONDRIA ROSA 
anime({
  targets: '.anima4',
  delay: 500,
  translateX: [
      {value: '7px'},
      {value: '-2px'}
  ],
  translateY: '-5px',
  rotate: '1deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 4000
});

// CELULA ROXA INFERIOR DIREITO
anime({
  targets: '.anima5',
  translateX: [
      {value: '-10px'},
      {value: '25px'}
  ],
  translateY: '7px',
  rotate:'2deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 7000
});

// BACTERIA FLAGELADA ROXA SUPERIOR DIREITO
anime({
  targets: '.anima6',
  translateX: [
      {value: '-10px'},
      {value: '1px'}
  ],
  translateY: '10px',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5000
});


// CELULAS PEQUENAS VERDE CANTO SUPERIOR DIREIRO
anime({
  targets: '.anima71',
  translateX: [
      {value: '-9px'}
  ],
  translateY: '-15px',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 3500
});
anime({
  targets: '.anima72',
  rotate:'-0.5deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 4000,
  translateX: '-15px'
});
anime({
  targets: '.anima73',
  translateX: [
      {value: '-9px'}
  ],
  translateY: '-5px',
  rotate: '0.1deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 4500
});

// PROTOZOÁRIO CILIADO CENTRO-DIREITO 
anime({
  targets: '.anima8',
  translateX: '-5px',
  translateY: '-5px',
  rotate: '1.5deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 7000
});

// BACTERIA CILIADA CANTO DIREITO
anime({
  targets: '.anima9',
  rotate: '1.5deg',
  translateX: '-10px',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 4500
});

// VIRUS ROXO DIREITO
anime({
  targets: '.anima10',
  translateX: '-5px',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  rotate: '25deg', 
  duration: 7000
});

// PROTOZOARIO CILIADO SUPERIOR DIREIRO
anime({
  targets: '.anima11 ',
  translateX: '15px',
  // translateY: '-10px',
  rotate: '-2deg',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5500
});

//VIRUS VERDE INFERIOR ESQUERDO
anime({
  targets: '.anima12',
  translateX: [
      {value:'-10px'}, 
      {value:'15px'}
  ],
  rotate:'20deg', 
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 8000
});

// CELULA BACTERIA CILIADA ESQUERDA
anime({
  targets: '.anima13',
  translateX: '15px',
  translateY: '-5px',
  rotate:'20deg', 
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 5000
});

// PROTOZOARIO AZUL SUPERIOR ESQUERDO
anime({
  targets: '.anima14',
  translateX: [
    {value:'-15px'},
    {value:'10px'}
  ],
  translateY: [
    {value:'-5px'},
    {value:'10px'}
  ],
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 10000
});

// CELULAS CANTO SUPERIOR ESQUERDO
anime({
  targets: '.anima15',
  translateX: '-15px',
  translateY: '-10px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 6000
});
anime({
  targets: '.cell1',
  translateX: '10px',
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 8000
});
anime({
  targets: '.cell2',
  translateY: '-10px',  
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
  duration: 8000
});

//CELULA ROXA CANTO INFERIOR ESQUERDO
anime({
  targets: '.anima16',
  rotate: [
    {value:'3deg'},
    {value:'-2deg'}
  ],
  translateY: '25px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 20000
});

// BASTONETES AZUIS ESQUERDO
anime({
  targets: '.anima17',
  translateX: '25px',
  translateY: '25px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5000
});
anime({
  targets: '.basto1',
  translateX: '5px',
  translateY: '5px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5000
});
anime({
  targets: '.basto2',
  translateX: '5px',
  translateY: '-10px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5000
});
anime({
  targets: '.basto3',
  translateX: '-3px',
  translateY: '-5px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5000
});
anime({
  targets: '.basto4',
  translateX: '5px',
  translateY: '-10px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 6000
});

// PROTOZOARIO CILIADO ROXO CANTO ESQUERDO 
anime({
  targets: '.anima18',
  delay: 500,
  translateX: '25px',
  translateY: '5px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5500
});

// PROTOZARIO VERDE CILIADO E FLAGELADO ESQUERDA
anime({
  targets: '.anima19',
  delay: 500,
  translateX: '25px',
  translateY: '25px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 6000
});

// BACTERIAS COCOS VERDES ESQUERDA
anime({
  targets: '.cocos1',
  delay: 500,
  translateX: '5px',
  translateY:[
    {value:'20px'},
    {value:'-5px'}
  ],
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 8000
});
anime({
  targets: '.cocos2',
  delay: 500,
  translateX: '10px',
  translateY: '-10px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 5000
});
anime({
  targets: '.cocos3',
  delay: 500,
  translateX: '15px',
  translateY: '20px',
  easing:'easeInOutSine',
  loop: true,
  direction: 'alternate',
  duration: 6000
});