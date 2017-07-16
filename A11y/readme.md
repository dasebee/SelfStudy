# 레이어 팝업

#### 레이어 팝업

+ 팝업 창과 같은 효과를 내도록 같은 페이지 내에서 기존 콘텐츠를 가리고 그 위에 새로운 층에 팝업 창 형태의 콘텐츠 영역을 보이도록 하는 것. 


+ 레이어 팝업을 호출하면 포커스를 레이어 팝업으로 지정하고, 레이어 팝업을 닫거나 ESC키를 누르면 레이어 팝업을 호출하기 전 포커스로 돌려보내야 한다.
+ 레이어 팝업에서의 탭키는 순차적으로 링크를 이동해야 한다. 
+ 자바스크립트를 이용하여 호출된 레이어 팝업으로 포커스를 이동한 경우 스크린리더에서는 포커스 이동을 인지하지 못하고 읽을 수 없다. 스크린리더의 브라우저모드(윈도우커서)를 사용할 경우 자바스크립트로 포커스를 이동시켜도 읽을 수 있다. 
+ 콘텐츠의 선형화를 고려한다면 레이어 팝업 코드는 팝업창 열기 링크 다음에 위치하는 것이 좋다.

#### WAI-ARIA를 사용해야하는 이유

스크린리더를 이용하는 사용자에게는 레이어 팝업은 `<div>` 요소의 내용을 읽어주기 때문에 팝업이 발생했는지 정확히 전달하기 어려운데, 이때 WAI-ARIA를 사용하면 레이어 팝업임을 인지시킬 수 있다. 

#### 레이어 팝업의 WAI-ARIA 구조

+ role = "dialog" : 다이얼로그 역할을 정의
+ aria-hidden="true" : 해당 요소를 보조기기에서 들리지 않게 한다.
+ aria-hiddne="false" : 해당 요소를 보지기기에서 들리게 한다. 
+ aria-labelledby="id값" : 레이어 팝업에 대한 제목을 기술해 둔 요소와 연결한다.


----------

# 캐러셀(Carousel) 

#### 캐러셀 

+ 화면을 슬라이드하는 컴포넌트, 한정된 컴포넌트 영역 내에서 많은 콘텐츠를 보여줄 수 있어서 효과적. 


+ 스크린리더 사용자가 캐러셀에 접근했을 때 해당 영역이 캐러셀이라는 정보를 제공받지 못할 경우 혼란을 야기할 수 있으니 정확하게 인지할 수 있도록 정보 구성필요. 
+ 키보드 사용자가 키보드만으로 탐색 가능해야 한다. 
+ 자동으로 재생되는 애니메이션 기능은 마우스뿐만 아닌 키보드로도 멈출 수 있는 기능 제공필요. 
+ UX관점에서 이전/다음 콘텐츠에 대한 정보를 버튼을 누르지 않고도 제공 받을 수 있어야 한다. 

#### WAI-ARIA를 사용해야하는 이유

+ HTML 구조 요소에 적절한 역할, 속성, 상태를 부여할 수 있어서 스크린리더 사용자에게 의미적이고, 유효한 정보를 제공할 수 있다. 
+ 업데이트 상태를 변경 순간마다 알려줄 수 있어서 정확하게 현 상황에 대해 인지할 수 있도록 도와준다. 

#### 캐러셀의 WAI-ARIA구조

| 요소        | 역할           | 속성/상태                           | 설명                                   |
| --------- | ------------ | ------------------------------- | ------------------------------------ |
| `<div>`   | region       | aria-label                      | 영역 역할을 설정하고 레이블 추가                   |
| `<ol>`    | tablist      |                                 | tab의 집합 역할 설정                        |
| `<li>`    | presentation |                                 | `<li>`요소가 가지는 리스트이 의미를 무시            |
| `<a>`     | tab          | aria-selected=''true \| false"" | tab역할 설정 및 선택된 상태 처리                 |
|           |              | aria-controls="{}"              | 조작하려는 tabpanel의 ID                   |
|           |              | id="{}"                         | 조작하려는 tabpanel이 참조하는 tab ID          |
| `ul`>`li` | tabpanel     | aria-hidden="true\|false"       | tabpanel 역할 설정 및 보조기기에서 들림/안들림 상태 처리 |
|           |              | aria-labelledby="{}"            | 연결된 tab의 ID                          |
|           |              | id="{}"                         | tab이 참조하는 tabpanel ID                |



