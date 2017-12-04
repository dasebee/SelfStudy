(function(global, document){
  'use strict'
   //해야할 것
   //css 반응형, resize 
   //autoplay stop했다가 다시 재생하게하는 것.   //키보드 포커스 받았을 때 autoplay stop //마우스 in,out
   //마우스가 화면에 들어왔을 때도 재생 stop
   //swipe 
   //정적이지 않은 움직임 효과
   //인디케이터에도 각각 툴팁 표시 
   //키보드 포커스 툴팁은 title이 아니라 커스텀으로 표시 
 
  
  //변수들 
   var container, next_btn, prev_btn, indicators, panels, panel_box, img_width, active_img, next_img, prev_img, active_tab, float_img, timer;
   var forEach = Array.prototype.forEach;
  
  //도우미 함수들 
 
   //필요한 요소들 찾기. 
  function findClass(){
   active_img = panel_box.querySelector('.active-img');
   next_img = panel_box.querySelector('.next-img');
   prev_img = panel_box.querySelector('.prev-img');
   float_img = document.querySelector('.float-img'); //이것은 인디케이터로 화면 전환할 때 float left 해주는 클래스
   // active tab 찾기
   forEach.call(indicators, function(el){
     if(el.classList.contains('active-tab')){
       active_tab = el;
     }
   });
  }
  // active tab 변경. 
  function changeTab(i){
     active_tab.classList.remove('active-tab');
     active_tab.setAttribute('aria-selected', false);
     indicators[i].classList.add('active-tab');
     indicators[i].setAttribute('aria-selected', true);
  }
  function resetIndicatorMove() {
     //인디케이터로 이미지 전환했을 때, float left한 것 제거. 
     if(float_img){
       float_img.classList.remove('float-img');
       panel_box.removeAttribute('style');
     }
     //translateX로 이동한 것 제거.
     forEach.call(panels, function(el){
       el.removeAttribute('style');
     })
  } 
   // 이미지 변경 후, 속성(class, style) 추가 및 삭제 
  function changeClass(i){
     findClass();
     //이전 acitve 클래스를 삭제하고 새로 선택한 이미지에 active class를 추가한다. 
     active_img.classList.remove('active-img');
     active_img.setAttribute('aria-hidden', true);
     panels[i].classList.add('active-img');
     panels[i].setAttribute('aria-hidden', false);
     //prev와 next가 active-img가 되었기 때문에 class를 삭제한다. 
     !next_img || next_img.classList.remove('next-img');
     !prev_img || prev_img.classList.remove('prev-img');
 
     // 인디케이터 조작시에 추가한 속성 제거(float, style)
     resetIndicatorMove();
     
     // Class 수정 완료하면 Tooltip 표시 함수 호출 
     // active-class가 변경 될 때마다 실행 시켜야 하니까 여기서 호출. 
     showTooltip(i);
  }
   // 버튼에 Tooltip추가
  function showTooltip(i){
   var next_index, prev_index, next_tooltip, prev_tooltip;
   //ative_img가 첫번째와 마지막일 경우 index 값 별도로 지정. 그 외는 +1, -1
   next_index = i === 4 ? 0 : i + 1; 
   prev_index = i === 0 ? 4 : i - 1; 
   //이전 이미지와 다음 이미지에 해당하는 indicator의 aria-label을 가져와서 버튼의 title로 설정. 
   next_tooltip = indicators[next_index].getAttribute('aria-label');
   prev_tooltip = indicators[prev_index].getAttribute('aria-label');
   next_btn.setAttribute('title', next_tooltip);
   prev_btn.setAttribute('title', prev_tooltip);
  }
 
 
   //생성자 함수
  var Carousel = function(size){
   if(!this) {throw 'new 키워드를 사용해주세요.'}
   img_width = size; 
   Carousel.fn.init();
  }
 
  //이벤트 연결 함수
  function bind(){
     next_btn.addEventListener('click',Carousel.fn.nextSlide.bind(undefined,undefined));
     prev_btn.addEventListener('click',Carousel.fn.prevSlide.bind(undefined,undefined));
     forEach.call(indicators, function(el,i){
       el.addEventListener('click', Carousel.fn.changeIndicator.bind(el,i));
     })
     container = document.getElementsByClassName('carousel-container')[0];
     container.addEventListener('keyup', Carousel.fn.KeyboardNavigation.bind(container));
  }
  
  //prototype
  Carousel.fn = Carousel.prototype = {
    constructor : Carousel,
    init : function(){
      //필요한 요소 찾기
       next_btn = document.getElementsByClassName('next-button')[0];
       prev_btn = document.getElementsByClassName('prev-button')[0];
       indicators = document.getElementsByClassName('indicator');
       panels = document.getElementsByClassName('slide-img');
       panel_box = document.getElementsByClassName('panel-box')[0];
 
       //탭과 버튼에 이벤트 연결
       bind();
       //초기에 표시되는 툴팁 설정
       showTooltip(0);
       //이미지들에 인덱스 추가
       forEach.call(panels, function(el,i){
         el.index = i;
       })
       Carousel.fn.autoPlay();
    },
    nextSlide : function(i, e){
       Carousel.fn.stopPlay();
       findClass();
       var i = i || active_img.index + 1; //indicator는 선택한 대상이 i(bind에서 전달 받음), 버튼은 active의 다음 이미지가 i
       if(i===5) { i = 0; } // 마지막 이미지의 다음은 첫번째 이미지
       changeTab(i);
       panels[i].classList.add('next-img');
       active_img.style.transform='translateX(-1500px)';
       active_img.style.transition='all 1s ease-in';
       setTimeout(changeClass.bind(undefined,i), 1100); //시간을 설정하지 않으면 바로 Class가 변경되어서 translate 효과를 볼 수 없다. 
    },
    prevSlide: function(i, e){
       Carousel.fn.stopPlay();
       findClass();
       i = i || active_img.index - 1;
       if(i===-1) { i = 4; }
       changeTab(i);
       panels[i].classList.add('prev-img');
       active_img.style.transform='translateX(1500px)';
       active_img.style.transition='all 1s ease-in';
       setTimeout(changeClass.bind(undefined,i), 1100);
    },
    changeIndicator : function(i,e){
       e.preventDefault();
       Carousel.fn.stopPlay();
       findClass();
       var translate_value, position;
       //ul을 이동시키지 않고 li만 이동시키면 
       //현재 보여지고 있는 이미지가 아닌 첫번째 이미지부터 시작해서 위치가 이동되어 버린다. 
       var current_position = active_img.index * img_width; //이미지를 감싸고 있는 ul이 이동할 위치(현재 표시되고 있는 이미지의 위치)
       var target_position = ((i * img_width) - current_position) *-1; //이미지가 이동 할 위치, ul이 움직인 만큼은 빼준다. *-1로 이동할 방향이 정해진다
       panel_box.classList.add('float-img'); //float left 속성을 주어서 이미지를 한줄로 만든다. 
       panel_box.style.transform='translateX(-'+ current_position+ 'px)';
       forEach.call(panels, function(el){
         el.style.transform='translateX('+ target_position+ 'px)';
         el.style.transition='all 1s ease-in';
       })
       changeTab(i);
       setTimeout(changeClass.bind(undefined,i), 1100);
    }, 
    KeyboardNavigation : function(e){
       var keyCode = e.keyCode;
       if(keyCode === 37 || keyCode === 38){
         Carousel.fn.prevSlide();
       } else if(keyCode === 39 || keyCode === 40){
         Carousel.fn.nextSlide();
       } else{
         return;
       }
    }, 
    autoPlay : function(){
     timer = setInterval(Carousel.fn.nextSlide, 2000);
    },
    stopPlay : function(){
       clearInterval(timer);
    }
  };
 
 global.Carousel = Carousel;
 
 })(window, window.document);
 
 (function(global){
  'use strict'
   var img_slide = new Carousel(1500);
 })(window);