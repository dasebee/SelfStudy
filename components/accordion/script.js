(function(global, $){
 'use strict'
  let $menu_lists =$('.ui-accordion-multi .menu-list');
  let $menu_labels =$('.ui-accordion-multi .menu-label');
  
  //버튼 눌렀을 때 토글
  let toggleList = function(e){
    e.preventDefault();
    let $label = $(this);
    $label.toggleClass('is-active');
    $label.next().toggle(200);
  }
  //초기 설정 : 모두 숨김 
  $menu_lists.hide();
  //이벤트 연결
  $menu_labels.each(function(i){
    let $label = $menu_labels.eq(i);
    $label.find('a').on('click', toggleList.bind(this));
  })

})(window, window.jQuery);

(function(global){
 'use strict'
   let $menu_lists =$('.ui-accordion-single .menu-list');
   let $menu_labels =$('.ui-accordion-single .menu-label');
  
  //버튼 눌렀을 때 토글
  let showSingleList = function(e){
    e.preventDefault();
    let $label = $(this);
    let $visible = $menu_lists.filter(':visible');
    if($label.hasClass('is-active')){return}
    $visible && toggleList($visible.prev());
    toggleList($label);
  }
  let toggleList = function(el){
     el.toggleClass('is-active');
     el.next().toggle(200);
  }
  //초기 설정 : 모두 숨김 
  $menu_lists.hide();
  //이벤트 연결
  $menu_labels.each(function(i){
    let $label = $menu_labels.eq(i);
    $label.find('a').on('click', showSingleList.bind(this));
  })
})(window, window.jQuery);