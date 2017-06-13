/*수업 시간에 만든 유틸리티 복습*/ 
var FDS = function(global){
// -----------------------
// JavaScript 유틸리티 함수
// -----------------------

/* 입력 받은 data의 타입을 확인하여 반환 소문자로 반환*/
function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/* 입력 받은 data의 타입과 kind가 동일한지 비교하여 true/false를 반환*/ 
function isType(data, kind){
    validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다.')
    return type(data) === kind;
}

/*data 종류와 입력 받은 타입을 비교하여 메세지를 출력한다. 
  kind의 첫글자가 !라면 data의 타입과 입력받은 타입이 다를때 에러를 출력. */ 
function validateError(data,kind,error_message){
    data = type(data);
    if(kind.indexOf('!') === 0){
        if(data !== kind.slice(1)) {throw error_message || '두 값이 다르기에 오류입니다.';}
    }else{
        if(data === kind) {throw error_message || '두 값은 동일하기에 오류입니다.'}
    }
    return '오류는 발생하지 않았습니다.';
}
  // ——————————————————————————————————————
  // DOM 검증 유틸리티 함수
  // ——————————————————————————————————————

 /*입력 받은 값이 요소 노드인지 확인 한다. */ 
  function isElementNode(node){
      return node.nodeType === document.ELEMENT_NODE;
  }
  
 /*입력 받은 값이 텍스트 노드인지 확인한다. */   
 function isTextNode(node){
     return node.nodeType === document.TEXT_NODE;
 }

  // ——————————————————————————————————————
  // DOM 선택 API: 유틸리티 함수
  // ——————————————————————————————————————
 
 function id(name){
     validateError(name, '!string', '전달인자는 문자여야 합니다. ');
     return document.getElementById(name);
 }

 function tagAll(name, context){
     validateError(name, '!string', '전달인자는 문자여야 합니다.');
     if(context && !isElementNode(context) && context !==documnet){
         throw '두번쨰 전달인자는 요소노드여야 합니다.';
     }
     return (context || document).getElementsByTagName(name);
 }

 function tag(name, context){
     return tagAll(name,context)[0];
 }

 var classAll = function(){
     var _classAll =null;
     if('getElementByClassName' in Element.prototype){
        _classAll = function(name, context){
            validateError(name, '!string', '첫번째 인자는 문자열이어야 합니다.');
            context = context || document;
            if(context !== documnet && !isElementNode(context)){throw "두번째 전달인자는 요소노드여야 합니다.";}
            return context.getElementsByClassName(name);
        }
     }else{
        _classAll = function(name, context){
            validateError(name, '!string','첫번쨰 인자는 문자열이어야 합니다.');
            context = context || document;
            if(context !== document && !isElementNode(context)){throw "두번째 전달인자는 요소노드여야 합니다."}            
            var _alls = tagAll('*', context);
            var _matched = [];
            var match = new RegExp('(^|\\s)'+name+'($|\\s)');
            for (var i =0, l=_alls.length; i<l; ++i){
                var _el = _alls.item(i);
                if( match.test(_el.className)) {_mathed.push(_el)}
            }
            return _matched;
        }
     }
     return _classAll;
 }();

 var classSingle =function(name, context){
     return classAll(name,context)[0];
 }
 var queryAll = function(selector, context){
     validateError(selector, '!string','첫번째 인자는 css 선택자 문자열이어야 합니다.')
     context = context || document;
    if(context !== document && !isElementNode(context)){throw "두번째 전달인자는 요소노드여야 합니다."} 
    return context.querySelectorAll(selector);
 }
 var query = function(selector, context){
     return queryAll(selector, context)[0];
 }

 
 return {
     type           : type,
     isType         : isType,
     validateError  : validateError,
     isElementNode  : isElementNode,
     isTextNode     : isTextNode,
     id             : id, 
     tagAll         : tagAll,
     tag            : tag, 
     classAll       : classAll,
     classSingle    : classSingle,
     queryAll       :queryAll,
     query          : query,
 }
}(window);