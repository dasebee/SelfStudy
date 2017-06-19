/*
  수정 필요 사항.  
  버튼을 눌렀을 때 이전 화면이 사라져 버림. 
  항상 1번 페이지가 표시된다. 1번 페이지를 눌렀을때 배경이 회색이 된다. 
  중복되는 부분은 함수로 만들기.
 */

var btns = document.querySelectorAll('button');
// 버튼 클릭시 page를 바꿔주는 함수
var changePage = function(index){
  var pages = document.querySelectorAll('.page');
  var pages_class= [];
  var regex = /(\s|^)active($|\s)/

  var active_el = document.querySelector('.active');
  var active_class = active_el.getAttribute('class')
  var clicked_el;
  var clicked_class;
  
  var removeClass = function(index){
      active_class = active_class.replace('active','').trim();
      active_el.setAttribute('class', active_class);
  }

  //page div들의 class.
  for (var i = 0, l=pages.length; i<l; i++){
      pages_class.push(pages[i].getAttribute('class'));
  }
 

  switch(index){
      // default :
      case 3:
        if (!regex.test(pages_class[index])){
          clicked_el = document.querySelector('.p-'+(index+1))
          clicked_el.style.animation = "change3 2s ease-in forwards"
          removeClass(index);
          pages[index].getAttribute('class');
          clicked_class = clicked_el.getAttribute('class');
          clicked_class = clicked_class + ' active';
          clicked_el.setAttribute('class', clicked_class);
          active_el.removeAttribute('style');
        }
        break;
      case 2:
          if (!regex.test(pages_class[index])){
          clicked_el = document.querySelector('.p-'+(index+1))
          clicked_el.style.animation = "change2 2s ease-in forwards"
          removeClass(index);
          pages[index].getAttribute('class');
          clicked_class = clicked_el.getAttribute('class');
          clicked_class = clicked_class + ' active';
          clicked_el.setAttribute('class', clicked_class);
          active_el.removeAttribute('style');
        }
        break;
      case 1:
          if (!regex.test(pages_class[index])){
          clicked_el = document.querySelector('.p-'+(index+1))
          clicked_el.style.animation = "change1 2s ease-in forwards"
          removeClass(index);
          pages[index].getAttribute('class');
          clicked_class = clicked_el.getAttribute('class');
          clicked_class = clicked_class + ' active';
          clicked_el.setAttribute('class', clicked_class);
          active_el.removeAttribute('style');
        }
        break;
      case 0:
          if (!regex.test(pages_class[index])){
          clicked_el = document.querySelector('.p-'+(index+1))
          clicked_el.style.animation = "change0 2s ease-in forwards"
          removeClass(index);
          pages[index].getAttribute('class');
          clicked_class = clicked_el.getAttribute('class');
          clicked_class = clicked_class + ' active';
          clicked_el.setAttribute('class', clicked_class);
          active_el.removeAttribute('style');
        }
        break;
  }
  return false;
}

// 버튼들에 onclick 이벤트 연결. 
for (var i=btns.length; i--; ){
    btns[i].onclick = changePage.bind(null, i);
}