(function(global, document, $){
    'use strict'

  //-------------------------------------------------
  //                필요한 요소들 생성 
  //-------------------------------------------------
    
    var container = $.selector('.container'); 

    //TodoList를 여는 버튼
    var open_btn = $.createEl('a');
    
    //TodoList Conatianer 영역
    var todo_view = $.createEl('div');
    var todo_container = $.createEl('div');
    var todo_input = $.createEl('input');
    var error_text = $.createEl('span');
    var todo_add = $.createEl('button','할일 추가');
    var todo_remove = $.createEl('button','선택 삭제');
    var todo_clear = $.createEl('button','모두 지우기');

    //TodoList의 List영역.
    var todo_list = $.createEl('ul');
    var index = 0; //label과 input에 들어가는 index
    
  //-------------------------------------------------
  //              이벤트에 연결하는 함수들 
  //-------------------------------------------------
    
    // TodoList 토글하는 함수.
    var toggleTodoList = function(){
        var class_name = todo_view.getAttribute('class');
        var reg_exp = /(\s|^)active($|\s)/;
        if(!reg_exp.test(class_name)){
            class_name += " active"; 
            todo_view.setAttribute('class',class_name);   
        }else{
            class_name = class_name.replace('active','').trim();
            todo_view.setAttribute('class',class_name);   
        }
        return false;
    }
    
    //list를 추가하는 함수.
    var addTodoList = function(){
        var input_value = todo_input.value;
        error_text.textContent = '';
        //내용을 입력하지 않았을 경우의 에러 표시
        if(input_value.trim()===""){
            error_text.textContent = '내용을 입력해주세요.';
            return false;
        }

        //리스트를 추가.
        var list_item = $.createEl('li');
        list_item.index = index++;
        list_item.setAttribute('class', 'todo-item');

        var list_check = $.createEl('input');
        list_check.setAttribute('type','checkbox');
        list_check.setAttribute('class','list-check');
        list_check.setAttribute('id','list'+index)
        
        var list_contents = $.createEl('label',input_value);
        list_contents.setAttribute('class','list-contents'); 
        list_contents.setAttribute('tabindex','0'); 
        list_contents.setAttribute('for','list'+index);

        $.appendChild(list_item,list_check);
        $.appendChild(list_item,list_contents);
        $.prependChild(todo_list,list_item);
        
        //리스트 추가가 완료되면 인풋에 입력된 글씨를 지워주자.
        todo_input.value = "";
        countList();
        return false;
    }
    
    // input에 입력후 엔터 치는 것으로 list 추가. 
    var addTodoListByEnter =function(e){
        if(e.keyCode === 13){
            addTodoList();
            countList();
        return false;
        }
    }

    // list의 개수를 화면에 보여주는 함수
    var countList = function(){
        var count = $.selectorAll('li').length;
        if(count >= 1){
            open_btn.textContent = count + '개의 할 일이 있습니다.';
        }else{
            open_btn.textContent = 'make your to do list';
        }
    }

    //list를 삭제하는 함수.
    var removeTodoList = function(){
        var list_item = $.selectorAll('li');
        for(var i = 0, l=list_item.length; i<l; i++){
            var checked_item = $.selector(':checked',list_item[i]);
            if(checked_item){
             var will_removed = $.parent(checked_item);
             todo_list.removeChild(will_removed);
            }
        }
        countList();
        return false;
    }

    //list를 모두 삭제하는 함수. 
    var clearAllList = function(){
        todo_list.textContent="";
        countList();
        return false;
    }

    
  //-------------------------------------------------
  //         만들어 둔 요소들에 속성을 추가.
  //-------------------------------------------------

    // open_btn에 속성 추가.
    open_btn.setAttribute('href','');
    open_btn.setAttribute('role','button');
    open_btn.setAttribute('class','todo-open-btn');
    open_btn.textContent = 'make your to do list';

    // TodoList Container 영역에 속성 추가.
    todo_view.setAttribute('class', 'todo-view active');
    todo_container.setAttribute('class', 'todo-container');
    todo_input.setAttribute('type','text');
    todo_input.setAttribute('class','todo-input');
    todo_input.setAttribute('aria-inalid','true');
    todo_input.setAttribute('aria-describedby','error-text');
    error_text.setAttribute('class', 'error');
    error_text.setAttribute('id', 'error-text');
    error_text.setAttribute('role', 'alert');
    todo_input.setAttribute('placeholder','할 일을 입력해주세요.');
    todo_add.setAttribute('type','button');
    todo_add.setAttribute('class','todo-add');
    todo_remove.setAttribute('type','button');
    todo_remove.setAttribute('class','todo-remove');
    todo_clear.setAttribute('type','button');
    todo_clear.setAttribute('class','todo-clear');

    //TodoList의 List영역에 속성 추가.
    todo_list.setAttribute('class','todo-list');

  //-------------------------------------------------
  //       속성이 추가된 요소들을 HTML에 추가
  //-------------------------------------------------

    $.appendChild(container,open_btn);
    $.appendChild(todo_container,todo_input);
    $.appendChild(todo_container,error_text);
    $.appendChild(todo_container,todo_add);
    $.appendChild(todo_container,todo_remove);
    $.appendChild(todo_container,todo_clear);
    $.appendChild(todo_container, todo_list);
    $.appendChild(todo_view, todo_container);
    $.appendChild(container,todo_view);


  //-------------------------------------------------
  //                 이벤트 연결.
  //-------------------------------------------------

    // open_btn을 눌렀을 때 Todo List가 보이게 하기.
    open_btn.onclick = toggleTodoList;

    // todo_add를 눌렀을 때 li를 추가
    todo_add.onclick = addTodoList;

    // 엔터로 리스트를 추가.
    todo_input.onkeypress = addTodoListByEnter;
    
     // todo_remove를 눌렀을 때 li를 추가.
    todo_remove.onclick = removeTodoList;

    // todo_clear를 눌렀을 때 모든 li 삭제하기.
    todo_clear.onclick = clearAllList;

})(window, window.document, window.FDS);