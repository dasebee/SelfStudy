(function(global, document, $){
    'use strict'
    var container = $.selector('.container'); 
    //TodoList를 여는 버튼
    var open_btn = $.createEl('a');
    //TodoList Conatianer 영역
    var todo_view = $.createEl('div');
    var todo_container = $.createEl('div');
    var todo_input = $.createEl('input');
    var todo_add = $.createEl('button','+');
    var todo_remove = $.createEl('button','-');
    var todo_clear = $.createEl('button','clear');

    //TodoList의 List영역.
    var todo_list = $.createEl('ul');
    var index = 0; //label과 input에 들어가는 index

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
        if(input_value===""){
            alert('내용을 입력해주세요');
            throw '내용을 입력해주세요';}
        var list_item = $.createEl('li');
        list_item.index = index++;
        list_item.setAttribute('class', 'todo-item');

        var list_check = $.createEl('input');
        list_check.setAttribute('type','checkbox');
        list_check.setAttribute('class','list-check a11y-hidden');
        list_check.setAttribute('id','list'+index)
        
        var list_contents = $.createEl('label',input_value);
        list_contents.setAttribute('class','list-contents'); 
        list_contents.setAttribute('tabindex','0'); 
        list_contents.setAttribute('for','list'+index);

        $.appendChild(list_item,list_check);
        $.appendChild(list_item,list_contents);
        $.appendChild(todo_list,list_item);
        
        todo_input.value = "";
        return false;
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
        return false;
    }

    //list를 모두 삭제하는 함수. 
    var clearAllList = function(){
        todo_list.textContent="";
        return false;
    }

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
    todo_input.setAttribute('placeholder','Input To Do');
    todo_add.setAttribute('type','button');
    todo_add.setAttribute('class','todo-add');
    todo_remove.setAttribute('type','button');
    todo_remove.setAttribute('class','todo-remove');
    todo_clear.setAttribute('type','button');
    todo_clear.setAttribute('class','todo-clear');

    //TodoList의 List영역에 속성 추가.
    todo_list.setAttribute('class','todo-list');

    //만든 요소들 html에 추가하기.
    $.appendChild(container,open_btn);
    $.appendChild(todo_container,todo_input);
    $.appendChild(todo_container,todo_add);
    $.appendChild(todo_container,todo_remove);
    $.appendChild(todo_container,todo_clear);
    $.appendChild(todo_container, todo_list);
    $.appendChild(todo_view, todo_container);
    $.appendChild(container,todo_view);

    // open_btn을 눌렀을 때 Todo List가 보이게 하기.
    open_btn.onclick = toggleTodoList;

    // todo_add를 눌렀을 때 li가 추가되게 하기. 
    todo_add.onclick = addTodoList;

     // todo_remove를 눌렀을 때 li가 추가되게 하기. 
    todo_remove.onclick = removeTodoList;

    // todo_clear를 눌렀을 때 모든 li 삭제하기.
    todo_clear.onclick = clearAllList;

})(window, window.document, window.FDS);