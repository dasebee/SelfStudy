# 탭UI

+ 연관된 정보를 그룹화하여 탭이 선택되었을 때 선별적으로 노출되기 때문에 한 화면에서 보다 많은 콘텐츠를 제공할 수 있다. 
+ 탭 형식 UI를 제공할 경우 스크린리더를 사용하는 사용자에게는 정보 접근에 혼란이 생기거나 정보에 대한 이해가 어려워 질 수 있다. 

#### WAI-ARIA를 사용해야 하는 이유

+ 스크린리더 사용자에게 탭과 게시물 목록의 연관관계를 이해할 수 있도록 접근성을 개선할 수 있다. 

#### 탭UI의 ARIA 속성

| 요소      | 역할           | 속성/상태                      | 설명                                       |
| ------- | ------------ | -------------------------- | ---------------------------------------- |
| `<ul>`  | tablist      |                            | 탭 집합                                     |
| `<li>`  | presentation |                            | `<li>` 요소의 리스트 의미를 삭제                    |
| `<a>`   | tab          | aria-selected="true/false" | `<a>` 요소의 역할을 탭으로 정의하고, 선택되었을 때 true, 선택되지 않았을 때 false |
|         |              | aria-controls="{}"         | tabpanel의 id명                            |
|         |              | id="{}"                    | aria-labelledby 속성의 함수명                  |
| `<div>` | tabpanel     | aria-expanded="true/false" | `<div>` 요소의 역할을 tabpanel로 정의하고, tabpanel이 열렸을 때 true, 닫혔을 때 false |
|         |              | aria-labelledby="{}"       | tabpanel의 id명                            |
|         |              | id="{}"                    | aria-controls 속성의 함수명                    |
