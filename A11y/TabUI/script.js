(function(global, document) {
 'use strict'
  // 해야할 것
    // 키보드로 이전다음, 
  // 변수 선언
  var tabs, tab_panels, active_tab, active_panel;
  var forEach = Array.prototype.forEach;
  
  // tab과 tab_panel 찾기
  tabs = document.querySelectorAll('.tab');
  tab_panels =document.querySelectorAll('.tab-panel');
  
  // tab과 tab_panel에 index 추가
  forEach.call(tabs, (el, index) => {
    el.index = index;
    el.addEventListener('click', changeTab.bind(el, el));
  });
  forEach.call(tab_panels, (el, index) => {
    el.index = index;
  });

  // 이벤트 함수
  // active 요소 찾기
  function findActive() {
    active_tab = document.querySelector('.active-tab');
    active_panel = document.querySelector('.active-panel');
  }
  // active 변경
  function changeTab(el, e) {
    e.preventDefault();
    findActive();
    // 보여지고 있는 탭의 속성을 변경
    active_tab.classList.remove('active-tab');
    active_tab.querySelector('a').setAttribute('aria-selected', false);
    // 클릭된 탭의 속성을 변경
    this.parentNode.classList.add('active-tab');
    this.setAttribute('aria-selected', true);
    // 보여지고 있는 탭패널의 속성을 변경
    active_panel.classList.remove('active-panel');
    active_panel.setAttribute('aria-expanded', false);
    // 클릭된 탭패널의 속성을 변경
    forEach.call(tab_panels, el => {
      if(this.index === el.index) {
        el.classList.add('active-panel');
        el.setAttribute('aria-expanded', true)
      }
    })
  }
  // 키보드 이벤트
  function changeTabByKey(){

  }
})(window, window.document);