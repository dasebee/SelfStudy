(function(global, document){
'use strict'
  
  /*=============================================
    수정필요 사항 : 
    b로 이동한 a요소를 클릭하면 제일 처음으로 돌아온다.
    이동후 a요소의 클랙스가 제대로 지워지지 않는다.
  =============================================*/
  
  
  
  
  /*=============================================
  =                  변수 선언                 =
  =============================================*/
  
  var sec_a = document.querySelector('.sec-a ul');
  var sec_b = document.querySelector('.sec-b ul');
  var a_links = sec_a.querySelectorAll('a');
  // var a_lists = sec_a.querySelectorAll('li');
  var b_links = sec_b.querySelectorAll('a');
  // var b_lists = sec_b.querySelectorAll('li');


  /*=============================================
  =                  함수 선언                =
  =============================================*/
  var removeClass= function(el){
    var active_li = el.querySelector('.active');
    active_li.classList.remove('active');
  }
  var addClass = function(){
    if(sec_a.querySelector('.active')){
      removeClass(sec_a);
    }
    this.parentNode.classList.add('active');
    return false;
  }
  var changeItems = function(){
    var selected_li = this.parentNode;
    var active_li = sec_a.querySelector('.active');
    sec_b.insertBefore(active_li.cloneNode(true),selected_li);
    active_li.replaceWith(selected_li);
    removeClass(sec_b);
    return false;
  }

  /*=============================================
  =                 이벤트 연결                 =
  =============================================*/
  Array.prototype.forEach.call(a_links, function(item){
    item.onclick = addClass;
  })  
  Array.prototype.forEach.call(b_links, function(item){
    item.onclick = changeItems;
  })  
  
})(window, window.document);