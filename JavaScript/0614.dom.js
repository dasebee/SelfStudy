(function(global, document, _){
    'use strict'
    
  // unsplash.it 이미지 소스 인덱스/대체텍스트 데이터
  var data = [
    {
      index: '1068',
      alt: '푸른 빛 탁자'
    },
    {
      index: '1017',
      alt: '광활한 산맥'
    },
    {
      index: '1067',
      alt: '빛이 스며드는 해안 도시 풍경'
    },
    {
      index: '1060',
      alt: '커피 향기 가득한 매장'
    },
    {
      index: '1042',
      alt: '수 놓은 별 빛이 흐른다'
    },
    {
      index: '1039',
      alt: '녹색 산림 위 폭포수'
    },
    {
      index: '1027',
      alt: '우수에 찬 눈빛의 여인'
    },
    {
      index: '1013',
      alt: '하얀 차량 내부에서 전화 통화 중인 여인'
    },
    {
      index: '977',
      alt: '아름다운 버섯과 빛의 향연'
    },
    {
      index: '859',
      alt: '강렬한 인상을 주는 붉은 벽과 노란 대문'
    },
  ];

    // 동적 생성해야 할 템플릿 코드
  // <li role="presentation">
  //   <a href class="photo-showcase-indicator" role="tab">
  //     <img src="https://unsplash.it/100/100?image=" alt="">
  //   </a>
  // </li>
    var ul = _.selector('ul');
  for(var i = 0, l = data.length; i<l; i++){
    var item = data[i];
    var index = item.index;
    var alt = item.alt;
    var li = _.createEl('li');
    li.setAttribute('role','presentation');
    var a = _.createEl('a');
    a.setAttribute('href','');
    a.setAttribute('class','photo-showcase-indicator');
    a.setAttribute('role','tab');
    var img = _.createEl('img');
    img.setAttribute('src', 'https://unsplash.it/100/100?image=' + index);
    img.setAttribute('alt', alt);
    _.appendChild(li,a);
    _.appendChild(a,img);
    _.appendChild(ul, li);

    a.index = i;
    a.onclick = changeShowcasePhoto;
  }
  function changeShowcasePhoto(){
    var source = data[this.index];
    var showcase_img =_.selector('.photo-showcase img');
    var img_src = showcase_img.getAttribute('src');
    showcase_img.setAttribute('alt', source.alt);
    showcase_img.setAttribute('src', img_src.replace(/=.+/,function(){return '=' + source.index;}));
    return false;
  }

  var container = _.selector('.photo-showcase-container');
  var indicator_first =_.selector('li:first-child a');
  var indicator_last = _.selector('li:last-child a');

  indicator_first.onfocus = function(){
    var container_class = container.getAttribute('class');
    container_class += " active";
    container.setAttribute('class', container_class);
  }

  indicator_last.onblur = function(){
    var container_class = container.getAttribute('class');
    container_class = container_class.replace("active").trim();
    container.setAttribute('class',container_class);
  }

})(window, window.document, window.FDS);


  
