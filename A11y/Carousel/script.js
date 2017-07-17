(function(global, document){
 'use strict'

 
 //변수들 
  var next_btn, prev_btn, indicators, panels, panel_box, img_width, active_img, next_img, prev_img, active_tab, float_img;
  var forEach = Array.prototype.forEach;
 
 
  //생성자 함수
 var Carousel = function(time){
  this.time = time || '10s';
 }
  

 //비공개 함수
 function findClass(){
  //image class 찾기
  active_img = panel_box.querySelector('.active-img');
  next_img = panel_box.querySelector('.next-img');
  prev_img = panel_box.querySelector('.prev-img');
  float_img = document.querySelector('.float-img');
  // active tab 찾기
  forEach.call(indicators, function(el){
    if(el.classList.contains('active-tab')){
      active_tab = el;
    }
  });
 }
 function changeTab(i){
    active_tab.classList.remove('active-tab');
    indicators[i].classList.add('active-tab');
 }
 function viewChangeByTab(i){
   panel_box.classList.add('float-img');
   var current_position = active_img.index * img_width;
   var target_position = ((i * img_width) - current_position) *-1;
   panel_box.style.transform='translateX(-'+ current_position+ 'px)';
   forEach.call(panels, function(el){
    el.style.transform='translateX('+ target_position+ 'px)';
    el.style.transition='all 1s ease-in';
   })
   changeTab(i);
   setTimeout(changeClass.bind(undefined,i), 1100);

 }
 function showNext(i){
   findClass();
   i = i || active_img.index + 1;
   if(i===5) { i = 0; }
   changeTab(i);
   panels[i].classList.add('next-img');
   setTimeout(changeClass.bind(undefined,i), 1100);
 }
 function showPrev(i){
   findClass();
    i = i || active_img.index - 1;
    if(i===-1) { i = 4; }
    changeTab(i);
    panels[i].classList.add('next-img');
    setTimeout(changeClass.bind(undefined,i), 1100);
    panels[i].classList.add('prev-img');
 }
 function changeClass(i){
    findClass();
    active_img.classList.remove('active-img');
    panels[i].classList.add('active-img');
    !next_img || next_img.classList.remove('next-img');
    !prev_img || prev_img.classList.remove('prev-img');
    if(float_img){
      float_img.classList.remove('float-img');
      panel_box.removeAttribute('style');
      forEach.call(panels, function(el){
        el.removeAttribute('style');
      })
    }
 }

 
 Carousel.fn = Carousel.prototype;
 Carousel.fn.init = function(){
    if( !this) { throw 'new를 사용해주세요.'}
    img_width = 1500;
    next_btn = document.getElementsByClassName('next-button')[0];
    prev_btn = document.getElementsByClassName('prev-button')[0];
    indicators = document.getElementsByClassName('indicator');
    panels = document.getElementsByClassName('slide-img');
    panel_box = document.getElementsByClassName('panel-box')[0];


    //탭에 이벤트 추가
    next_btn.addEventListener('click',Carousel.fn.nextSlide);
    next_btn.onkeydown = Carousel.fn.KeyboardNavigation.bind(undefined,undefined);
    prev_btn.addEventListener('click',Carousel.fn.prevSlide);
    prev_btn.onkeydown = Carousel.fn.KeyboardNavigation.bind(undefined,undefined);
    forEach.call(indicators, function(el,i){
      el.onclick=Carousel.fn.changeIndicator.bind(el,i);
      el.onkeydown = Carousel.fn.KeyboardNavigation.bind(el,i);
    })
    //이미지들에 인덱스 추가
    forEach.call(panels, function(el,i){
      el.index = i;
    })

 }

 Carousel.fn.palyAnimation = function(){
 }

 Carousel.fn.nextSlide = function(){
  showNext();
 }
 Carousel.fn.prevSlide = function(){
  showPrev();
 }
 Carousel.fn.changeIndicator = function(i,e){
  e.preventDefault();
  var translate_value, position;
  findClass();
  viewChangeByTab(i);
}
 Carousel.fn.KeyboardNavigation = function(i, e){
   var keyCode = e.keyCode;
   if(keyCode === 37 || keyCode === 38){
     showPrev();
  } else if(keyCode === 39 || keyCode === 40){
     showNext();
   } else{
     return;
   }
}

global.Carousel = Carousel;
})(window, window.document);

(function(global){
 'use strict'
  var img_slide =new Carousel();
  img_slide.init();
  global.img_slide;
})(window);